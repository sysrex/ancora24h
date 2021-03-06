const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const contactController = require('../controllers/contactController');


router.get('/', mainController.home);
router.get('/about', mainController.about);
router.get('/services', mainController.services);
router.get('/betreuer', mainController.betreuer);
router.post('/betreuer', mainController.contactBetreuer);

router.get('/contact', contactController.contact);
router.post('/contact', contactController.sendEmail);

module.exports = router;
