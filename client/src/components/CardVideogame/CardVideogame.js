import styled from 'styled-components';
import {RED,DARK} from '../VariableSC';
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