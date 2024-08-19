import { Router } from "express";
import UserRouter from "./user.js";
import ProfileRouter from "./profile.js";

const RootRouterV1 = Router()

RootRouterV1.use('/users', UserRouter)
RootRouterV1.use('/profile', ProfileRouter)

export {
    RootRouterV1
}