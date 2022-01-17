import styled from 'styled-components';
import {RED,DARKL,DARK,WHITE,WHITEL} from '../VariableSC';

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
    justify-content: center;
    gap: 15px;
    align-items: center;
    width: 550px;
    padding:10px;
    text-align: center;
    border-radius: 2px;
`;

export const ShowFilter = styled.h2`
    
`;

export const ContainerSort = styled.div`
    display: flex;
    flex-direction: row;
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
