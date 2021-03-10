import { createStore } from 'redux';


const fakeReducer = (state={name:'fakename'}, action) => {
    return state;
};

 const store = createStore(fakeReducer);
 
 export default store;