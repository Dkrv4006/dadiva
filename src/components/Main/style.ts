import styled from "styled-components";
import vscode from '../../asses/vscode.svg'

export const Mainsty = styled.div`
    
    width: 100%;
    height: 300px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    z-index: 2;

    &::before{
        content: url(${vscode});

        position: absolute;
        height: 100px;
        width: 100px;
        bottom: -20%;
        left: 10%;
        color: red;
        transform: translate(-50%, -50%);
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