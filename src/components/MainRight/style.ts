import styled from "styled-components";


export const MainRightStyle = styled.div`
    
    grid-column: 3 /4;
    width: auto;
    height: calc(100vh - 30px);
    background:#252430;
    text-align: center;
    position: sticky;

    top: 15px;



.mainq{
    width: 100%;
    height: 100%;
    background: yellow;
}

.nav-bar{
    width: 30px;
    height: 20px;
    background: red;
    position: relative;
}

.nav-container{
    position: absolute;
    display: none;
    width: 100px;
    height: 100px;
    background: yellow;
    right: 0;
}

.nav-bar:focus  .nav-container{
    display: block;
}

    
i, button {
    margin: 15px;
    font-size: 30px;
    background: var(--third);
    color: white;
    border: none;
    transition: opacity  .3s;
    
    &:hover{
        opacity: 0.9;
    }
    
}

.socialleft{
    margin-top: 100px;
}

@media screen and (max-width:1000px) {
    display: none;
}
    
@media screen and (max-width: 480px) {
.scroll{
    display: none;
}
}
`