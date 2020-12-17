const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
// const sequelize = require('./database/models/').sequelize


// load env variable
dotenv.config({ path: './config/config.env' });

const app = express();

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
