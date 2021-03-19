import { keyframes } from 'styled-components';

export const progressin = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
`;

export const progressout = keyframes`
    to {
        transform: translateX(100%);
    }
`;
