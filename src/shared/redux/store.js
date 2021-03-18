import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import apimiddleware from './middleware';
import postRedaucer from '../../Post/reducer/postReducer';



 const store = createStore(postRedaucer, applyMiddleware(apimiddleware, thunk) );
 
 export default store;