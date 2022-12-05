import styled from "styled-components";
import raiz from "../../../asses/sa.svg"

export const CertificateStyle = styled.div`
    width: 100%;
    height: 200px;
    margin-top: 30px;

    display: flex;
    justify-content: end;
    position: relative;

    &::before{
        content: "";
        position: absolute;
        
        height: 100%;
        width: 5px;
        top: 0;
        left: calc(50% - 2px);
     
        background: var(--primary);
    }

    .left{
        position: absolute;
        right: 0;
        width: 45%;
        height: 100%;
        padding: 20px;
    
        border-radius: 20px;

        display: flex;
        align-items:center;
        flex-direction: column;

        border: var(--primary) 3px solid;
        position: relative;

        &::before{
            content: "";
            position: absolute;
            width:24px;
            height: 20px;

            top: -3px;
            left: -8px;
            border-top:var(--primary) 3px solid ;
            border-left:var(--primary) 3px solid ;
            background: var(--secondary);
            transform: rotate(10deg);
            transform: skewX(25deg);
        }

    }
    .icon{
        position: absolute;
        top: -10px;
        left: calc(50% - 10px);
        width: 22px;
        height: 22px;
        border-radius: 50%;
        text-align: center;
        padding: 3px;
        background: var(--primary);
        color: white;
    }


    .frome{
        margin-top: 15px;
        color: #fff;
    }

    h4{
        margin-bottom: 20px;
    }
    h1{
        color: #fff;
    }


`