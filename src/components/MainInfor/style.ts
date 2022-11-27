import styled from "styled-components";


export const MainStyle = styled.div`
    width: 100%;
    height: 500px;
    

    display: flex;
    
    .divleft{
        width: 50%;
       

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .divright{
        width: 50%;
        
    }

    span{
        color: #0DA1FF;
    }
    h1{
        color: white;
    }

    @media screen and (max-width: 680px) {
        .divright{
            display: none;
        }

        .divleft{
            width: 100%;
            height: 100px;
        }
        h1{
            font-size: 20px;
            padding: 20px;
        }

    }

`