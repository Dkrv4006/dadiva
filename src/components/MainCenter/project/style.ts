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
        width: 33%;
        height: 200px;
        margin: 10px;
        background:var(--third);
        justify-content: center;
        align-items: center;
    }
    .projectMain{
        display: flex;
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
    

`