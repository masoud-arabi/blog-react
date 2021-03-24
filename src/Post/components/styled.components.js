import styled from 'styled-components';


export const PostListRoot = styled.div`
    padding: 20px;

    .postitem{
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
        box-shadow: 2px 2px 4px #000;

        .editDiv{
            display: flex;
            flex-direction: column;

            input{
                margin:0 auto;
                margin-bottom:10px;
                width: 50%;
                font-size: 14px;
            }
            textarea{
                margin:0 auto;
                margin-bottom:10px;
                width: 50%;
                font-size: 14px;
            }
            button{
                margin:0 auto;

                text-align:center;
                width: 50px;
            }

        }


        footer{
            display: flex;
            justify-content: flex-end;
            align-items: center;

        }

    }
`;

export const PostHeader = styled.div`
    background: #333;
    padding: 20px;
    color: #eee;
    margin: 10px 20px;
    border-radius: 5px;
    
`;

export const PaginationRoot = styled.div`
    background-color: #eee;
    margin: 5px 25px;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .page{
        margin:0 5px;

    }

    button{
        cursor: pointer;
    }
`;
