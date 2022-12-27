import app from './app';
import './dataBase';

//Starting the server

const main = async() => {
	await app.listen(app.get('port'), () => {
		console.log(`listening on port ${app.get("port")}`)
	});
};

main();