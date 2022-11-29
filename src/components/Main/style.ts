import styled from "styled-components";

export const Mainsty = styled.div`
    
    width: 100%;
    height: 300px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    z-index: 2;

   &:after{
        content: "";
        position: absolute;
        width: 153px;
        height:100px;
        border-bottom:rgba(333,333,333,0.3) solid 3px;
        border-right: rgba(333,333,333,0.3) solid 3px;
        border-top: transparent solid 8px;
        border-left: transparent solid 8px;
        border-radius: 10px;
        bottom: -40px;
        left: 9%;
        z-index: 0;
        
        
    }
    
    h1{
        font-weight: 100;
        color: #fff;
        margin: 10px 40px;
        padding: 0 20px;
    }
    h2{
        font-size: 15px;
        color: #0DA1FF;
        margin: 10px 40px;
        padding: 0 20px;
    }     
`