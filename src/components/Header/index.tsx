
import { Header } from "./style"

export function Heade(){
    return(
        <Header>
            <div className="logo"><span>DANIEL </span>dev</div>
            <div className="navegation">
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contate</li>
                    </ul>
                </nav>
            </div>
            <div className="social">
            <ul>
                <li>GitHunb</li>
                <li>Linkdin</li>
                <li>CodePen</li>
            </ul>
            </div>
        </Header>
    )
}