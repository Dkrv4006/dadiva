import styled from "styled-components";
import fundo from "../../assets/fundo.jpg"

export const MainLeftStyle = styled.div`

    position: absolute;
    position: sticky;

    width: 290px;
    height: calc(100vh - 30px);
    top: 15px;

    background: #252430;
   

    
h2{
    color: white;
    font-size: 30px;

}

.sd, h2, .descripition{
    display: none;
}
    
h3{
    color: white;
    font-size: 30px;
    font-weight: 100;

}

.app-left{
    width: 290px;
}
    
.avatar{
    position: fixed;

    width: 290px;
    height: 290px;
    top: 15px;
    background: #252430;
    
    
    justify-content: center;
    align-items: center;
    z-index: 100;  
}

.scroll{
    display: flex;
    justify-content: center;

    width: 290px;
    height: calc(92vh - 30px);
    padding-top: 250px;
    padding-bottom: 250px;
    margin-bottom: 30px;
    
    background: #20202A;

    overflow:scroll;
}

.scroll::-webkit-scrollbar{
    display: none;
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
    border-radius: 15px;

    -webkit-appearance: none;
    outline: none;
    overflow: hidden;
    box-shadow: inset 0 0 7px rgba(0, 0, 0, 1);
    background: #222;
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
 
img{
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.social{
    display: none;
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

.sd, h2, .descripition{
    display:block;
}

.avatar{
    width: 100%;
    height: auto;
    margin-top: 40px;
    background: transparent ;
    position: static ;

    display: flex;
    flex-direction: column;
}

.social{
    display: block;
    font-size: 40px;
    padding: 50px;
    color: var(--primary);
    
    i{
        margin: 10px;
    }

    a{
    /* text-decoration: none; */
    color: var(--primary);
    }
}

.scroll{
    width: 100%;
    height: auto;
    margin-top: 30px;
    text-align: center;
    background: var(--third);
    padding: 30px 0px;

    overflow: scroll;
    
}

.range{
    width: 300px;
}

h2{
    margin: 10px 0;
}
    
}

`