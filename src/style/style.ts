import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
     }
     body, html{
      background: #353535;
      /* background-image: linear-gradient(to left top, #666869, #4e4f50, #363737, #202021, #070707); */
     }

     li{
      list-style: none;
      float: left;
      margin: 2.5rem 20px;

      color: #0DA1FF;
     }

     .input-g{
        position: relative;
     }
     input{
        padding: 10px;
        transition: 150ms cubic-bezier(0.4,0,0.2,1);
     }
     
     label{
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

     input:hover ~ label{
        transform: translateY(-50%) scale(0.8)
        
     }
     
    
`