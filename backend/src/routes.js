const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

// Controllers
const SessionController = require('./controller/SessionController.js');
const SpotController = require('./controller/SpotController.js');
const Profile = require('./controller/ProfileController');
const Booking = require('./controller/BookingController')

// Inicio Rotas
const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);
routes.post('/spot', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);
routes.get('/profile', Profile.show);
routes.post('/spots/:spot_id/booking', Booking.store);
// Fin Rotas


module.exports = routes;