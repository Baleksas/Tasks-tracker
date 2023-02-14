import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

import Routes from "./routes/tasks.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true })); // for parsing application/json
app.use(express.urlencoded({ limit: "30mb", extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

app.use("/", Routes);
app.get("/", (req, res) => {
  res.send("Running...");
});
const PORT = process.env.PORT || 5001;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Listening on port: ${PORT}`)))
  .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);
