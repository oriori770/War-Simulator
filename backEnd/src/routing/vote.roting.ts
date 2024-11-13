import express from "express";
import {postVote, postCancelVote} from "../controller/vote.controller"

import {tryCatchHandler} from "../middleware/tryCatchHandler.middleware"

export const voteRouter = express.Router();

voteRouter.post("/vote", tryCatchHandler(postVote))
voteRouter.post("/cancelVote", tryCatchHandler(postCancelVote))

    