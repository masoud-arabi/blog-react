
import {Types} from './ActionType';

export const fetchPosts = () => {
    return {
        type: Types.FETCH_POST,
        typeSucces: Types.FETCH_POST_SUCCESFUL,
        typeFail: Types.FETCH_POST_FAIL,
        isEndPointCall: true,
        endPoint:'posts',
        method: 'GET',
    };
};