import styled from "styled-components";

export const LigaStyle = styled.div`
    width: 100%;
    height: auto;
    margin-top: 50px;
    background: var(--secondary);
    display: flex;
    justify-content: space-between;

    .frontend{
        width: 31%;
        height: 250px;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;


        h1{
            font-size: 20px;
            color: white;
            margin-bottom: 14px;
        }

        background: var(--third);
    }

    .hvr-grow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
}
.hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    box-shadow: 0 0 11px var(--primary);
    border-radius: 10px;
    }


    
`