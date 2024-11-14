import express from "express";
import {UserAuthRouter} from "./auth.roting";
import {authMiddleware, IDFAuthMiddleware} from "../middleware/auth.middleware"
import {getAllUser, GetAllCandidate} from "../controller/user.controller"
import {tryCatchHandler} from "../middleware/tryCatchHandler.middleware"
import {missilesRouter} from "./missile.roting"
const mainRouter = express.Router();

mainRouter.get("/", (req, res) => {
    console.log("Welcome to the Express.js API!");
    res.status(200).json({ message: "Welcome to the Express.js API!" });
});
mainRouter.use(UserAuthRouter);
mainRouter.use(missilesRouter);

// mainRouter.get("/users", managerAuthMiddleware, tryCatchHandler(getAllUser));
// mainRouter.get("/candidate",tryCatchHandler(GetAllCandidate) )



export default mainRouter;
