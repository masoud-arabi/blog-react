import {Types} from '../actions/ActionType';

const initState ={
    error: null,
    posts: [],
    fetching: false,
};

function PostReducer(state = initState, action){
    switch(action.type){
        case Types.FETCH_POST:
            return{
                ...state,
                fetching: true,
            };

        case Types.FETCH_POST_SUCCESFUL:
            return{
                ...state,
                fetching:false,
                posts: action.data
            };
        
        case Types.FETCH_POST_FAIL:
            return{
                ...state,
                fetching:false,
                error: action.error,
            };
        default:
            return state;
    }
}

export default PostReducer;