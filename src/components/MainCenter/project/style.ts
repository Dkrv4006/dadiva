import styled from "styled-components";


export const ProjectStyle = styled.div`
    width: 100%;
    height: auto;
    margin-top: 30px;
    position: relative;
    background: var(--secondary);

    display: flex;
    flex-direction: column;
    text-align: center;

    .project{
        width: 33%;
        height: 200px;
        margin: 10px;
        background:var(--third);
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