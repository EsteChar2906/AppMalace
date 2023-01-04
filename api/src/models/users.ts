import { Schema, model, Document, Types } from 'mongoose';

interface IUsers extends Document{
	firstName: string;
	lastName: string;
	userName: string;
	password: string;
	mail: string;
	roles: Types.ObjectId;
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
	roles: {
		type: Schema.Types.ObjectId,
		ref: 'Roles'
	}
},{
	versionKey: false,
	timestamps: true
});

export default model<IUsers>("Users", userSchema)
