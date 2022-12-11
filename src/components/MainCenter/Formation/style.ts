import styled from "styled-components";


export const FormationStyle = styled.div`
    width: 100%;
    height: auto;
    margin-top: 70px;
    position: relative;

    &::before{
        content: "";
        position: absolute;
        
        height: 120%;
        width: 5px;
        top: 0;
        left: calc(50% - 2px);
        background: var(--primary);
    }

.left{
    width: 45%;
    height: 100%;
    padding: 20px;
    margin-top: 50px;
    border-radius: 20px;

    display: flex;
    align-items:center;
    flex-direction: column;

    border: var(--primary) 3px solid;
    position: relative;

        /* &::before{
            content: "";
            position: absolute;
            width:24px;
            height: 0px;

            top: -3px;
            right: -8px;
            border-top:var(--primary) 3px solid ;
            border-right:var(--primary) 3px solid ;
            background: var(--secondary);
            transform: rotate(-90deg);
            transform: skewX(-25deg);
        } */
 }
.icon{
    position: absolute;

    width: 22px;
    height: 22px;
    top: -10px;
    left: calc(50% - 10px);

    border-radius: 50%;
    text-align: center;
    padding: 3px;
    color: white;
    background: var(--primary);
}


.frome{
    text-align: center;
    margin-top: 15px;
    color: #fff;
}

h4{
    margin-bottom: 20px;
}

h1{
    color: #fff;
}

@media screen and (max-width: 850px) {
    

    &::before{
    content: "";
    position: absolute;
    
    height: 120%;
    width: 5px;
    top: 0;
    left: 9px;
    background: var(--primary);
}


.left{
    width: 85%;
    height: 100%;
    padding: 20px;
    margin-top: 50px;
    margin-left: 40px;
    border-radius: 20px;

    display: flex;
    align-items:center;
    flex-direction: column;

    border: var(--primary) 3px solid;
    position: relative;

        &::before{
            content: none;    
        }

        &::after{
            content: "";
            position: absolute;
            width:24px;
            height: 20px;

            top: -3px;
            left: -8px;
            border-top:var(--primary) 3px solid ;
            border-left:var(--primary) 3px solid ;
            background: var(--secondary);
            transform: rotate(10deg);
            transform: skewX(25deg);
        }

    
}

.icon{
    position: absolute;
    top: -10px;
    left: 0px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    text-align: center;
    padding: 3px;
    /* background: var(--primary); */
    color: white;
}
        


}


`