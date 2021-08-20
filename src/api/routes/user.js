const express = require('express');
const router = express.Router();
const controller = require('../controllers/user')

router.get('/user', controller.getAll);
router.post('/user', controller.create);
router.delete('/user', controller.delete);
router.put('/user', controller.update);


module.exports = router;