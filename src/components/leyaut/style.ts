import styled from "styled-components";

export const LayoutStyle = styled.div`
    width: auto;
    height: auto;

    background-color: azure;

    main{
        
        padding: 15px;
        margin: 0;
        display: flex;
        justify-content: center;

    }
    
    .app-root{
       
        max-width: 1400px;

        display: grid;
        grid-template-columns: 1fr 4fr 0.5fr;
        gap: 20px;
        
    }

`