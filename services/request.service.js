import requestRepository from "../repositories/request.repository.js";

async function createRequest(request){
    return await requestRepository.insertRequest(request);
}

async function getRequests(){
    return await requestRepository.getRequests();
}

async function getRequest(id){
    return await requestRepository.getRequest(id);
}

async function getRequestByCPF(cpf){
    return await requestRepository.getRequestByCPF(cpf);
}

async function updateRequest(request){
    return await requestRepository.updateRequest(request);
}

async function deleteRequest(id){
    const request = await requestRepository.getRequest(id);
    if(request){
        await requestRepository.deleteRequest(id);
    }else{
        throw new Error("Request inválida");
    }
}

export default{
    createRequest,
    getRequests,
    getRequest,
    getRequestByCPF,
    updateRequest,
    deleteRequest
}