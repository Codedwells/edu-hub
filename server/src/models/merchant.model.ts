import { Document, Schema, model, Types } from 'mongoose'

interface MerchantDoc extends Document {
	name: string
	email: string
	password: string
	location: string
	offered_services: Types.ObjectId[]
}

const MerchantSchema: Schema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	location: {
		type: String,
		required: true
	},
	offered_services: {
		type: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Services'
			}
		],
		default: []
	}
})

const MerchantModel = model<MerchantDoc>('Merchants', MerchantSchema)

export default MerchantModel
