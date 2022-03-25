const mongoose = require("mongoose");

//connect to db

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DATABASE CONNECTED`);
  } catch (error) {
    console.log(error.message);
    server.close(() => process.exit(1));
  }
};

module.exports = connectDB;
