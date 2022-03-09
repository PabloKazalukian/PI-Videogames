import styled from 'styled-components';
import {DARK} from '../VariableSC';


export const ContainerNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    width: 100%;
    background: ${DARK};
`
export const ContainerUl = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 45px;
    background: ${DARK};
    list-style:none;
    gap: 1rem;
    padding: 0px;
    @media screen and (max-width: 600px) {
        gap: .3rem
    }
`;
export const ContainerLi = styled.li`
    margin: 0px 5px;
`;
export const ButtonPage = styled.button`
    height: 1.7rem;
    width: 2rem;
    font-weight: 700;
    background: #d8eefe;
    border: 1px solid #333;
    cursor: pointer;
    border-radius: 15px;
    &:focus{
        background: red;
        color: #fff;
    }
`;