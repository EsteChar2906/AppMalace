import { Request, Response } from 'express';
import Prendas from '../models/prendas';
import Users from '../models/users';
import Categories from '../models/categories';
import { uploadImage } from '../cloudinary/cloudinary';

export const getAllPrendas = async (req: Request, res: Response): Promise<any> => {
	try{
		let page = parseInt(req.query.page) - 1 || 0;
		let limit;
		let moda = req.query.moda || "All";
		let category = req.query.category || "All";
		let name = req.query.name || "";
		let sort = req.query.sort || "";

		const findCategories = await Categories.find();
		let allCategories = findCategories.map((c) => c.name);

		allCategories === "All" ?
		(category = [...allCategories]) :
		(category = req.query.category.split(",").toSting());

		req.query.category === "All" ?
		(limit = 10) : (limit = 31);

		let sortBy = {};
		sort === "asc" && sortBy["precio"] = 1;
		sort === "desc" && sortBy["precio"] = -1;

		const prendas = await Prendas.find({
			name: {$regex: name, $options: "i"},
			
		})

	} catch(error) {

	}
};

export const createPrendas = async (req: Request, res: Response): Promise<any> => {
	try{
		const { 
			title,
			category,
			user,
			moda,
			description, 
			tallas, 
			precio, 
			stock, 
			image } = req.body;

		if(!title || !description || !tallas || !precio || !stock || !image){
			return res.status(400).json({message: "Se requieren datos para preceder"})
		} else {

			//llega la imagen en base64
			const imgCloudinary = await uploadImage(image);

			const newPrenda = new Prendas({
				title, 
				moda,
				description, 
				tallas, 
				precio, 
				stock, 
				image: {
					public_id: imgCloudinary.public_id,
					public_url: imgCloudinary.public_url
				}
			});

			const findUsers = await Users.find({email: {$in: user}});
			newPrenda.user = findUsers.map((u) => u._id);

			const findCategory = await Categories.find({name: {$in: category}});
			newPrenda.category = findCategory.map((c) => c._id)
			
			const savePrenda = await newPrenda.save();

			return res.status(201).json(savePrenda);
		}
	} catch(error: any){
		if(error.message !== undefined){
			return res.status(500).json({ message: error.message})
		} else {
			throw new Error("Error intente mas tarde")
		}
	}
};
