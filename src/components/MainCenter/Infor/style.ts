import styled from "styled-components";
import raiz from "../../../asses/sa.svg"

export const InforStyle = styled.div`
    width: 100%;
    height: 300px;

    position: relative;

    &::before{
        content: "";
        background-image: url(${raiz});
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;
        
        position: absolute;
        
        height: 80%;
        top: 25%;
     
        /* background: var(--primary); */
    }


`