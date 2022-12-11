import styled from "styled-components";


export const MainCenterStyle = styled.div`

      grid-column: 2 / 3;
      padding-left: 10px;
      padding-right: 10px;
      height: auto;  
      background: var(--secondary);
      
@media screen and (max-width: 850px) {
    grid-column: 1;
    grid-row: 2;
}


      

`