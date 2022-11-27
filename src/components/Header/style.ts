import styled from "styled-components";


export const Header = styled.div`

    width: 100%;
    height: 100px;
    max-width: 1400px;
    
    display: flex;
    justify-content: space-around;
    
    span{
        color: white;
        font-weight: 700;
    }
    .logo{
        margin-top: 2.5rem;
        color: #0DA1FF;
        font-weight: 400;
        
    }

    @media screen and (max-width: 680px) {
        .navegation, .social{
            display: none;
        }

    }
`;
