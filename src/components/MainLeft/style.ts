import styled from "styled-components";
import fundo from "../../assets/fundo.jpg"

export const MainLeftStyle = styled.div`

    width: 290px;
    height: calc(100vh - 30px);
    background: #252430;
    position: absolute;
    position: sticky;
    top: 15px;
   

    
    h2, h3{
        color: white;
        font-size: 20px;
        font-weight: 100;

    }

    .app-left{
        width: 290px;
        padding-bottom: 25px;
        

    }
    
    .avatar{
        width: 290px;
        height: 290px;
        background: #252430;
        position: fixed;
        top: 15px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
        
        
    }
    .scroll{
        display: flex;
        justify-content: center;
        width: 290px;
        padding-top: 290px;
        padding-bottom: 25px;
        height: calc(100vh - 30px);
        background: #20202A;

        overflow: auto;
       
        
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
        border-radius: 20px;

        &::before{
            content: "";
            left: 0;
            top: 0;
            position: absolute;
    
            width: 80%;
            height: 10px;
            background-color: var(--primary) ;
            border-radius: 20px;
            z-index: 0;
        }
    }
    .pocenteCss{
        width: 230px;
        height: 10px;
        margin-top: 10px;
        background-color: black;
        position: relative;
     
            border-radius: 20px;


        &::before{
            content: "";
            left: 0;
            top: 0;
            position: absolute;
    
            width: 75%;
            height: 10px;
            background-color: var(--primary) ;
            border-radius: 20px;
        }
    }

    .mainJavaScript{
        display: flex ;
        flex-direction: column;
    }
    .pocenteJavaScript{
        width: 230px;
        height: 10px;
        margin-top: 10px;
        background-color: black;
        position: relative;
        border-radius: 20px;

        
        &::before{
            content: "";
            left: 0;
            top: 0;
            position: absolute;
            
            width: 55%;
            height: 10px;
            border-radius: 20px;
            background-color: var(--primary) ;
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
            background-color: var(--primary) ;
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
            background-color: var(--primary) ;
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
            background-color: var(--primary) ;
        }
    }
    .label{
        display: flex;
        justify-content: space-between;

        font-size: 20px;
        color: white;
        margin: 10px 0;
        
    }
    .l-time{
        margin-bottom: 10px;
    }    
    .range {
    width: 230px;
    height: 15px;
    -webkit-appearance: none;
    background: #222;
    outline: none;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: inset 0 0 7px rgba(0, 0, 0, 1);
    }
    .range::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: var(--primary);
    cursor: pointer;
    border: 2px solid #333;
    box-shadow: -407px 0 0 400px var(--primary);
    }
    @media screen and (max-width: 480px) {
        .scroll{
            
            display: none;
    }
    
    
}

    /* .perfil{
        width: 130px;
        height: 130px;
        border-radius: 50%;
        background: #15E1F4;
        padding: 5px;
    } */
    
    img{
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }
    
    
    @media screen and (max-width: 850px) {
        grid-row: 1 / 2;
        width: 100%;
        position: absolute;
        background: transparent ;
        background: url(${fundo}) ;
        background-repeat: no-repeat;
        
        background-size: 100% 100px;
        background-position: left top ;


        .app-left{
            width: 100%;
        }

        .avatar{
            width: 100%;
            height: auto;
            background: transparent ;
            position: static ;
        }

        .scroll{
            width: 100%;
            height: auto;

            padding: 0;
            overflow: hidden;
        }
       
    }

    

`