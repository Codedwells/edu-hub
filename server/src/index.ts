import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes'
import bodyParser from 'body-parser'
import compression from 'compression'
import { Borgen, Logger } from 'borgen'
import express, { Response } from 'express'
import { connectDb } from './utils/connect_db'

// Setup environment variables
dotenv.config()

const app = express()

// Middleware
app.use(Borgen({}))
app.use(
	cors({
		origin: ['*']
	})
)
 app.set('Bypass-Tunnel-Reminder', 'your-header-value-here');
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.use('/', router)

// Test route
app.get('/ping', (_, res: Response) => {
	res.status(200).json({ status: 'success', message: 'pong' })
})

// connect to server and the start server
connectDb(startServer)

// IIF to start server
function startServer() {
	app.listen(process.env.PORT || 3000, () => {
		Logger.info({
			message: `Server is running on port ${process.env.PORT || 3000}`
		})
	})
}
