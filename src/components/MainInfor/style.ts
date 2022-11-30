import styled from "styled-components";
import reactjs from '../../asses/reactjs.svg'
import nodejs from '../../asses/nodejs.svg'
import javascript from '../../asses/javascript.svg'


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

        position: relative;

        &::before{
        content: url(${javascript});

        position: absolute;
        height: 80px;
        width: 80px;
        bottom: -15%;
        left: 50%;
        color: red;
        transform: translate(-50%, -50%);
        }
    }
    .divright{
        width: 50%;
        border-bottom: #0DA1FF solid 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        &::after{
        content: url(${reactjs});
      
        position: absolute;
        height: 100px;
        width: 100px;
        top: 120%;
        left: 80%;
        transform: translate(-50%, -50%);
        }

        &::before{
        content: url(${nodejs});

        position: absolute;
        height: 100px;
        width: 100px;
        top: 10%;
        left: 10%;
        color: red;
        transform: translate(-50%, -50%);
        }
        
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

            display: flex;
            justify-content: center;
            align-items: center;
        }
        h1{
            font-size: 20px;
            padding: 20px;
        }

    }
    img{
        width: 80%;
        height: 80%;
        
    }

`