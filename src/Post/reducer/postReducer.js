import {Types} from '../actions/ActionType';

const initState ={
    error: null,
    posts: [],
    count: 0,
    fetching: false,
    deleting: false,
    deleteError: null,
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
                headers:{ ["x-total-count"]: count }
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

        case Types.DELETE_POST:
            return{
                ...state,
                deleting:true,
            };

        case Types.DELETE_POST_SUCCESFUL:
            return{
                ...state,
                deleting:false,
                posts: state.posts.filter( post => post.id !== action.id ),
            };

        case Types.FETCH_POST_FAIL:
            return{
                ...state,
                deleting:false,
                deleteError: action.error,
            };

        default:
            return state;
    }
}

export default PostReducer;