import { Link } from 'react-router-dom';
import { keyframes } from "styled-components";
import styled  from 'styled-components';
// import {RED,DARK} from '../VariableSC';

const  Animate= keyframes`
    0%, 100% {
      text-shadow: -3px -3px 0 #2943d1, 2px 2px 0 #f00;
    }
    
    25% {
      text-shadow: 3px 3px 0 #2943d1, -2px -2px 0 #f00;
    }
    
    50% {
      text-shadow: 4px -3px 0 #2943d1, -2px 2px 0 #f00;
    }
    
    75% {
      text-shadow: -3px 3px 0 #2943d1, 4px -4px 0 #f00;
    }
    
    100% {
      text-shadow: 3px 3px 0 #2943d1, -2px -2px 0 #f00;}
`;


export const Container = styled.div`

    position: relative;
    width:100%;
    height:100vh;
    object-fit: cover;
    background-image:url('https://wallpapercave.com/wp/BFFsnBO.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
`;

export const Text = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    text-align: center;
`;
export const Title = styled.div`
    position: absolute;
    font-size: 12vh;
    letter-spacing: 12px;
    font-weight: 700;
    padding: 10px;
    /* border:1px solid #ffffff88; */
    
    animation: ${Animate} 2.5s linear infinite ;
`;

export const Button = styled(Link)`
    display: inline-flex;
    position: absolute;
    top: 650px;
    left: 38%;
    width: 100px;
    min-width: 290px;
    height: 80px;
    background: transparent;
    border: 2px solid #ffffff88;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    transition: .3s ease all;	
    position: relative;
    overflow: hidden;
    text-decoration: none;
    &:hover{
        box-shadow: 0 0 1px #2943d1, 0 0 3px #2943d1, 0 0 6px #f00;
        background:#2943d112;
    }
    
    /* &:after {        
        content: 'To Doggi';
        font-size: 50px;
        color: #fff;
        font-family: 'Ubuntu', sans-serif;
        position: absolute;
        top: -90px;
        left: 17%;
        transition: .3s;
    } */
    /* &:hover::after{
	    top: 10px;
    } */
`;
export const Span = styled.span`
    position: relative;
	z-index: 2;
	font-size: 55px;
    letter-spacing: 3px;
	color: #fff;
	font-family: 'Ubuntu', sans-serif;
	transition: .3s ease-in-out all;
    
    ${Button}:hover &{
        text-shadow: -2px 2px 0 #2943d1, 2px -2px 0 #f00;

    }
`;