import { TypeAnimation } from "react-type-animation";
import { HomeStyle } from "./style";


export function Home(){
    const a = <p>daniel</p>
  
    return(
        <HomeStyle>
            <div className="apphome" >
            
                <p className="multipleStrings"></p>
            <h1>Bem vindo!</h1>
            <h2>Meu nome e Daniel <br />
            </h2>

                
            <TypeAnimation
            
                sequence={[`sou desenvolvedor`, 1000,
                'sou desenvolvedor FULL STACK',2000]}
                speed={10} 
                deletionSpeed={10}
                wrapper="h2"
                repeat={Infinity}
                />
                
            </div>
            
        </HomeStyle>
    )
}