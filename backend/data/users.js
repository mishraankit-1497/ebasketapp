import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Ankit Mishra",
    email: "ankit@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Mukesh Kumar",
    email: "mukesh@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
