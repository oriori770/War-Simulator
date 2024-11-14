import express from "express";
import {postNewMissile, getMissileBySendId,getMissileByArea} from "../controller/missiles.controller"

import {tryCatchHandler} from "../middleware/tryCatchHandler.middleware"
import {authMiddleware, IDFAuthMiddleware} from "../middleware/auth.middleware"


export const missilesRouter = express.Router();

missilesRouter.post("/missilesStatus",authMiddleware,  tryCatchHandler(postNewMissile));
missilesRouter.post("/missilesNew",authMiddleware, tryCatchHandler(postNewMissile))
missilesRouter.get("/missilesById/:Id",authMiddleware, tryCatchHandler(getMissileBySendId))
missilesRouter.get("/missilesByArea/:Area",authMiddleware, tryCatchHandler(getMissileByArea))
