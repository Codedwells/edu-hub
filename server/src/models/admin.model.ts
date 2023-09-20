import { Document, Schema, model, Types } from 'mongoose'

enum MembershipLevel {
	Admin = 'Admin',
	Super = 'Super'
}

interface AdminDoc extends Document {
	email: string
	password: string
	membershipType: {
		type: MembershipLevel
	}
}

const AdminSchema: Schema = new Schema({
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	membershipType: {
		type: String,
		enum: [MembershipLevel.Admin, MembershipLevel.Super],
		default: MembershipLevel.Admin
	}
})

const AdminModel = model<AdminDoc>('Admins', AdminSchema)

export default AdminModel
