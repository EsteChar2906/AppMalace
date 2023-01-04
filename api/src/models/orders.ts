import { Schema, model, Document, Types } from 'mongoose';

interface IOrders extends Document{
	price: number;
	user: Types.ObjectId;
	prendas: any[string];
	totalPrendas: number;
	status: string;
	payId: string;
	payerId: string;
};

const orderSchema = new Schema({
	price:{
		type: Number,
		required: true
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'Users',
		required: true
	},
	prendas: {
		type: Array;
		required: true
	},
	totalPrendas: {
		type: Number,
		required: true
	},
	status: {
		type: String,
		required: true
	},
	payId:{
		type: String,
		required: true
	},
	payerId: {
		type: String,
		required: true
	}
});

export default model<IOrders>("Orders", orderSchema);