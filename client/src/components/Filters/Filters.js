import styled from 'styled-components';
import {RED,DARKL,WHITE,WHITEL} from '../VariableSC';
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
    gap:35px;
    backdrop-filter:blur(5px);
    & p{
        margin: 0px;
        height: 44px;
    }
    `;

export const ContainerFilter = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    gap: 15px;
    align-items: flex-start;
    width: 550px;
    margin-bottom: 45px;
    padding:10px 10px 50px 10px;
    text-align: center;
    border-radius: 2px;
    width: 100%;
    position: relative;
    border-bottom:1px solid ${WHITEL};

`;

// export const ContainerSort = styled.div`
//     box-sizing: border-box;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: flex-start;
//     gap:15px;
//     width: 100%;
//     padding:0px 10px 50px 10px;

// `;

export const Sort = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0px;
    & p {
        height: 38px;
    }
    & select {
        margin-top: 6px;
        background:#d8eefe;
        color: #dd4565;
        width: 155px;
        cursor: pointer;
        padding: 5px 10px;
        border-radius: 2px;
        border:1px transparent;
        font-family: 'Outfit', sans-serif;
        letter-spacing: 1px;
        font-weight: 500;
        font-size: .9rem;
        transition: all 0.25s ease;
    }
    & select:hover {
        cursor: pointer;
    }
    & select::selection option{
        font-weight: 500;
        cursor: pointer;
    }
`;

export const ShowFilter = styled.h2`
    animation: ${Animate} 2.5s linear infinite ;
    min-height:30px ;
`;

export const Filter= styled.div`
    min-width: 256px;
    & select {
        background:#d8eefe;
        color: #dd4565;
        width: 155px;
        cursor: pointer;
        padding: 5px 10px;
        border-radius: 2px;
        border:1px transparent;
        font-family: 'Outfit', sans-serif;
        letter-spacing: 1px;
        font-weight: 500;
        font-size: .9rem;
        transition: all 0.25s ease;
    }
    & select:hover {
        cursor: pointer;
    }
    & select::selection option{
        font-weight: 500;
        cursor: pointer;
    }
`;

export const FilterBy = styled.p`
    height: 40px;
    text-align: center;
    margin: 0px;
`;

export const ButtonFilterDB = styled.button`
    box-sizing: border-box;
    background-color: ${RED};
    top: 50%;
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
    color:${RED};
    background:${WHITEL};
    &:hover{
        color:${WHITE};
        background:${RED};
    }
`;

export const ButtonFilter = styled.button`
    box-sizing: border-box;
    background-color: ${RED};
    position: absolute;
    top: 86%;
    left: 40%;
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
    margin: 5px;
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
    position: absolute;
    top: 86%;
    left: 52%;;
    transition: .2s all;
    &:hover{
        color:${RED};
        background:${WHITE};
    }
`;
