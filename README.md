# react-login
login_V1 - Login SERVER
Prepare for folder structure
- /server
- touch server.js
- npm init -y
- npm i express mongoose cors bcrypt dotenv jsonwebtoken
- /config, /models, /controllers, /routes
######
- update server.js
- add mongoose.config.js
- update server.js import config
######
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