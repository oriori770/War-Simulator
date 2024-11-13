import express from "express";
import {UserAuthRouter} from "./auth.roting";
import {authMiddleware, managerAuthMiddleware} from "../middleware/auth.middleware"
import {getAllUser, GetAllCandidate} from "../controller/user.controller"
import {tryCatchHandler} from "../middleware/tryCatchHandler.middleware"
import {voteRouter} from "./vote.roting"
const mainRouter = express.Router();

mainRouter.get("/", (req, res) => {
    console.log("Welcome to the Express.js API!");
    res.status(200).json({ message: "Welcome to the Express.js API!" });
});
mainRouter.use(UserAuthRouter);
mainRouter.use(authMiddleware ,voteRouter);

mainRouter.get("/users", managerAuthMiddleware, tryCatchHandler(getAllUser));
mainRouter.get("/candidate",tryCatchHandler(GetAllCandidate) )



export default mainRouter;
