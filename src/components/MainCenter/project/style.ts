import styled from "styled-components";


export const ProjectStyle = styled.div`
    width: 100%;
    height: auto;
    margin-top: 30px;
    position: relative;
    background: var(--secondary);
    text-align: center;

.project{
    display: flex;
    width: 30%;
    height: 200px;
    background:var(--third);
    justify-content: center;
    align-items: center;  
}

.projectMain{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

h1{
    width: 100%;
    color: var(--primary);
}

i{
    font-size: 50px;
    text-align: justify;
    color: #fff;
}

.iconpro{
    display: none;
}

@media screen and (max-width: 850px) {

    width: 100%;

    display: flex;
    flex-direction: column;
    margin-top: 70px;
    
        &::before{
        content: "";
        position: absolute;
        
        height: 100%;
        width: 5px;
        top: 0;
        left: 9px;
        background: var(--primary);
        }

.projectMain{
    /* width: 90vw; */
    display: flex;
    justify-content: center;
}

.project{
    width: 75%;
    position: relative;
    margin-top: 20px;

        &::before{
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;

        top: 40%;
        left: -16%;
        background: var(--primary);
        transform: rotate(44deg);
        }
}

.iconpro{
    display: block;
    position: absolute;
    top: -10px;
    left: -9px;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    padding: 6px;
    background: var(--primary);

    i{
        font-size:25px
    }
  }
}      

    

`