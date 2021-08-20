const db = require('../models');
const Reservation = db.reservations;

// Get all items
exports.getAll = ( request, response ) => {
    Reservation.findAll()
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
    Reservation.create({
        id_restaurant    : request.body.idRestaurant,
        id_user          : request.body.idUser,
        id_table         : request.body.idTable,
        time_reservation : request.body.timeReservation,
        date             : request.body.date,
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
    idReservation = request.body.id;
    Reservation.update( request.body, {
        where : {
            id : idReservation
        }
    })
        .then( num => {
            if ( num == 1 ) {
                response.send({
                    status  : true,
                    message : 'Reservation was updated succesfully'
                });
            } else {
                response.send({
                    status  : false,
                    message : `Error updating restaurant with id: ${idReservation}`
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
    idReservation = request.body.id;
    Reservation.destroy({
        where : {
            id : idReservation
        }
    })
        .then( num => {
            if ( num == 1 ){
                response.send({
                    status  : true,
                    message : 'Reservation was deleted succesfully'
                });
            } else {
                response.send({
                    status : false,
                    message : `Can not delete restaurant with id: ${idReservation}, restaurant did not find`
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