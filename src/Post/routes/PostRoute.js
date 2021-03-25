import React from 'react';
import {Route} from 'react-router-dom';
import PostContainer from '../PostContainer';
import PostShow from '../PostShow';



function PostRoutes (){
    return(
        <>
            <Route path='/posts' component={PostContainer}/>
             
            <Route path="/post/:id" component={PostShow}/>
                
        </>
    );
}

export default PostRoutes;