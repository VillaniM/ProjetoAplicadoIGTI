import Request from "../models/request.model.js";

async function insertRequest(request){
    try{
        return await Request.create(request);
    }catch(err){
        throw err;
    }
}

async function getRequests(){
    try{
        return await Request.findAll();
    }catch (err){
        throw err;
    }
}

async function getRequestByCPF(cpf){
    try{
        return await Request.findOne({ where:{cpf}, raw: true});
    }catch (err){
        throw err;
    }
}

async function getRequest(id){
    try{
        return await Request.findByPk(id);
    }catch(err){
        throw err;
    }
}

async function updateRequest(request){
    try{
        await Request.update(request, {
            where:{
                requestId: request.requestId
            }
        });
        //o update do sequelize retorna a quantidade de registros atualizados, então para ver quais foram, coloca um return
        return await getRequest(request.requestId);
    }catch (err){
        throw err;
    }
}

async function deleteRequest(id){
    try{
        await Request.destroy({
            where:{
                requestId: id
            }
        })
    }catch(err){
        throw err;
    }
}

export default{
    insertRequest,
    getRequests,
    getRequestByCPF,
    getRequest,
    updateRequest,
    deleteRequest
}