// Auth routes
import { Router } from 'express'
import { loginUser, newUser } from '../../controllers/user.controller';

const router = Router()

router.post('/new',newUser)
router.post('/login',loginUser)


export default router;
