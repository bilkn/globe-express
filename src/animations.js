import { keyframes } from 'styled-components';

export const progress = keyframes`
    from {
    transform: translateX(-100%);
  }

  90% {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const slideInBottom = keyframes`
  from {
    transform: translateY(100%)
  }

  to {
    transform: translateY(0)
  }
`;

export const loadingDot = keyframes`
  from {
    content: ""  
  }

  33% {  
    content: "."  
  }

  66% {
    content:".."
  }
  
  to { 
    content:"..."
  }
`;
