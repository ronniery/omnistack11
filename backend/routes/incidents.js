const express = require('express');
const router = express.Router();
const controller = require('../controllers/incidents')

router.post('/', controller.create);
router.get('/', controller.index);
router.delete('/:id', controller.delete);

module.exports = router;