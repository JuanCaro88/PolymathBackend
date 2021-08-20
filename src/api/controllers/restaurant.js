const db = require('../models');
const Restaurant = db.restaurants;

// Get all items
exports.getAll = ( request, response ) => {
    Restaurant.findAll()
        .then( data => {
            response.send({
                status  : true,
                message : 'Query to data base succesfully',
                data
            });
        })
        .catch( error => {
            response.send({
                status  : false,
                message : error.message
            });
        });
};

// Create new item
exports.create = ( request, response ) => {
    console.log(request.body);
    Restaurant.create({
        name        : request.body.name,
        description : request.body.description,
        address     : request.body.address,
        city        : request.body.city,
        url_photo   : request.body.urlPhoto,
    })
        .then( restaurant => {
            response.send({
                status : true,
                message : 'The item crated'
            }).status(200);
        })
        .catch(error => {
                response.send({
                status  : false,
                message : error.message
            }).status(500);
        });
};

// Update item
exports.update = ( request, response ) => {
    id_restaurant = request.body.id;
    Restaurant.update( request.body, {
        where : {
            id : id_restaurant
        }
    })
        .then( num => {
            if ( num == 1 ) {
                response.send({
                    status  : true,
                    message : 'Restaurant was updated succesfully'
                });
            } else {
                response.send({
                    status  : false,
                    message : `Error updating restaurant with id: ${id_restaurant}`
                });
            }
        })
        .catch( error => {
            response.send({
                status  : false,
                message : 'an error occurred'
            })
        })
};


// Delete item
exports.delete = ( request, response ) => {
    id_restaurant = request.body.id;
    Restaurant.destroy({
        where : {
            id : id_restaurant
        }
    })
        .then( num => {
            if ( num == 1 ){
                response.send({
                    status  : true,
                    message : 'Restaurant was deleted succesfully'
                });
            } else {
                response.send({
                    status : false,
                    message : `Can not delete restaurant with id: ${restaurant_chain}, restaurant did not find`
                });
            };
        })
        .catch( err => {
            response.send({
                status : false,
                message: 'an error occurred'
            });
        }); 
};