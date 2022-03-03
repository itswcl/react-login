const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = "user_db";

app.use(cors(), express.json(), express.urlencoded({extended: true}))

// config
require('./config/mongoose.config')(DB)
// route
require('./routes/user.route')
// env key
require('dotenv').config();
const key = process.env.SECRET_KEY;

app.listen(PORT, () => {
    console.log(`server up on port: ${PORT}`)
})