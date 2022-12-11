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
        allowNull: true
    },
    mailHol: {
        type: Sequelize.STRING,
        allowNull: true
    },
    cpfHol: {
        type: Sequelize.STRING,
        allowNull: true
    },
    docHol: {
        type: Sequelize.STRING,
        allowNull: true
    },
    typeReq: {
        type: Sequelize.STRING,
        allowNull: true
    },
    noteHol: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status: {
        type: Sequelize.STRING,
        allowNull: true
    }, 
    date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    noteReq: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {underscored: true}); //o underscored transforma as palavras adicionando underline. Ex: clientId vira client_id

export default Request;