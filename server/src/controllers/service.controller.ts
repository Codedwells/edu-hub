// Services controllers
// Users controllers
import JWT from 'jsonwebtoken'
import { Request, Response } from 'express'
import UserModel from '../models/user.model'
import MerchantModel from '../models/merchant.model'
import { Logger } from 'borgen'
import { SECRET } from '../config'
import ServiceModel from '../models/service.model'
import { Types } from 'mongoose'
import nlServiceModel from '../models/newService.model'

//nl Service
export const nlNewService = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { location,routine,coll_id} = req.body

        console.log(location,routine,coll_id)


			const newService = new nlServiceModel({
            location,
            routine,
            coll_id
		})

		let savedService = await newService.save()


		res.status(200).json({
			status: 'success',
            data: savedService,
			message: `${coll_id} service has been created!!`
		})
	} catch (err) {
		res.status(500).json({
			status: 'error',
			data: { message: 'Internal Server Error', result: {} }
		})

		Logger.error({ message: 'newService: ' + err })
	}
}

// get nl services
export const nlGetServices = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const {coll_id} = req.body;
        const services = await nlServiceModel.findOne({coll_id})

        if(!services){
            res.status(200).json({
                status: 'error',
                data: {
                    message: 'Order not found',
                    result: {}
                }
            })
            return
        }

        res.status(200).json({
            status: 'success',
            message: 'Services have been queried!!',
            data: services
        })
    } catch (err: any) {
        res.status(500).json({

            status: 'error',
            data: { message: 'Internal Server Error', result: {} }
        })
    }
}


// Create new service
export const newService = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { access_token, name, dates, price } = req.body

		let decoded = JWT.verify(access_token, SECRET)

		if (!decoded) {
			res.status(200).json({
				status: 'error',
				data: {
					message: 'Please login to continue !',
					result: {}
				}
			})
			return
		}

		const newService = new ServiceModel({
			name,
			author: new Types.ObjectId(decoded as string),
			dates: dates,
			price
		})

		let savedService = await newService.save()

		await MerchantModel.findByIdAndUpdate(
			decoded,
			{ $push: { offered_services: savedService.id } },
			{ new: true }
		)

		res.status(200).json({
			status: 'success',
			message: `${req.body.name} service has been created!!`
		})
	} catch (err) {
		res.status(500).json({
			status: 'error',
			data: { message: 'Internal Server Error', result: {} }
		})

		Logger.error({ message: 'newService: ' + err })
	}
}

// Subscribe to a service
export const subscribe = async (req: Request, res: Response): Promise<void> => {
	try {
		const { service_id, access_token } = req.body

		let decoded = JWT.verify(access_token, SECRET)

		if (!decoded) {
			res.status(200).json({
				status: 'error',
				data: {
					message: 'Please login to continue !',
					result: {}
				}
			})
			return
		}

		let service = await ServiceModel.findById(service_id)

		// if no service found
		if (!service) {
			res.status(200).json({
				status: 'error',
				data: {
					message: 'Service not found',
					result: {}
				}
			})
			return
		}

		// if user already subscribed
		if (
			service.subscribers.includes(new Types.ObjectId(decoded as string))
		) {
			res.status(200).json({
				status: 'error',
				data: {
					message: 'You have already subscribed to this service',
					result: {}
				}
			})
			return
		}

		// subscribe user to service
		await ServiceModel.findByIdAndUpdate(
			service_id,
			{ $push: { subscribers: decoded } },
			{ new: true }
		)

		// add service to user's subscribed_services
		await UserModel.findByIdAndUpdate(
			decoded,
			{ $push: { subscribed_services: service_id } },
			{ new: true }
		)

		res.status(200).json({
			status: 'success',
			message: 'You have successfully subscribed to this service'
		})
	} catch (err: any) {
		res.status(500).json({
			status: 'error',
			data: { message: 'Internal Server Error', result: {} }
		})

		Logger.error({ message: 'subscribeService: ' + err })
	}
}

// Unsubscribe from a service
export const unsubscribe = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const { service_id, access_token } = req.body

		// verify access token
		let decoded = JWT.verify(access_token, SECRET)

		if (!decoded) {
			res.status(400).json({
				status: 'error',
				data: {
					message: 'Please login to continue !',
					result: {}
				}
			})
			return
		}

		let service = await ServiceModel.findById(service_id)

		// if no service found
		if (!service) {
			res.status(400).json({
				status: 'error',
				data: {
					message: 'Service not found',
					result: {}
				}
			})
			return
		}

		// if user not subscribed
		if (
			!service.subscribers.includes(new Types.ObjectId(decoded as string))
		) {
			res.status(400).json({
				status: 'error',
				data: {
					message: 'You have not subscribed to this service',
					result: {}
				}
			})
			return
		}

		let filtered = service.subscribers.filter((id) => id != decoded)

		// unsubscribe user from service
		await UserModel.findByIdAndUpdate(
			decoded,
			{ $pull: { subscribed_services: service_id } },
			{ new: true }
		)

		await ServiceModel.findByIdAndUpdate(
			service_id,
			{ $pull: { subscribers: decoded } },
			{ new: true }
		)

		res.status(200).json({
			status: 'success',
			message: 'You have successfully unsubscribed from this service'
		})
	} catch (err: any) {
		res.status(500).json({
			status: 'error',
			data: { message: 'Internal Server Error', result: {} }
		})

		Logger.error({ message: 'unSubscribeService: ' + err })
	}
}

// Get all services
export const getAllServices = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const services = await ServiceModel.find()

		res.status(200).json({
			status: 'success',
			message: 'Services have been queried!!',
			data: services
		})
	} catch (err: any) {
		res.status(500).json({
			status: 'error',
			data: { message: 'Internal Server Error', result: {} }
		})

		Logger.error({ message: 'unSubscribeService: ' + err })
	}
}
