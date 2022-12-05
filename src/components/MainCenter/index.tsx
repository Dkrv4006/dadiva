
import { Home } from "./Home";
import { Infor } from "./Infor";
import { Liga } from "./liga";
import { MainCenterStyle } from "./style";


export function MainCenter() {
    return(
        <MainCenterStyle>
            <Home/>
            <Infor/>
            <Liga/>
        </MainCenterStyle>
          
       
    )
}