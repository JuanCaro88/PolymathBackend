const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : ( request, file, cb ) => {
        cb( null, 'uploads' )
    },
    filename : ( request, file, cb ) => {
        cb( null, new Date().toISOString() + path.extname(file.originalname))
    }
});

module.exports = multer({ storage : storage });