'use strict';
module.exports = (sequelize, DataTypes) => {
    const StudentNote = sequelize.define('StudentNote', {
        NUID: {
            type: DataTypes.STRING,
            validate:{
                len: {
                    args: [9, 9],
                    msg: "ID must consist of 9 digits"
                }
            },
            allowNull: false
        },
        note: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DateTimeFormat,
        }

    }, {});
    StudentNote.associate = function(models) {
        // associations can be defined here
    };