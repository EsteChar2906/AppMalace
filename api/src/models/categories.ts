import { Schema, model, Document } from 'mongoose';

interface ICategories extends Document {
	name: string;
};

const categorySchema = ({
	name:{
		type: String
	}
});

export default model<ICategories>("Categories", categorySchema);