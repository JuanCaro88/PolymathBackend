
module.exports = ( sequelize, DataTypes ) => {
    const Restaurant = sequelize.define(
        'restaurants', // Model name
        {
            // Model attributes
            id: {
                type         : DataTypes.INTEGER,
                allowNull    : false,
                autoIncrement: true,
                primaryKey   : true
            },
            name: {
                type      : DataTypes.STRING(50),
                allowNull : false,
                validate : {
                    notEmpty: true
                }
            },
            description : {
                type : DataTypes.TEXT
            },
            address : {
                type      : DataTypes.STRING(60),
                allowNull : false
            },
            city: {
                type : DataTypes.STRING(60),
                allowNull : false
            },
            url_photo : {
                type : DataTypes.STRING
            },
            is_active : {
                type         : DataTypes.BOOLEAN,
                defaultValue : true
            }
        },
        {
            // Options
            timestamps: true,
            underscrored: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );
    return Restaurant;
};