import mongoose from 'mongoose';
import { MONGO_URL } from './config'

(async () => { 
	await mongoose.set('strictQuery', false);
	const db = await mongoose.connect(`${MONGO_URL}`)
	console.log(`dataBase is connected to ${db.connection.name} in the port ${db.connection.port}`)
})();
