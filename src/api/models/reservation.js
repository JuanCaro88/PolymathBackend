module.exports = ( sequelize, DataTypes ) => {
    const Reservation = sequelize.define(
        'reservations', // Model name
        {
            // Model attributes
            id: {
                type          : DataTypes.INTEGER,
                allowNull     : false,
                autoIncrement : true,
                primaryKey    : true
            },
            id_restaurant: {
                type      : DataTypes.INTEGER,
                allowNull : false,
                validate  : {
                    notEmpty : true
                }
            },            
            id_table : { 
                type      : DataTypes.INTEGER,
                allowNull : false,
                validate  : {
                    notEmpty : true
                }
            },
            name_reservation : {
                type      : DataTypes.INTEGER,
                allowNull : false,
                validate  : {
                    notEmpty : true
                }
            },
            time_reservation : {
                type      : DataTypes.TIME,
                allowNull : false,
                validate  : {
                    notEmpty : true
                }
            },
            date : {
                type      : DataTypes.DATE,
                allowNull : false,
                validate  : {
                    notEmpty : true
                }
            },
        }
    );
    return Reservation;
};