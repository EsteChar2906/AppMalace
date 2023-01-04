import { config } from 'dotenv';
config();

export const MONGO_URL = process.env.MONGO_URL;
export const PORT = process.env.PORT || 3003;
export const CLOUD_NAME_CLOUDINARY = process.env.CLOUD_NAME_CLOUDINARY;
export const API_KEY_CLOUDINARY = process.env.API_KEY_CLOUDINARY;
export const API_SECRET_CLOUDINARY = process.env.API_SECRET_CLOUDINARY;