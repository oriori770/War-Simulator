import express from "express";
import mainRouter from "./routing/main.routing";
import mongo from "./dal/mongo.dal"
import {errorHandler} from "./middleware/error.middleware"
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import cors from "cors"

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors())



app.use(express.json());
app.use(cookieParser());

mongo();


app.use("/api", mainRouter);


app.use(errorHandler) 

app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`);
});



