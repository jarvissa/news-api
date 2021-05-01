const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

router.get('/', newsController.get);
router.post('/', newsController.post);

module.exports = router;