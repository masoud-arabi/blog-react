import {Types} from '../actions/ActionType';

const initState ={
    error: null,
    post: [],
    fetching: false,
};

function PostReducer(state = initState, action){
    switch(action.type){
        case Types.FETCH_POST:
            return{
                ...state,
                fetching:true,
            };
        case Types.FETCH_POST_SUCCES:
            return{
                ...state,
                fetching:false,
                post: action.data
            }
        
        case Types.FETCH_POST_FAILED:
            return{
                ...state,
                fetching:false,
                error: action.error,
            }
        default:
            return state;
    }
}

export default PostReducer;