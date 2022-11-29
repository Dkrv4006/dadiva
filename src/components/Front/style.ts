import styled from "styled-components";

export const FrontStyle = styled.div`
    width: 100%;
    height: 200px;

    .front{
        display: flex;
        justify-content:center;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        position: relative;
    @media screen and (max-width: 441px) {
        &:after{
        content: "";
        position: absolute;
        width: 153px;
        height:500px;
        border-bottom:rgba(333,333,333,0.3) solid 3px;
        border-left: rgba(333,333,333,0.3) solid 3px;
        border-top: transparent solid 8px;
        border-right: transparent solid 8px;
        border-radius: 10px;
        bottom: -40px;
        left: 9px;
        z-index: 0;
        
        }
    }
    }
    

    .js{
        width: 200px;
        height: 80px;
       
        box-shadow:0px 0px 5px #0DA1FF;
        background: #4e4f50 ;
       
    }
 

  
`