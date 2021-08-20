const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : ( request, file, cb ) => {
        cb( null, '../uploads' )
    },
    filename : ( request, file, cb ) => {
        console.log(file);
        cb( null, Date.now() + path(file.originalname) )
    }
})

const upload = multer({ storage : storage })

module.exports = upload;