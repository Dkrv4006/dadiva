import { MainLeftStyle } from "./style";
import  avata  from "../../assets/avata.png"
import { TypeAnimation } from "react-type-animation";
import Description from "./Description";


export function MainLeft() {
    return(
        <MainLeftStyle className="on">
            <div className="app-left">
                <div className="avatar" >
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
                        <div className="language">
                            <div className="mainJavaScript">
                                <div className="l-time">
                                    <div className="label">
                                        <label htmlFor="">Javascript</label>
                                        <h3>80%</h3>
                                    </div>
                                    <div className="center">
                                        <input className="range" type="range" value={80} />
                                    </div>
                                </div>
                                <div className="l-time">
                                    <div className="label">
                                        <label htmlFor="">Typescript</label>
                                        <h3>60%</h3>
                                    </div>
                                    <div className="center">
                                        <input className="range" type="range" value={60} />
                                    </div>
                                </div>
                                <div className="l-time">
                                    <div className="label">
                                        <label htmlFor="">React</label>
                                        <h3>70%</h3>
                                    </div>
                                    <div className="center">
                                        <input className="range" type="range" value={70} />
                                    </div>
                                </div>
                                <div className="l-time">
                                    <div className="label">
                                        <label htmlFor="">Nodejs</label>
                                        <h3>50%</h3>
                                    </div>
                                    <div className="center">
                                        <input className="range" type="range" value={50} />
                                    </div>
                                </div>
                                <div className="l-time">
                                    <div className="label">
                                        <label htmlFor="">Html</label>
                                        <h3>80%</h3>
                                    </div>
                                    <div className="center">
                                        <input className="range" type="range" value={80} />
                                    </div>
                                </div>
                                <div className="l-time">
                                    <div className="label">
                                        <label htmlFor="">Css</label>
                                        <h3>80%</h3>
                                    </div>
                                    <div className="center">
                                        <input className="range" type="range" value={80} />
                                    </div>
                                </div>
                                
                            
                            </div>
                          
                        </div>
                    </div>
                </div>

            </div>
        </MainLeftStyle>
    )
}