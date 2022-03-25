const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@admin.adm",
    password: bcrypt.hashSync("xxxxxx", 10),
    isAdmin: true,
  },
  {
    name: "Generic User",
    email: "admin@admin.adm",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Not-So-Generic User",
    email: "admin@admin.adm",
    password: bcrypt.hashSync("lifereallysicksman", 10),
    isAdmin: false,
  },
];

module.exports = users;
