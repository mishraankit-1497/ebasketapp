import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true
  },
  {
    name: "Ankit Mishra",
    email: "ankit@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false
  },
  {
    name: "Mukesh Kumar",
    email: "mukesh@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false
  },
];

export default users;
