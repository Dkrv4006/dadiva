
import { Home } from "./Home";
import { Formation } from "./Formation/index";
import { Liga } from "./liga";
import { MainCenterStyle } from "./style";
import { Certificate } from "./Certificate";
import { Project } from "./project";
import { History } from "./History";


export function MainCenter() {
    return(
        <MainCenterStyle>
            <Home/>
            <Formation/>
            <Certificate/>
            <History/>
            <Liga/>
            <Project/>
        </MainCenterStyle>
          
       
    )
}