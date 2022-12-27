import { Schema, model, Document } from 'mongoose';

interface IPrendas extends Document {
	title: string;
	description: string;
	tallas: any[];
	precio: number;
	stock: number;
	image:{
		secure_url: string;
		public_url: string;
	}
};

const prendasSchema = new Schema({
	title: {
		type: String,
		required: true,
		trim: true
	},
	description: {
		type: String,
		trim: true
	},
	tallas: {
		type: Array,
		required: true
	},
	precio: {
		type: Number,
		required: true
	},
	stock: {
		type: Number,
		required: true
	},
	image: {
		secure_url:{
			type: String,
			required: true
		},
		public_url:{
			type: String,
			required: true
		}
	}
},{
	versionKey: false,
	timestamps: true
});

export default model<IPrendas>("Prendas", prendasSchema);