import { createGlobalStyle } from "styled-components";

export const GlobalStyle= createGlobalStyle`
*{
  margin:0 ;
  padding: 0 ;
  box-sizing: border-box ;
}

:focus{
    border-radius: 1px ;
    outline:0 ;
    box-shadow: 0 0 0 2px ${props => props.theme["light-green"]} ;
  }

  body{
    background-color: ${props => props.theme["white"]} ;
    color: ${props => props.theme["black"]} ;
    -webkit-font-smoothing:antialiased;
    
  }
  body,input, textarea,button{
    font: 400 1rem Montserrat, sans-serif
  }

  input{
    padding: 5px 5px ;
    transition: scale 0.3s ease-in-out ;
    border: 1px solid ${(props) => props.theme['gray']};   ;
    border-radius: 1px ;
    color: ${(props) => props.theme['black']} ;
    
  }
  input:focus{
    border:1px solid transparent ;
    scale:1.01 ;
  }
`