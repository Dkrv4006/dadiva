
import { MainLeft } from "../MainLeft";
import { MainCenter } from "../MainCenter";
import { LayoutStyle } from "./style";
import { MainRight } from "../MainRight";

export function Layout(){
   

    return(
      <div className="app">

        <LayoutStyle>
          <main>
            <div className="app-root">
              <MainLeft/>
              <MainCenter/>
              <MainRight/>
            </div>
          </main>
    
       
        </LayoutStyle>
      
      </div>
    )

    
}