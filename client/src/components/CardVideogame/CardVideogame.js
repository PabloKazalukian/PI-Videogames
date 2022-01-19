import styled from 'styled-components';
import {RED,DARK,WHITE} from '../VariableSC';
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
    height: 70px;
    overflow: hidden;
    margin:0px;
    padding-top: 5px;
`;

export const ContainerAll = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content:center ;
    align-items:center;
    height: 98%;
`;


export const Text = styled.p`
    height: 40px;
    margin: 10px;
    overflow: hidden;
`;

export const Img = styled.img`
    width:250px;
    height: 250px;
`;

export const References = styled.h3`
    height: 25px;    
    overflow: hidden;
    font-size: 15px;
    margin: 0px;
    padding: 0px;
`;

export const Reference = styled.h3`
    height: 25px;    
    overflow: hidden;
    font-size: 15px;
    margin-bottom: 10px;
    padding: 0px;
`;

export const Button  = styled(Link)`
    box-sizing: border-box;
    background: ${RED};
    margin-top: 5px;
    height: 30px;
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
