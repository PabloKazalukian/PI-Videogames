import styled from "styled-components";
import {DARK,WHITE,RED} from '../VariableSC';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: ${DARK};
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0%;
    height: 160px;
    margin: 0px;
    padding: 0px;
    justify-content: center;
    align-items: center;
    color: ${WHITE};
    & hr{
        width: 50%;
        border: 0;
        border-top:2px solid hsla(0,0%,100%,.1);
    }
    & p{
        display: inline;
    }
    & p a{
        color: ${WHITE};
        text-decoration: none;
        &:hover{
            color:${RED};
        }
    }
    @media screen and (max-width: 440px) {
        & p{
            padding: 15px;
        }
    }
`;

export const ContainerIcons = styled.div`
    display: flex;
    justify-content: center;
    & a{
        margin-top:12px;
        width: 50px;
    }
    

`;
