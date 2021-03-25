import React,{useState} from 'react';
import Modal from 'react-modal';
import {ModalWrappe, AddWrapper} from './styled.components';
import { v4 as uuidv4 } from 'uuid'
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
const NewPostModal = ({savePost})=>{

    const [isOpen, setOpen] = useState(false);
    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);
    const [userId, setUserId] = useState(null);

    const onTitleChange = ({target: {value} }) => setTitle(value);
    const onBodyChange = ({target: {value} }) => setBody(value);
    const onUserIdChange = ({target: {value} }) => setUserId(value);

    
    const showOpen = () => setOpen(true);
    const hideModal = () => setOpen(false);
    const isSaveButtonDisable = () => !title || !body || !userId;
    const onSaveClick = ()=>{
        hideModal();
        const postObject = {
            title,
            body,
            userId,
            id: uuidv4(),
        };
        savePost(postObject);
    };
    return( 
       <div>
           <AddWrapper>

           <button onClick={showOpen}>add</button>
           </AddWrapper>

            <Modal onRequestClose={hideModal} style={customStyles} isOpen={isOpen}>
                <ModalWrappe>
                    <div className='header'>Add new Post</div>
                    <div className='body'>
                        <input onChange={onUserIdChange} value={userId} placeholder='userId' type='text'/>
                        <input onChange={onTitleChange} value={title} placeholder='title' type='text'/>
                        <textarea onChange={onBodyChange} value={body} placeholder='body' rows='6'/>
                    </div>
                    <div className='footer'>
                        <button onClick={onSaveClick} disabled={isSaveButtonDisable()}>save</button>
                        <button onClick={hideModal}>cancel</button>
                    </div>
                </ModalWrappe>
            </Modal>
            
       </div>
        )
};

export default NewPostModal;