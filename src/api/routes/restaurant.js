const express = require('express');
const router = express.Router();
const controller = require('../controllers/restaurant');
const upload = require('../middlewares/fileUpload');

router.get('/restaurant', controller.getAll);
router.post('/restaurant', controller.create);
router.delete('/restaurant', controller.delete);
router.put('/restaurant', controller.update);


module.exports = router;