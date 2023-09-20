import { Document, Schema, model, Types } from 'mongoose'

interface nlServiceDoc extends Document {
	location: string
	coll_id: string
	routine: string // weekly,biweekly
}

const nlServiceSchema: Schema = new Schema({
	location: {
		type: String,
		required: true
	},
	coll_id: {
		type: String,
        unique:true,
		required: true
	},
	routine: {
		type: String,
		required: true
	}
})

const nlServiceModel = model<nlServiceDoc>('nlServices', nlServiceSchema)

export default nlServiceModel
