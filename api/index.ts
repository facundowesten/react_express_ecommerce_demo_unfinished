import ErrorHandler from "./middlewares/ErrorHandler";

import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const {cartRouter} = require("./routes/cart");
const {userRouter} = require("./routes/user");
const {authRouter} = require("./routes/auth");
const {productRouter} = require("./routes/product");
const {orderRouter} = require("./routes/order");

const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err: any) => {
    console.log("Error connecting to MongoDB: ", err);
  });


//routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.use(ErrorHandler);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
