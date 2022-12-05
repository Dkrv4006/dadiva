import styled from "styled-components";


export const MainLeftStyle = styled.div`

    width: 290px;
    height: calc(100vh - 30px);
    background: #252430;
    position: absolute;
    position: sticky;
    top: 15px;

    @media screen and (max-width:500px) {
    
            
                display: none;
        
        }
    
    h2, h3{
        color: white;
        font-weight: 100;

    }

    .app-root{
        width: 290px;
        padding-bottom: 25px;
    }
    
    .avatar{
        width: 250px;
        height: 250px;
        background: #252430;
        position: fixed;
        top: 15px;
        
        
    }
    .scroll{
        display: flex;
        justify-content: center;
        width: 290px;
        padding-top: 250px;
        padding-bottom: 25px;
        height: calc(100vh - 30px);
        background: #252430;

        overflow: scroll;
       
        
    }
    .scroll::-webkit-scrollbar{
        display: none;
    }

    .pocenteHtmal{
        width: 230px;
        height: 10px;
        margin-top: 10px;
        background-color: black;
        position: relative;


        &::before{
            content: "";
            left: 0;
            top: 0;
            position: absolute;
    
            width: 80%;
            height: 10px;
            background-color: #0016FF ;
        }
    }
    .pocenteCss{
        width: 230px;
        height: 10px;
        margin-top: 10px;
        background-color: black;
        position: relative;


        &::before{
            content: "";
            left: 0;
            top: 0;
            position: absolute;
    
            width: 75%;
            height: 10px;
            background-color: #0016FF ;
        }
    }
    .pocenteJavaScript{
        width: 230px;
        height: 10px;
        margin-top: 10px;
        background-color: black;
        position: relative;


        &::before{
            content: "";
            left: 0;
            top: 0;
            position: absolute;
    
            width: 55%;
            height: 10px;
            background-color: #0016FF ;
        }
    }
    .pocenteNodejs{
        width: 230px;
        height: 10px;
        margin-top: 10px;
        background-color: black;
        position: relative;


        &::before{
            content: "";
            left: 0;
            top: 0;
            position: absolute;
    
            width: 50%;
            height: 10px;
            background-color: #0016FF ;
        }
    }
    .pocenteReactjs{
        width: 230px;
        height: 10px;
        margin-top: 10px;
        background-color: black;
        position: relative;


        &::before{
            content: "";
            left: 0;
            top: 0;
            position: absolute;
    
            width: 65%;
            height: 10px;
            background-color: #0016FF ;
        }
    }
    .pocenteMysql{
        width: 230px;
        height: 10px;
        margin-top: 10px;
        margin-bottom: 20px;
        background-color: black;
        position: relative;


        &::before{
            content: "";
            left: 0;
            top: 0;
            position: absolute;
    
            width: 30%;
            height: 10px;
            background-color: #0016FF ;
        }
    }
    .html{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;

    }

    @media screen and (max-width: 480px) {
       .scroll{
           
           display: none;
    }
    
}

`