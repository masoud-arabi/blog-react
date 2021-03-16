import axios from 'axios';

const baseUrl = 'http://localhost:3004/';

const handleSuccess = ({ response, next, type, reduxData}) =>{
    next({
        data: response.data,
        type,
        ...response,
        ...reduxData,
    });
};

const handleFailed = ({ error, type, next}) =>{
    next({
        type,
        error
    });
};


const apimiddleware = store => next => action =>{
    const { isEndPointCall, type, reduxData={} } = action;

    if(isEndPointCall){
        next({type});
        const {method, typeSucces, typeFail} = action;
        axios(`${baseUrl}${action.endPoint}`,{ 
            method
         })
         .then(response=> handleSuccess({response, type: typeSucces, next, reduxData}))
         .catch(error => handleFailed({error, type: typeFail, next}));
    } else {
        next(action);
    }
};

export default apimiddleware;