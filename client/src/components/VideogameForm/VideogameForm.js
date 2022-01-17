import styled from 'styled-components';
import {RED,DARKL,DARK,WHITE,WHITEL} from '../VariableSC';
import { Link } from 'react-router-dom';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerForm = styled.div`
    margin: 10px;
    border: 1px solid ${WHITEL};
    display: flex;
    background:${DARKL};
    backdrop-filter:blur(5px);
    width: 500px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    
`;
export const ContainerTemp = styled.form`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 300px;
    background: #3331;//3331
    overflow: hidden;
    min-height: 190px;
    border: 2px solid ${WHITEL};
    
`;
export const Form = styled.form`
    border:1px solid ${WHITE};
    padding: 20px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
`;


export const TempShow = styled.div`    
    color: #fffffe;
    display: flex;
    height:23px;
    min-width: 5px;
    flex-direction: row;
    box-sizing: border-box;
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

export const BottomReturn = styled(Link)`
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
