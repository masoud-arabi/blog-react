import { createStore, applyMiddleware } from 'redux';
import apimiddleware from './middleware';
import postRedaucer from '../../Post/reducer/postReducer';



 const store = createStore(postRedaucer, applyMiddleware(apimiddleware) );
 
 export default store;