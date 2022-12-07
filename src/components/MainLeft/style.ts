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
            background-color: #0016FF ;
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
            border-radius: 20px;
            background-color: #0016FF ;
        }
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

    .perfil{
        width: 130px;
        height: 130px;
        border-radius: 50%;
        background: #0016FF;
        padding: 5px;
    }
    
    img{
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    
`