
import { Home } from "./Home";
import { Formation } from "./Formation/index";
import { Liga } from "./liga";
import { MainCenterStyle } from "./style";
import { Certificate } from "./Certificate";


export function MainCenter() {
    return(
        <MainCenterStyle>
            <Home/>
            <Formation/>
            <Certificate/>
            <Liga/>
        </MainCenterStyle>
          
       
    )
}