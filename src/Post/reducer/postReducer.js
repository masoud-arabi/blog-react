import {Types} from '../actions/ActionType';

const initState ={
    error: null,
    posts: [],
    count: 0,
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
            console.log(action);
            const { 
                headers: { ["x-total-count"]: count }
            } = action;
            return{
                ...state,
                count,
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