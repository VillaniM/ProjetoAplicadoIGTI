import requestService from "../services/request.service.js";
import { getRole } from "./auth.controller.js";

async function createRequest(req, res, next){
    try{
        let request = req.body;
        if(!request.nameHol || !request.mailHol || !request.cpfHol || !request.docHol){

            throw new Error("Nome, Email, CPF e Documento são Obrigatórios");
        }
        
        res.send(await requestService.createRequest(request));
        logger.info(`POST / Request - ${JSON.stringify(request)}`);
    }catch(err){
        next(err);
    }
}

async function getRequests(req, res, next){
    try{
        res.send(await requestService.getRequests());
        logger.info("GET /request");
    }catch(err){
        next(err);
    }
}

async function getRequest(req, res, next){
    try{
        res.send(await requestService.getRequest(req.params.id));
        logger.info("GET /request/id");
    }catch(err){
        next(err);
    }
}

async function deleteRequest(req, res, next){
    try{
        await requestService.deleteRequest(req.params.id)
        res.end();
        logger.info("DELETE /request");
    }catch(err){
        next(err);
    }
}

async function updateRequest(req, res, next){
    try{
        let request = req.body;
        request = await requestService.updateRequest(request);
        res.send(request);
        logger.info(`PUT / Request - ${JSON.stringify(request)}`);
    }catch(err){
        next(err);
    }
}

export default{
    createRequest,
    getRequests,
    getRequest,
    deleteRequest,
    updateRequest
}