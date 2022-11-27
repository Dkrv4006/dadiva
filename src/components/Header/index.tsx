
import { Header } from "./style"

export function Heade(){
    return(
        <Header>
            <div className="logo"><span>DANIEL </span>dev</div>
            <div className="navegation">
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contate</a></li>
                    </ul>
                </nav>
            </div>
            <div className="social">
            <ul>
                <li><a href="#">GitHunb</a></li>
                <li><a href="#">Linkdin</a></li>
                <li><a href="#">CodePen</a></li>
            </ul>
            </div>
        </Header>
    )
}