import styled from 'styled-components';
import {RED,DARK} from '../VariableSC';

export const Container = styled.div`

`;
export const ContainerTemp = styled.form`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    background: #3331;//3331
    min-height: 80px ;
    overflow: hidden;
`;

export const TempShow = styled.div`    
    color: #fffffe;
    display: flex;
    height:23px;
    min-width: 5px;
    flex-direction: row;
    box-sizing: border-box;
    border-radius: 5px;
    border: 2px solid #ef4565;
    margin: 4px;
    background: #90b4ce97;
`;

export const TempName = styled.p`
    box-sizing: border-box;
    display: inline-flex;
    height: 23px;
    text-align: center;
    color: #111;
    font-weight: 500;
    text-align: center;
    padding: 0px 4px;
    margin: 0px 2px;
    cursor: default;
`;

export const DeleteTemp = styled.button`
    background: #ef4565;
    padding: 3px;
    color: #d8eefe;
    border: none;
    cursor: pointer;
    font-weight: 700;
`;