import styled from 'styled-components';
import {DARK} from '../VariableSC';
// import { Link } from 'react-router-dom';

export const Container = styled.div`
    padding: 0px 80px;
`;

export const ContainerCards = styled.div`
    padding: 20px 0px;
    /* background:${DARK}; */
    backdrop-filter: blur(1px);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: hidden;
    gap: 15px;
`;