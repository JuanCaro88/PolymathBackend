const express = require('express');
const multer = require('multer');
const router = express.Router();
const controller = require('../controllers/restaurant');
const upload = require('../middlewares/fileUpload');
const multer_ = multer({dest: '../upload/'})

router.get('/restaurant', controller.getAll);
router.post('/restaurant', upload.single('image'), controller.create);
router.delete('/restaurant', controller.delete);
router.put('/restaurant', controller.update);

module.exports = router;