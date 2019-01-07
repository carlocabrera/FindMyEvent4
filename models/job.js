const Sequelize = require('sequelize');
const db = require('../config/database');

const Job = db.define('job', {
    title: {
        type: Sequelize.STRING
    },
    specialties: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    budget: {
        type: Sequelize.STRING
    },
    message: {
        type: Sequelize.STRING
    },
})

module.exports = Job;