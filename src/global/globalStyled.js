import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
   body{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    background-color: #533483;
    color: white;
   }
`