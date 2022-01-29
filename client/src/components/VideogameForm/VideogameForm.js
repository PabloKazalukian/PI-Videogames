import styled from 'styled-components';
import {RED,DARKL,WHITE,WHITEL} from '../VariableSC';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerForm = styled.div`
    margin: 10px;
    width: 500px;
    min-height: 60px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${WHITEL};
    background:${DARKL};
    backdrop-filter:blur(5px);
    border-radius: 12px;
    
    
`;



export const Form = styled.form`
    border:1px solid ${WHITE};
    padding: 25px;
    min-height: 608px;
    width: 80%;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    & > div{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    & div input{        
        width: 190px;
        margin:0px 30px ;
        cursor: pointer;
        letter-spacing: 1px;
        font-family: 'Outfit', sans-serif;
        font-weight: 500;
        font-size: .9rem;
        padding: 2px;
    }
    & div select{
        padding: 2px;
        cursor: pointer;
        width: 194px;
        margin:0px 30px ;
        letter-spacing: 1px;
        font-family: 'Outfit', sans-serif;
        font-weight: 500;
        font-size: .9rem;
        border:1px transparent;
        border-radius: 2px;
        background:#d8eefe;
        color: #dd4565;
    }
    & label{
        width: 120px;
        letter-spacing: 2px;
    }
`;

export const ContainerTemp = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 365px;
    background: #3331;//3331
    overflow: hidden;
    min-height: 80px;
    border: 2px solid ${WHITEL};
    
`;
export const TempShow = styled.div`    
    color: #fffffe;
    display: flex;
    height:23px;
    min-width: 5px;
    flex-direction: row;
    border-radius: 5px;
    /* border: 2px solid #ef4565; */
    border: 2px solid ${RED};

    margin: 4px;
    /* background: #90b4ce97; */
    
`;

export const TempName = styled.p`
    box-sizing: border-box;
    display: inline-flex;
    height: 23px;
    text-align: center;
    color: ${WHITE};
    font-weight: 500;
    text-align: center;
    padding: 0px 2px 4px 2px;
    margin: 0px 2px;
    cursor: default;
`;

export const DeleteTemp = styled.button`
    background: ${RED};
    padding: 3px;
    color: #d8eefe;
    border: none;
    cursor: pointer;
    font-weight: 700;
`;


export const Submit = styled.input`
    box-sizing: border-box;
    background-color: ${RED};
    margin: 20px;
    height: 50px;
    color: #fffffe;
    padding: 14px 15px;
    text-align: center;
    font-size: 16px;
    font-weight:700;
    border: none;
    border-radius:3px;
    letter-spacing: 1.7px;
    cursor: pointer;
    transition: .2s all;
    &:hover{
        color:${RED};
        background:${WHITE};
    }
`;

export const BottomReturn = styled.a`
    box-sizing: border-box;
    background-color: ${RED};
    margin: 20px;
    text-decoration: none;
    height: 50px;
    color: #fffffe;
    padding: 14px 15px;
    text-align: center;
    font-weight:700;
    border-radius:3px;
    letter-spacing: 1px;
    &:hover{
        color: #333;
    }
`;

export const Error = styled.p`
    margin: 6px 0px;
    height: 20px;
    color:${RED};
    width: 300px;

`;
