import styled from "styled-components";

export const LigaStyle = styled.div`
    width: 100%;
    height: auto;
    margin-top: 50px;
    background: var(--secondary);
    display: flex;
    justify-content: space-between;

    .frontend, .backend, .ciby{
        width: 31%;
        height: 250px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;


        h1{
            font-size: 20px;
            color: white;
        }

        background: var(--third);
    }


    
`