require('dotenv').config();

// Express Config
const express = require('express');
const app = express();
app.use(express.json());

// Cors Config
var cors = require('cors')
app.use(cors());

// JWT Middleware
const jwtAuthentication = require('./src/middlewares');

// Controllers
const AuthenticationController = require('./src/Controllers/AuthenticationController');
const CredentialsController = require('./src/Controllers/CredentialsController');

// Authentication
app.post('/signup', AuthenticationController.signUp);
app.post('/signin', AuthenticationController.signIn);

// Credential Management
app.post('/credentials', jwtAuthentication, CredentialsController.store);
app.put('/credentials/:id', jwtAuthentication, CredentialsController.update);
app.get('/credentials', jwtAuthentication, CredentialsController.index);
app.delete('/credentials/:id', jwtAuthentication, CredentialsController.destroy);

// generate password
// generate random password with length

// Server
app.listen(8080, () => {
    console.log("Back-end rodando na porta 8080")
});