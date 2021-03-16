import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*, 
*::before, 
*::after {
    box-sizing:border-box;
}
html, body {
        color: #333;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 16px;
        height:100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }
    li {
        list-style:none;
    }
`;
