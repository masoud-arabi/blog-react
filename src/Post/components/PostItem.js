import React,{useState} from 'react';


const PostItem = ({post, deletePost, editPost}) =>{

    const[isEditMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);

    const onTitleChange = (e)=>{
        setTitle(e.target.value);
    }

    const onBodyChange =(e) =>{
        setBody(e.target.value);
    }

    const onClickDelete = () =>{
        if(window.confirm('are you sure?')){
            deletePost(post.id);
        }
    };

    const onClickEdit =()=>{
        setEditMode(true);
    };

    const onCancelEdit =()=>{
        setEditMode(false);
    };

    const onSaveEdit = () => {
        setEditMode(false);
       editPost({
        ...post,
        title,
        body,
       })
    };

   return( 
   <div className="postitem">
        { !isEditMode && (
            <>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </>
        )}

        { isEditMode && (
            <div className='editDiv'>
                <input value={title} onChange={onTitleChange}/>
                <textarea rows={5} value={body} onChange={onBodyChange}/>
                
            </div>
        )}

        <footer>
            {isEditMode && (
                <div>
                    <button onClick={onCancelEdit}>cansel</button>
                    <button onClick={onSaveEdit}>save</button>
                </div>
            )}
            {!isEditMode && (
                <div>
                    <button onClick={onClickDelete}>
                        delete
                    </button>
                    <button onClick={onClickEdit}>
                        edit
                    </button>
                </div>
            )}
        </footer>
    </div>)
};

export default PostItem;