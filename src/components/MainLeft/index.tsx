import { MainLeftStyle } from "./style";
import  avata  from "../../assets/avata.png"
export function MainLeft() {
    return(
        <MainLeftStyle className="on">
            <div className="app-left">
                <div className="avatar" >
                    <div className="perfil"><img src={avata} alt="" /></div>
                </div>
                <div className="scroll">
                    <div className="experience">
                        <h2>Experience</h2>
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