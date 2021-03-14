
import {Types} from './ActionType';

export const fetchPosts = ({_limit, _page}) => {
    return {
        type: Types.FETCH_POST,
        typeSucces: Types.FETCH_POST_SUCCESFUL,
        typeFail: Types.FETCH_POST_FAIL,
        isEndPointCall: true,
        endPoint:`posts?_page=${_page}&_limit=${_limit}`,
        method: 'GET',
    };
};