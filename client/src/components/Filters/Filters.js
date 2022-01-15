import styled from 'styled-components';
import {RED,DARK,BLUE} from '../VariableSC';

export const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const ContainerFilter = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    padding:10px;
    text-align: center;
    border-radius:12px;
`;