import { MainLeftStyle } from "./style";
import  avata  from "../../assets/avata.png"
import { TypeAnimation } from "react-type-animation";
import Description from "./Description";


export function MainLeft() {

    const experi = [
        {
            name: "Javascript",
            porcen: "80%",
            range: 80,
        },
        {
            name: "Typescript",
            porcen: "60%",
            range: 60,
        },
        {
            name: "React",
            porcen: "70%",
            range: 70,
        },
        {
            name: "Nodejs",
            porcen: "50%",
            range: 50,
        },
        {
            name: "Htmal",
            porcen: "90%",
            range: 90,
        },
        {
            name: "Css",
            porcen: "80%",
            range: 80,
        },
    ]

    return(
        <MainLeftStyle className="on">
            <div className="app-left">
                <div className="avatar flex" >
                    <div className="perfil"><img src={avata} alt="" /></div>
                        <h2>Daniel Kennedy</h2>

                    <div className="sd">
                        <TypeAnimation
                            sequence={[`sou desenvolvedor`, 1000,
                            'sou desenvolvedor FULL STACK',2000]}
                            speed={10} 
                            deletionSpeed={10}
                            wrapper="h3"
                            repeat={Infinity}
                        />
                    </div>
                    <div className="social">
                        <a href="https://github.com/Dkrv4006"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https:t.me/dkrv400619"><i className="fa fa-telegram"></i></a>
                        <a href="https://github.com/Dkrv4006"><i className="fa-brands fa-whatsapp"></i></a>
                        <a href="https://linkedin.com/in/daniel-kennedy-b1b386217"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/Dkrv4006"><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <Description/>
                <div className="scroll">
                    <div className="experience">
                        <h3>Experience</h3>
                            <div className="mainJavaScript">
                                {experi.map(({name,porcen,range},index) => {
                                   return(
                                        <div className="l-time">
                                            <div className="label">
                                                <label htmlFor="">{name}</label>
                                                <h3>{porcen}</h3>
                                            </div>
                                            <div className="center">
                                                <input className="range" type="range" value={range} />
                                            </div>
                                        </div>
                                   )
                                   })}                      
                            </div>                  
                    </div>
                </div>

            </div>
        </MainLeftStyle>
    )
}