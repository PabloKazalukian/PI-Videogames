import styled from 'styled-components';
import {DARK} from '../VariableSC';
import { Link } from 'react-router-dom';
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
    margin: 0px;
    min-height: 92vh;
    overflow: hidden;
`;

export const ContainerDetail = styled.div`
    padding: 0px 80px;
`;

export const ContainerImg = styled.div`
    padding: 0px 80px;
    height: 610px;
    overflow: hidden;
    
`;

export const Img = styled.img`
    width:100%;
    overflow: hidden;

`;

export const ContainerRest = styled.div`
    padding: 0px 80px;
`;

export const Description = styled.p`
    
`;

export const Name = styled.h1`
    text-align:center;
    animation: ${Animate} 2.5s linear infinite ;    
`;