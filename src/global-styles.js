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
    }
    #root {
        background: url("/assets/img-2.jpg") center  no-repeat;
        background-size: cover;
        height: 100%;
    }

    li {
        list-style: none;
    }

`;
