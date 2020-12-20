const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
// const sequelize = require('./database/models/').sequelize


// load env variable
dotenv.config({ path: './config/config.env' });

const app = express();

//routes files
const users= require('./routes/users');

//mount rountes
app.use('/api/dev/users',)


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


// sequelize.sync()
//          .then (() => {
//              app.listen(
//                  PORT,
//                  console.log(`Server Berjalan di ${process.env.NODE_ENV} mode di port ${PORT}`.yellow.bold)
//              );
//          })
//          .catch(() => {

//          })
// app.use(logger);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server Berjalan di ${process.env.NODE_ENV} mode di port ${PORT}`.yellow.bold)
);

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red.bold);
    // server.close(() => process.exit(1));
});

// SEMENTARA -------------------------------

const bodyParser = require('body-parser')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
app.use(bodyParser.json())

app.post(`/users/create`, async (req, res) => {
    const { email, password, photo, created_at, updated_at, deleted_at} = req.body
    const result = await prisma.users.create({
      data: {
        email,
        password,
        photo,
        created_at: new Date(),
        updated_at,
        deleted_at
      },
    })
    res.json(result)
  })

  app.post(`/room/create`, async (req, res) => {
    const { room_name, room_capacity, photo, created_at, updated_at, deleted_at} = req.body
    const result = await prisma.users.create({
      data: {
        room_name,
        room_capacity,
        photo,
        created_at: new Date(),
        updated_at,
        deleted_at
      },
    })
    res.json(result)
  })
