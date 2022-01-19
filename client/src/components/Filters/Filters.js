import styled from 'styled-components';
import {RED,DARKL,WHITE} from '../VariableSC';
import { keyframes } from "styled-components";


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

export const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background:${DARKL};
    backdrop-filter:blur(5px);
    `;

export const ContainerFilter = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 15px;
    align-items: flex-start;
    width: 550px;
    padding:10px;
    text-align: center;
    border-radius: 2px;
    width: 100%;
`;

export const ContainerSort = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap:250px;
    width: 100%;
`;
export const Sort = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0px;
`;

export const ShowFilter = styled.h2`
    animation: ${Animate} 2.5s linear infinite ;
    min-height:30px ;
`;

export const Filter= styled.div`
    min-width: 256px;

`;

export const FilterBy = styled.p`
    height: 40px;
    text-align: center;
`;

export const ButtonFilter = styled.button`
    box-sizing: border-box;
    background-color: ${RED};
    margin: 5px;
    height: 50px;
    color: #fffffe;
    padding: 10px 15px;
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
