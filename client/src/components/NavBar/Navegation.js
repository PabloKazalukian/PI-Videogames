import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {RED,DARK, WHITE} from '../VariableSC';


export const NaviBar = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
    position:relative;
    min-height: 65px;
    background: #3da9fc;
    z-index: 20;
    font-family: 'Outfit', sans-serif;
    letter-spacing: 1px;
    `;
export const NavUl = styled.ul`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 65px;    
    margin: 0px;
    position:fixed;
    background: ${DARK};
    flex-direction: row;
    justify-content: space-between;
    gap:1rem;
    align-items: center;
    list-style:none;
    padding: 0px 80px;
    & > p{display: none;}
    @media screen and (max-width: 800px) {
        padding:10px 0px ;
        flex-wrap: wrap;
        justify-content: center;
        & > form{
            display: none;
        }
        &:hover{ 
            height:auto;
            padding-top: 8px;
            padding-bottom: 8px;
        }
        &:hover > form{
            display: flex;
        }
    }
`
export const SearchBar = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    order: 2;
    @media screen and (max-width: 800px) {
        order: 3;
        margin-top: 10px;
        height: auto ;
    }
`
export const InputBar = styled.input`
    display: flex;
    flex-direction: row;
    outline: none;
    background: #d8eefe;
    outline: none;
    padding: 5px;
    border-radius: 7px;
    font-family: 'Outfit', sans-serif;
    letter-spacing: 1px;
    font-weight: 500;
    width: 60%;
    border: 0px;
    &:target{
        background: red;
        border: 2px solid red;
    }
`
export const ButtonBar = styled.input`
    border: 0px;
    margin-left: 10px ;
    box-sizing: border-box;
    padding: 6px 25px;
    background:${RED};
    border-radius: 5px;
    font-family: 'Outfit', sans-serif;
    letter-spacing: 1px;
    font-weight: 500;
    color: #d8eefe;
    cursor: pointer;
    font-size: 1rem;
    &:hover{
        color:#333
    }
`
export const Lin = styled(Link)`
    order: 3;
    box-sizing: border-box;
    background-color: ${RED};
    margin: 0px;
    text-decoration: none;
    height: 50px;
    color: #fffffe;
    padding: 14px 5px;
    text-align: center;
    font-weight:700;
    font-size: 1rem;
    border-radius:3px;
    letter-spacing: 1px;
    min-width: 140px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: pre;
    &:hover{
        color: #333;
    }
    @media screen and (max-width: 800px) {
        order: 1;
    }
`
export const Linb = styled.a`
    order: 1;
    box-sizing: border-box;
    background-color: ${RED};
    margin: 0px;
    text-decoration: none;
    min-width: 140px;
    height: 50px;
    color: #fffffe;
    padding: 14px 0px;
    text-align: center;
    font-weight:700;
    border-radius:3px;
    letter-spacing: 1px;
    &:hover{
        color: #333;
    }
    @media screen and (max-width: 800px) {
        order: 2;
    }
    
`
