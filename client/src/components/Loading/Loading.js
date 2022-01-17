import styled from 'styled-components';
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

export const Load = styled.div`
    width:100% ;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
`;

export const Text = styled.h2`
    animation: ${Animate} 2.5s linear infinite ;
`;