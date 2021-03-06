import styled from 'styled-components';
import {DARKL,WHITEL} from '../VariableSC';
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
  @media screen and (max-width: 800px) {
    padding: 0px;
  }

`;

export const ContainerImg = styled.div`
  padding: 0px 80px;
  height: 610px;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    margin: 0px;
    height: auto;
    padding: 0px;
  }
    
`;

export const Img = styled.img`
  width:100%;
  overflow: hidden; 

`;

export const ContainerRest = styled.div`
  margin: 0px 80px 20px 80px;
  padding: 50px 80px 0px 80px;
  border: 1px solid ${WHITEL};
  background:${DARKL};
  backdrop-filter:blur(5px);
  border-radius: 0px 0px 12px 12px;
  @media screen and (max-width: 800px) {
    margin: 0px;
  }
  @media screen and (max-width: 430px) {
    padding: 10px;
    &> p{
      text-align: center;
    }
  }
`;

export const Description = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
  margin: 0px;
  @media screen and (max-width: 430px) {
    text-align: center;
  }
`;

export const Name = styled.h1`
  text-align:center;
  animation: ${Animate} 2.5s linear infinite ;    
`;