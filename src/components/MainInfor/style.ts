import styled from "styled-components";


export const MainStyle = styled.div`
    width: 100%;
   
    

    display: flex;
    justify-content: center;
    
    .divleft{
        width: 50%;
       

        display: flex;
        justify-content: center;
        align-items: center;

        border-bottom: #0DA1FF solid 2px;
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
            width: 80%;
            height: 100px;
        }
        h1{
            font-size: 20px;
            padding: 20px;
        }

    }

`