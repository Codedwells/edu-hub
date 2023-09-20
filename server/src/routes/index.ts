import v1Router from './v1';
import {Router} from 'express';

const router = Router();
router.use("/api/v1",v1Router)

export default router;
