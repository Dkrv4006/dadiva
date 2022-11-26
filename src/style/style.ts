import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
     }
     body, html{
      background: #353535;
      /* background-image: linear-gradient(to left top, #666869, #4e4f50, #363737, #202021, #070707); */
     }

     .input-g{
        position: relative;
     }
     input{
        padding: 10px;
        transition: 150ms cubic-bezier(0.4,0,0.2,1);
     }
     
     label, h1{
        position: absolute;
        left: 10px;
        background: white;
        pointer-events: none;
        transform: translateY(1rem);
        transition: 150ms cubic-bezier(0.4,0,0.2,1);
     }
     input:focus{
        outline: none;
        border: 1.5px solid red;
     }

     input:hover ~ h1{
        transform: translateY(-50%) scale(0.8)
        
     }
     
    
`