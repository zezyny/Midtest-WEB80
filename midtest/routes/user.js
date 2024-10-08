import { Router } from "express";
import userController from "../controllers/user.js";

const UserRouter = Router();

UserRouter.post('/register', userController.register)
UserRouter.post('/login', userController.login)
UserRouter.post('/logout', userController.logout)

export default UserRouter