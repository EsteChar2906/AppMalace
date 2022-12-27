import { config } from 'dotenv';
config();

export const MONGO_URL = process.env.MONGO_URL;
export const PORT = process.env.PORT || 3003;
