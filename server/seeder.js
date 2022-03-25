const dotenv = require("dotenv");
const mongoose = require("mongoose");
const process = require("process");

//importing the Models
const Product = require("./models/Product.js");
const User = require("./models/User.js");
const Order = require("./models/Order.js");

//dotenv
dotenv.config({ path: "./config.env" });

//saving the json data in a var
const products = require("./_starter_data/products.js");
const users = require("./_starter_data/users.js");

//connecting to the Database

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};

connectDB();

//iporting data
const importData = async () => {
  try {
    const createdusers = await User.insertMany(users);

    const adminUser = createdusers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);
    console.log(`Data imported`);
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

//delete all data
const deleteData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log(`Data deleted`);
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

//running the seeder functions

switch (process.argv[2]) {
  case "-d": {
    deleteData();
    console.log("data deletion initialted");
    break;
  }
  default:
    {
      importData();
      console.log("Data import initiated");
    }
    break;
}
