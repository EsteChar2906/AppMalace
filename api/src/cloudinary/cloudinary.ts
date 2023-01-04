import { v2 as cloudinary } from 'cloudinary';
import {
	CLOUD_NAME_CLOUDINARY,
	API_KEY_CLOUDINARY,
	API_SECRET_CLOUDINARY
} from '../config'

//configuracion para garantizar que devuelva las URL 'https'
cloudinary.config({
	cloud_name: CLOUD_NAME_CLOUDINARY,
	api_key: API_KEY_CLOUDINARY,
	api_secret: API_SECRET_CLOUDINARY,
	secure: true
});

//sube la imagen en cloudinary
export const uploadImage = async (imagePath: string): Promise<any> => {
	const result = await cloudinary.uploader.upload(imagePath, {
		folder: "Prendas",
	});
	return result;
};

//elimina la imagen buscandola por su public_id
export const deleteImage = async(public_id: string): Promise<any> => {
	const result = await cloudinary.uploader.destroy(public_id);
	return result;
};