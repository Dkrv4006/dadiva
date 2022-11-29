
import { Heade } from "../Header";
import { Front } from "../Front";
import { Main } from "../Main";
import { MainInfor } from "../MainInfor";
import { LayoutStyle } from "./style";

export function Layout(){
   

    return(
      <LayoutStyle>
        <Heade/>
        <MainInfor/>
        <Main/>
        <Front/>
      </LayoutStyle>
    
    )

    
}