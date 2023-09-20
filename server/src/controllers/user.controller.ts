// Users controllers
import JWT from 'jsonwebtoken'
import { Request, Response } from 'express'
import UserModel from '../models/user.model'
import MerchantModel from '../models/merchant.model'
import { Logger } from 'borgen'
import bcrypt from 'bcrypt'
import { SECRET } from '../config'

export const newUser = async (req: Request, res: Response): Promise<void> => {
	try {
		let isExistingUser = await UserModel.findOne({ email: req.body.email })

		if (isExistingUser) {
			res.status(200).json({
				status: 'error',
				message: 'User already exists!'
			})
			return
		}

		const hashedPass = await bcrypt.hash(req.body.password, 10)
		let data: any

		if (req.body.type == 'user') {
			const newUser = new UserModel({
				name: req.body.name,
				email: req.body.email,
				password: hashedPass,
				location: req.body.location
			})

			data = await newUser.save()
		} else if (req.body.type == 'merchant') {
			const newUser = new MerchantModel({
				name: req.body.name,
				email: req.body.email,
				location: req.body.location,
				password: hashedPass
			})

			data = await newUser.save()
		}

		res.status(200).json({
			status: 'success',
			message: `${req.body.name} account has been created!!`,
			data
		})
	} catch (err) {
		res.status(500).json({
			status: 'error',
			data: { message: 'Internal Server Error', result: {} }
		})

		Logger.error({ message: 'newUser: ' + err })
	}
}

/**
 * Login User
 * @route POST /user/login
 */
export const loginUser = async (req: Request, res: Response): Promise<void> => {
	try {
		const { email, password, type } = req.body

		if (type == 'user') {
			let isUser = await UserModel.findOne({ email }).populate({
				path: 'subscribed_services'
			})

			if (!isUser) {
				res.status(400).json({
					status: 'error',
					data: { message: 'Invalid Email or Password', result: {} }
				})
				return
			}

			let isMatch = await bcrypt.compare(password, isUser?.password)

			if (!isMatch) {
				res.status(400).json({
					status: 'error',
					data: { message: 'Invalid Email or Password', result: {} }
				})
				return
			}

			let accessToken = JWT.sign(isUser.id, SECRET)

			res.status(200).json({
				status: 'success',
				message: 'Login successfully!',
				data: {
					name: isUser.name,
					services: isUser.subscribed_services,
					access_token: accessToken
				}
			})
		} else if (type == 'merchant') {
			let isMerchant = await MerchantModel.findOne({ email }).populate({
				path: 'offered_services',
				populate: {
					path: 'subscribers',
					model: 'Users'
				}
			})

			if (!isMerchant) {
				res.status(400).json({
					status: 'error',
					data: { message: 'Invalid Email or Password', result: {} }
				})
				return
			}

			let isMatch = await bcrypt.compare(password, isMerchant?.password)

			if (!isMatch) {
				res.status(400).json({
					status: 'error',
					data: { message: 'Invalid Email or Password', result: {} }
				})
				return
			}

			let accessToken = JWT.sign(isMerchant.id, SECRET)

			res.status(200).json({
				status: 'success',
				message: 'Login successfully!',
				data: {
					name: isMerchant.name,
					location: isMerchant.location,
					services: isMerchant.offered_services,
					access_token: accessToken
				}
			})
		}
	} catch (err) {
		res.status(500).json({
			status: 'error',
			data: { message: 'Internal Server Error', result: {} }
		})

		Logger.error({ message: 'loginUser: ' + err })
	}
}
