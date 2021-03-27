import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    margin:0;
    padding: 0;
} 
html, body {
        color: #333;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 16px;
        height:100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        overflow: hidden; 
         @media (max-width:30em) {
            overflow: auto;
        } 
    }

    #root {
        height: 100%;
        position: relative;
    }

    li {
        list-style: none;
    }
    button {
        cursor: pointer;
    }

`;
