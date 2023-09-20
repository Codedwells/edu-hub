import { Router } from 'express'
import testRouter from './testRoutes'
import authRouter from './auth'
import serviceRouter from './services'

const v1Router = Router()

v1Router.use('/test', testRouter)
v1Router.use('/flow',authRouter)
v1Router.use("/services",serviceRouter)

export default v1Router
