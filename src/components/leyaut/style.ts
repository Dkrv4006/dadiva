import styled from "styled-components";

export const LayoutStyle = styled.div`
    width: auto;
    height: auto;

    background-color:#191923;

    main{
        
        padding: 15px 15px 15px 15px;
        margin: 0;
        display: flex;
        justify-content: center;
        
        
        
    }
    
    .app-root{
        max-width: 1400px;
        position: relative;
        
        display: grid;
        grid-template-columns: 1fr 4fr 0.1fr;
        gap: 20px;
        
        &::before{
            content: "";
            position:fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 15px;
            background-color: var(--secondary)
        }
        &::after{
            content: "";
            position:fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 15px;
            background-color: var(--secondary);
        }
    }

`