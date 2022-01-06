import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const NaviBar = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
    position:relative;
    min-height: 65px;
    background: #3da9fc;
    z-index: 20;
    font-family: 'Outfit', sans-serif;
    letter-spacing: 1px;;
`;
export const NavUl = styled.ul`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 65px;    
    margin: 0px;
    position:fixed;
    background: #094067;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style:none;
    padding: 0px 20px;
`
export const SearchBar = styled.form`
    width: 80%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin: auto;
    
`
export const InputBar = styled.input`
    display: flex;
    flex-direction: row;
    width: 60%;
    outline: none;
    background: #d8eefe;
    outline: none;
    padding: 5px;
    border-radius: 7px;
    font-family: 'Outfit', sans-serif;
    letter-spacing: 1px;
    font-weight: 500;
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
    padding:5px 25px;
    background:#ef4565;
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
    box-sizing: border-box;
    background-color: #ef4565;
    margin: 0px;
    text-decoration: none;
    width: 10%;
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
`
export const Lupa = styled.div`
    background:transparent;
    display:flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:40%;
    left: 67%;
`