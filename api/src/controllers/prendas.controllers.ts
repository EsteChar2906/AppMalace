import { Request, Response } from 'express';
import Prendas from '../models/prendas';

export const createPrendas = (req: Request, res: Response): Promise<Response<any>> | any => {
	try{
		const { 
			title, 
			description, 
			tallas, 
			precio, 
			stock, 
			image } = req.body;
		if(!title || !description || !tallas || !precio || !stock || !image){
			return res.status(400).json({message: "Se requieren datos para preceder"})
		}
	} catch(error: any){
		if(error.message !== undefined){
			return res.status(500).json({ message: error.message})
		} else {
			throw new Error("Error intente mas tarde")
		}
	}
}