import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Test",
    email: "test@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Test 123",
    email: "test123@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
