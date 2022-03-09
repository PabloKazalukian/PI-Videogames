import styled from 'styled-components';
import {DARK,WHITE} from '../VariableSC';
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
    padding: 0px 80px;
    min-height: 125vh;
    position: relative;
    @media screen and (max-width: 686px) {
        padding: 0px;
    }
`;

export const ContainerText = styled.div`
    background: ${DARK};
    margin: 5rem 100px;
    padding: 20px 2rem;
    height: auto;
    border-radius: 50px;
    @media screen and (max-width: 800px) {
        margin: 5rem 0px;
    }
`;
export const ContainerAllTech = styled.div`
    display:  flex;
    justify-content:  center;
    gap: 2rem;
    align-items: center;
    flex-wrap: wrap ;
`
export const ContainerTech = styled.a`
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: transform .3s,background .3s,color .3s ;
    padding: .3rem 1rem;
    border-radius: 20px;
    color: ${WHITE};
    &:hover{
        transform: scale(120%);
        background: ${WHITE};
        color: ${DARK};
    }
`;

export const ContainerEnd = styled.div`
    margin: 0px 1rem;

`;

export const ContainerTextArea = styled.div`
    padding: 0px 90px;
    font-size: 1.3rem;
    @media screen and (max-width: 560px) {
        padding: 0px;
    }
`;

export const TextEnd = styled.h2`
    font-size: 2rem;
    text-align: center;
    animation: ${Animate} 2.5s linear infinite ; 
`;

export const Title = styled.h2`
    text-align:center;
    font-size: 3rem;
    margin: 0px;
    animation: ${Animate} 2.5s linear infinite ; 
`;

export const TitleTech = styled.h2`
    font-size: 1.2rem;
`;

export const ImgTech = styled.img`
    width: 100px;
    height: 100px;    
`;