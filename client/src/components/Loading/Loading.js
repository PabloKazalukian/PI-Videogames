import styled from 'styled-components';
import { keyframes } from "styled-components";
import {RED,WHITE} from '../VariableSC';
import { Link } from 'react-router-dom';

const  Animate= keyframes`
0%, 100% {
text-shadow: -3px -3px 0 #2943d1, 2px 2px 0 #f00;
}

25% {
text-shadow: 3px 3px 0 #2943d1, -2px -2px 0 #f00;
}

50% {
text-shadow: 3px -3px 0 #2943d1, -2px 2px 0 #f00;
}

75% {
text-shadow: -3px 3px 0 #2943d1, 2px -2px 0 #f00;
}

100% {
text-shadow: 3px 3px 0 #2943d1, -2px -2px 0 #f00;}
`;

export const Load = styled.div`
    width:100% ;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
`;

export const Text = styled.h2`
    animation: ${Animate} 2.5s linear infinite ;
    font-size: 50px;
`;


export const ButtonReturn = styled(Link)`
    box-sizing: border-box;
    background: ${RED};
    margin: 10px;
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
    text-decoration: none;
    &:hover{
        color:${RED};
        background:${WHITE};
    }
`


export const ButtonClear = styled.button`
    box-sizing: border-box;
    background: ${RED};
    margin: 10px;
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

export const Error = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;
