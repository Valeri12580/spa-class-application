const username = "Valeri";
const password = "1234";
const appKey = "";
const appSecret = "";
const baseUrl = "https://baas.kinvey.com"

function makeHeaders(type,httpMethod, data) {
    const header = {
        method: httpMethod,
        headers: {
            "Authorization": createAuthorization(type),
            "Content-Type": "application/json"
        }


    };
    if (httpMethod === "POST" || httpMethod === "PUT") {
        header.body = JSON.stringify(data)
    }
    return header
}

function createAuthorization(type) {
    return type === 'Basic'
        ? `Basic ${btoa(`${appKey}:${appSecret}`)}`
        : `Kinvey ${sessionStorage.getItem('authtoken')}`
}


function handleErrors(e) {
    if (!e.ok) {
        throw  new Error(e.statusText)
    }
    return e;
}

function serializelizeData(x) {
    
    if(x.status===204){
        return x
    }

    return x.json();
}

export function get(kinveyModule, endpoint,type) {
    const header = makeHeaders(type,"GET");
    const url = `${baseUrl}/${kinveyModule}/${appKey}/${endpoint}`;

    return fetch(url, header).then(handleErrors).then(serializelizeData);
}

export function put(kinveyModule, endpoint, data,type) {
    const header = makeHeaders(type,"PUT", data);
    const url = `${baseUrl}/${kinveyModule}/${appKey}/${endpoint}`;
    return fetch(url, header).then(handleErrors).then(serializelizeData);
}
export  function  post(kinveyModule,endpoint,data,type) {
    const  header=makeHeaders(type,"POST",data)
    let url=`${baseUrl}/${kinveyModule}/${appKey}/${endpoint}`;
    return fetch(url, header).then(handleErrors).then(serializelizeData);
}
export  function  del(kinveyModule,endpoint,type) {
    const header=makeHeaders(type,"DELETE");
    let url=`${baseUrl}/${kinveyModule}/${appKey}/${endpoint}`;
    return fetch(url, header).then(handleErrors).then(serializelizeData);
}