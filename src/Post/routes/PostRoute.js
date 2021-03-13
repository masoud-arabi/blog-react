import React from 'react';
import {Route} from 'react-router-dom';
import PostContainer from '../PostContainer';



function PostRoutes (){
    return(
        <Route path='/posts'>
            <PostContainer/>
        </Route>
    );
}

export default PostRoutes;