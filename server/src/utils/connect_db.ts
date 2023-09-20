import mongoose from 'mongoose';
import { Logger } from 'borgen';
import { MONGO_URL } from '../config';

mongoose.set('strictQuery', true);

export const connectDb = (server: () => void): void => {
	mongoose
		.connect(MONGO_URL || '')
		.then(() => {
			Logger.info({
				message: 'Connected to the DB...',
				messageColor: 'greenBright',
				infoColor: 'gray'
			});

			server();
		})
		.catch((err) => {
			Logger.error({ message: 'connectDb' + err.message });
		});
};

