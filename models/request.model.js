import Sequelize from "sequelize";
import db from "../repositories/db.js";

const Request = db.define("requests", {
    requestId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nameRep: {
        type: Sequelize.STRING,
        allowNull: true
    },
    mailRep: {
        type: Sequelize.STRING,
        allowNull: true
    },
    cpfRep: {
        type: Sequelize.STRING,
        allowNull: true
    },
    docRep: {
        type: Sequelize.STRING,
        allowNull: true
    },
    nameHol: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mailHol: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpfHol: {
        type: Sequelize.STRING,
        allowNull: false
    },
    docHol: {
        type: Sequelize.STRING,
        allowNull: false
    },
    typeReq: {
        type: Sequelize.STRING,
        allowNull: false
    },
    noteHol: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    noteReq: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {underscored: true}); //o underscored transforma as palavras adicionando underline. Ex: clientId vira client_id

export default Request;