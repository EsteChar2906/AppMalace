import mongoose from 'mongoose';
import { MONGO_URL } from './config'

(async () => { 
	await mongoose.set('strictQuery', false);
	const db = await mongoose.connect(`${MONGO_URL}`)
	console.log(`Using Mongo DB version ${db.version} in the port ${db.connection.port}`)
})();
