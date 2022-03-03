const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 8000;
const DB = "user_db";

app.use(
    cookieParser(),
    cors({ credentials: true, origin: 'http://localhost:3000' }),
    express.json(),
    express.urlencoded({ extended: true })
)

// config connector
require('./config/mongoose.config')(DB)

// route connector
require('./routes/user.route')(app)

// require dotenv
require('dotenv').config();

app.listen(PORT, () => { console.log(`server up on port: ${PORT}`) })