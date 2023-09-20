import { Document, Schema, model, Types } from 'mongoose'

interface UserDoc extends Document {
	name: string
	email: string
	password: string
	location: string
	subscribed_services: Types.ObjectId[]
}

const UserSchema: Schema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		index: true
	},
	password: {
		type: String,
		required: true
	},
	location: {
		type: String,
		required: true
	},
	subscribed_services: {
		type: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Services'
			}
		],
		default: []
	}
})

const UserModel = model<UserDoc>('Users', UserSchema)

export default UserModel
