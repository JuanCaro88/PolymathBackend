const express = require('express');
const router = express.Router();
const controller = require('../controllers/reservation')

router.get('/reservation', controller.getAll);
router.post('/reservation', controller.create);
router.delete('/reservation', controller.delete);
router.put('/reservation', controller.update)

module.exports = router;