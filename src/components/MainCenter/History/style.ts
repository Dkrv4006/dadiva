import styled from "styled-components";

export const HistoryStyle = styled.div`
    width: 100%;
    height: auto;
    margin-top: 20px;
   
    background: var(--secondary);
    display: flex;
    flex-direction: column;

    align-items: center;
    
    .app-history{
       width: 60%;
       height: 100%;
      
       border-radius: 30px;
       border: var(--primary) 3px solid;
       background: var(--secondary);
       display: flex;
       flex-direction: column;
   
       align-items: center;

   }

    .frontend, .backend{
        width: 90%;
        height: auto;
        padding: 15px;
        text-align: center;

    


        h1{
            font-size:30px;
            color: white;
            margin-bottom: 20px;
        }
        p{
            color: #fff;

        }

        /* background: var(--third); */
    }


    
`