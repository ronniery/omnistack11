const express = require('express');
const router = express.Router();
const controller = require('../controllers/ongs')

router.post('/', controller.create);
router.get('/', controller.index)

module.exports = router;
