import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./Routes/userRoute.js";

const app = express();
app.use(bodyParser.json());
dotenv.config();

const port = process.env.PORT || 5000;
const mongoURL = process.env.MONGO_URL;

mongoose
  .connect(mongoURL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is runnig on port ${process.env.PORT}`);
    });
    console.log("the database is connected");
  })
  .catch((err) => console.log(err));

app.use("/api/users", route);

