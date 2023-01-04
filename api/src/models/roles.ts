import { Schema, model, Document } from 'mongoose';

interface IRoles extends Document {
	name: string;
};

const roleSchema = new Schema({
	name: {
		type: String,
		trim: true
	}
})

export default model<IRoles>("Roles", roleSchema);