import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  body {
    width: 100vw;
    background: #AD49E1;
    font-family: "Inter", serif;
    font-size:62.5%
  }
  #root{
    width: 100%;
  }
`;
 
export default GlobalStyle;