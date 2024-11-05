const express =require('express');
var app =express();
const userController =require('../controllers/user') ;

var api = express.Router();

api.get('/userCont',userController.pruebas);

module.exports = api;