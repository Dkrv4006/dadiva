import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
   --primary: #019fcf;
   --secondary: #191923;
   --third:#252430;
}

*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body, html{
background: #353535;
overflow: visible;
}

::-webkit-scrollbar{
        width: 5px;
        background-color: #353535;
    }
::-webkit-scrollbar-thumb{
        width: 5px;
        background-color: var(--primary);
    }

    a{
      text-decoration: none;
      text-decoration-color: red;
    }

     #root{
    
     }

.grid{
   display: grid;
}

.flex{
   display: flex;
}

    
`