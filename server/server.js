const express = require("express");
const app = express();

const cors = require("cors");

const morgan = require("morgan");
const mongoose = require("mongoose");

//DOTENV
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

//PORT
const port = 5000 || process.env.PORT;

//CONNECT TO DB
const connectDB = require("./db.js");
connectDB();

//BODY-PARSER
app.use(express.json());
//MIDDLEWARE
app.use(cors());
//importing the routes
const products = require("../server/routes/productRouter.js");

//router routes
app.use("/", products);

//MORGAN
if (process.env.NODE_ENV === "developement") {
  app.use(morgan("dev"));
}

//ROUTES

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Successful",
  });
});

//LISTENING
app.listen(port, console.log(`Status: Running on ${port}`));
