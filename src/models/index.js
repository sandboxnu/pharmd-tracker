import {Sequelize} from 'sequelize';

require('dotenv').config();
const sequelize = new Sequelize(

    process.env.DB,

    process.env.DB_USERNAME,

    process.env.DB_PASSWORD,

    {
        host: process.env.SERVER,

        port: process.env.DB_PORT,

        dialect: 'postgres'
    }

);

const models = {

    StudentCourse: sequelize.import('./studentcourse'),

    StudentAssessment: sequelize.import('./studentassessment'),

    Student: sequelize.import('./student'),

    Course: sequelize.import('./course'),

    Assessment: sequelize.import('./assessment'),

    Note: sequelize.import('./note'),

    PCF: sequelize.import('./pcf'),

};

// To create new models: npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

// StudentCourse Association
models.Student.belongsToMany(models.Course, {through: models.StudentCourse, foreignKey:'NUID', sourceKey:'NUID'});
models.Course.belongsToMany(models.Student, {through: models.StudentCourse, foreignKey:'courseID', sourceKey:'courseID'});

// StudentAssessment Association
models.Student.belongsToMany(models.Assessment, {through: models.StudentAssessment, foreignKey:'NUID',
sourceKey:'NUID'});
models.Assessment.belongsToMany(models.Student, {through: models.StudentAssessment, foreignKey:'assessmentID',
sourceKey:'assessmentID'});

// // course - assessment
models.Assessment.belongsTo(models.Course);
models.Course.hasMany(models.Assessment);
//
// // student - note
models.Note.belongsTo(models.Student);
models.Student.hasMany(models.Note);


// student - pcf
models.Student.hasMany(models.PCF);
models.PCF.belongsTo(models.Student);


Object.keys(models).forEach(key => {

    if ('associate' in models[key]) {

        models[key].associate(models);

    }

});

export { sequelize };

export default models;