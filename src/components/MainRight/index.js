import { MainRightStyle } from "./style";
import { useState } from "react";

export function MainRight() {


  const [state, setState] = useState(false)

  const set = () => {
    setState(!state)
  }
  
  const Da = (props) => {
    return(

      <div className={props.name}id="ad">
        </div>
    )
  }

    return(
        <MainRightStyle >
          
            <button onClick={set} ><i className="fa-solid fa-bars-staggered"></i></button>
          {state && <><Da name="daniel"/>
          <button onClick={set} ><i className="fa-solid fa-bars-staggered"></i></button>
          </>
          }
        </MainRightStyle>
    )
}



