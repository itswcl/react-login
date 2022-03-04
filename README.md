# react-login
login_V1 - Login SERVER
Prepare for folder structure
- /server
- touch server.js
- npm init -y
- npm i express mongoose cors
- /config, /models, /controllers, /routes
######
- update server.js
- add mongoose.config.js
- update server.js import config
######
- npm i bcrypt
- adding user model
- firstName, lastName, email, password
- timestamps
- add email validator
- add virtual confirm password
- add compare password and confirm password
######
- adding user controller for register
######
- adding user route for register
- remember to link in server.js
######
- npm i dotenv jsonwebtoken
- type node in terminal to create token
- require('crypto').randomBytes(64).toString('hex')
- generate random token for key
###### back to server.js
- npm i cookie-parser
- require cookie-parser and update app.use
- add res.cookie in controller of "login"
###### refactor
- adding JWT usage
- adding Cookie usage
###### jwt.config.js
----------------------------
# to the client site of register/login
