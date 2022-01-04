require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
const helmet = require('helmet');

const mongoose = require('mongoose');

// Set up mongoose connection
const dbuser = process.env.DB_USER;
const dbpassword = process.env.DB_PASS;
const dbname = process.env.DB_NAME;

const mongoDB = `mongodb+srv://${dbuser}:${dbpassword}@cluster0.eg6pv.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const corsOptions = {
  origin: 'https://davinez-mern-auth.netlify.app',
};

// initialize Express Object
const app = express();

// Middleware chain
app.use(cors(corsOptions));
app.use(helmet());
app.use(compression()); // Compress all routes
app.use(logger('dev'));
app.use(express.json()); // To parse the incoming requests with JSON payloads
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// The last middleware in the chain adds handler methods for errors and HTTP 404 responses.
// error handler
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  console.error(err);
  res.status(500).send('INTERNAL SERVER ERROR !');
});

// Routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// Run on port 3001 if no value is given to env variable
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;
