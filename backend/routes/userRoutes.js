import Express from "express";
const router = Express.Router();
import { authUser } from "../controllers/userController.js";

router.post('/auth', authUser)

export default router;

