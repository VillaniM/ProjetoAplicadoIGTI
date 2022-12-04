//Marcela Villani 30/11/2022
//express para rotas
import express from "express";
//cors para tornar a API disponível para acesso externo
import cors from "cors";
//winston para geração de logs
import winston from "winston";
//Autenticação e Autorização
import basicAuth from "express-basic-auth"

//rotas da API - nesse caso está fazendo referências as tabelas do banco
import requestsRouter from "./routes/request.route.js";

//import do auth controller para autenticação e autorização
import {authorize, authorizer} from "./controllers/auth.controller.js"

//import sequelize from "./repositories/db.js";

//configuração de formato do log
const {combine, timestamp, label, printf} = winston.format;
//fução que converte em que formato de log a informação vai sair
const myFormat = printf(({level, message, label, timestamp}) => {
    return `${timestamp} [${label}] ${level} ${message}`;
});

global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new(winston.transports.Console)(),
        new(winston.transports.File)({filename: "pa-api.log"})
    ],
    format: combine(
        label({ label: "P.A"}),
        timestamp(),
        myFormat
    )
});

const app = express();

app.use(express.json());
app.use(cors());

app.use(basicAuth({authorizeAsync: true, authorizer}));

//a função authorize funciona como um Middleware de autenticação,
//se ela estiver ok retorna um next e pula para a autoresRouter
app.use("/request", requestsRouter);

//tratamento de erros
app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({error: err.message})
});

//await sequelize.sync()

app.listen(8080, () => console.log("Iniciou a API!"));