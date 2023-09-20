import { Document, Schema, model, Types } from 'mongoose'

interface ServiceDoc extends Document {
    name: string
	price: number
	author: Types.ObjectId
    dates: string[]
    subscribers: Types.ObjectId[]
}

const ServiceSchema: Schema = new Schema({
    name:{
        type: String,
        required: true
    },
	author: {
		type: Types.ObjectId,
		required: true
	},
	dates: {
		type: [String],
        default:[],
	},
	price: {
		type: Number,
		required: true
	},
	subscribers: {
		type: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Users'
			}
		],
		default: []
	}
})

const ServiceModel = model<ServiceDoc>('Services', ServiceSchema)

export default ServiceModel
