import axios from 'axios';

const baseUrl = 'http://localhost:3004/';

const handleSuccess = ({ response, next, type}) =>{
    next({
        data: response.data,
        type
    });
};

const handleFailed = ({ error, next, type}) =>{
    next({
        error,
        type
    });
};


const apimiddleware = store => next => action =>{
    const { isEndPointCall, type } = action;
    if(isEndPointCall){
        next({type});
        const {method, typeSucces, typeFail} = action;
        axios(`${baseUrl}${action.endPoint}`,{ 
            method
         }).then(response=> {
             handleSuccess({response, type: typeSucces, next})
         }).catch(error => {
            handleFailed({error, type: typeFail, next})
         });
    } else {
        next(action);
    }
};

export default apimiddleware;