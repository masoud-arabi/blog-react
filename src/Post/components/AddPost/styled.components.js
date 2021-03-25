import styled from 'styled-components';

export const ModalWrappe = styled.div`
    .body{
        display:flex;
        flex-direction: column;
        width: 200px;
    }
`;

export const AddWrapper = styled.div`
    display:flex;
    justify-content: flex-end;
    margin-right:25px;

    button{
        cursor: pointer;
        background-color: green;
        color:whitesmoke;
        border-radius:5px;
        border: 1px solid white;
        &:hover{
            
            background-color: grey;
        }
        &:visited{
            border: 1px solid white;

        }
    }

`;