
import {Types} from './ActionType';

export const fetchPosts = ({_page, _limit}) => {
    return {
        type: Types.FETCH_POST,
        typeSucces: Types.FETCH_POST_SUCCESFUL,
        typeFail: Types.FETCH_POST_FAIL,
        isEndPointCall: true,
        endPoint:`posts?_page=${_page}&_limit=${_limit}`,
        method: 'GET',
    };
};

export const deletePosts = id => {
    return {
        type: Types.DELETE_POST,
        typeSucces: Types.DELETE_POST_SUCCESFUL,
        typeFail: Types.DELETE_POST_FAIL,
        isEndPointCall: true,
        endPoint:`posts/${id}`,
        method: 'DELETE',
        reduxData: {id}
    };
};

export const deletePostAndFetch = (id, filters)=>{
    return dispatch =>{
        dispatch(deletePosts(id)).then(response =>{
            if (response.status === 200){
                dispatch(fetchPosts(filters));
            }
        });
    };
};