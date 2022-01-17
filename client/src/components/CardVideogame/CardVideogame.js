import styled from 'styled-components';
import {RED,DARK,DARKL,WHITE} from '../VariableSC';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    /* background:red; */
    border: 2px solid #fcfcfc;
    display: flex;
    max-width: 250px;
    height: 450px;
    backdrop-filter: blur(10px);
    background:${DARK};
    text-align: center;
    align-items: stretch;
`;

export const Name  = styled.h2`
    height: 60px;
    overflow: hidden;
    margin:0px;
`;

export const ContainerAll = styled.div`
`;
export const Text = styled.p`
    height: 40px;
    overflow: hidden;
`;

export const Img = styled.img`
    width:250px;
    height: 250px;
`;

export const Button  = styled(Link)`
    box-sizing: border-box;
    background: ${RED};
    margin: 1px;
    height: 50px;
    color: #fffffe;
    padding: 4px 5px;
    text-align: center;
    font-size: 16px;
    font-weight:700;
    border: none;
    border-radius:3px;
    letter-spacing: 1.7px;
    cursor: pointer;
    transition: .2s all;
    text-decoration:none;
    &:hover{
        color:${RED};
        background:${WHITE};
    }

`;
