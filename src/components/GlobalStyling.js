import {createGlobalStyle} from "styled-components";


const GlobalStyling = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  h1 h2 h3 h4 {
    font-family: 'Poppins', sans-serif;
  }
`

export default GlobalStyling;