const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');


const SessionController = require('./controller/SessionController.js');
const SpotController = require('./controller/SpotController.js');
const Profile = require('./controller/ProfileController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.post('/spot', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);
routes.get('/profile', Profile.show);
module.exports = routes;