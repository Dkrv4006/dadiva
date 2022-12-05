import { MainLeftStyle } from "./style";


export function MainLeft() {
    return(
        <MainLeftStyle className="on">
            <div className="app-root">
                <div className="avatar" >
                    <div className="perfil"></div>
                </div>
                <div className="scroll">
                    <div className="experience">
                        <h2>Experience</h2>
                        <div className="language">
                            <div className="mainJavaScript">
                                <div className="html">
                                <h3>JavaScript</h3> 
                                <h3>80%</h3>
                                </div>
                            <div className="pocenteJavaScript"></div>
                            </div>
                            <div className="mainNodejs">
                                <div className="html">
                                <h3>ReactJs</h3> 
                                <h3>50%</h3>
                                </div>
                            <div className="pocenteReactjs"></div>
                            </div>
                            <div className="mainNodejs">
                                <div className="html">
                                <h3>NodeJs</h3> 
                                <h3>50%</h3>
                                </div>
                            <div className="pocenteNodejs"></div>
                            </div>
                            <div className="mainHtmal">
                                <div className="html">
                                <h3>HTML</h3> 
                                <h3>80%</h3>
                                </div>
                            <div className="pocenteHtmal"></div>
                            </div>
                            <div className="mainCss">
                                <div className="html">
                                <h3>CSS</h3> 
                                <h3>75%</h3>
                                </div>
                            <div className="pocenteCss"></div>
                            </div>
                            <div className="mainMysql">
                                <div className="html">
                                <h3>Mysql</h3> 
                                <h3>30%</h3>
                                </div>
                            <div className="pocenteMysql"></div>
                            </div>
                            <div className="H">23</div>
                            <div className="HTML"></div>
                            <div className="HTML"></div>
                        </div>
                    </div>
                </div>

            </div>
        </MainLeftStyle>
    )
}