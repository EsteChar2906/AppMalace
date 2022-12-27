import { Schema, model, Document, Types } from 'mongoose';

interface IUsers extends Document{
	firstName: string;
	lastName: string;
	userName: string;
	password: string;
	mail: string;
	prendas: Types.ObjectId
};

const userSchema = new Schema({
	firstName:{
		type: String,
		required: true,
		trim: true
	},
	lastName:{
		type: String,
		required: true,
		trim: true
	},
	userName:{
		type: String,
		unique: true,
		required: true,
		trim: true	
	},
	password: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	mail: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	prendas: {
		type: Schema.Types.ObjectId,
		ref: 'Prendas'
	}
},{
	versionKey: false,
	timestamps: true
});

export default model<IUsers>("Users", userSchema)
