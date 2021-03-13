
import {Types} from './ActionType';

export const fetchPosts = () => {
    return {
        type: Types.FETCH_POST,
        typeSucces: Types.FETCH_POST_SUCCES,
        typeFail: Types.FETCH_POST_SUCCES,
        isFetchCall: true,
        endPoint:'posts',
        method: 'GET',
    };
}