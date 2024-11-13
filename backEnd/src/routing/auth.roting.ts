import express from "express";
import {postNewUser, postLogin} from "../controller/userAuth.Controller"

import {tryCatchHandler} from "../middleware/tryCatchHandler.middleware"

export const UserAuthRouter = express.Router();

UserAuthRouter.post("/register", tryCatchHandler(postNewUser));
UserAuthRouter.post("/login", tryCatchHandler(postLogin))

    