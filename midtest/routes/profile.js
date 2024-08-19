import { Router } from "express";
import profileController from "../controllers/profile.js";
import { authMiddleware } from "../middlewares/auth.js";

const ProfileRouter = Router()
ProfileRouter.put('/:id', authMiddleware.verifyJwt, profileController.updateProfile)
ProfileRouter.get('/:id', authMiddleware.verifyJwt, profileController.getProfile)
ProfileRouter.delete('/:id', authMiddleware.verifyJwt, profileController.deleteProfile)

export default ProfileRouter