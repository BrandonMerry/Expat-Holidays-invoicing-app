import bcrypt from 'bcryptjs'

// normally use async password has
// this time using syncronously vecaus

const users = [
  {
    name: 'admin user',
    email: 'admin@expat.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'user 1',
    email: 'number1@expat.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'user 2',
    email: 'number2@expat.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
