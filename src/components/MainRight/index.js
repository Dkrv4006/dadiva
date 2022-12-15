import { MainRightStyle } from "./style";

export function MainRight() {

    const social = [
        {
            link:"https://linkedin.com/in/daniel-kennedy-b1b386217",
            icon:"fa-brands fa-linkedin"

        },
        {
            link:"https://github.com/Dkrv4006",
            icon:"fa-brands fa-github"

        },
        {
            link:"https://github.com/Dkrv4006",
            icon:"fa-brands fa-whatsapp"

        },
        {
            link:"https:t.me/dkrv400619",
            icon:"fa-brands fa-telegram"

        }

    ]

return(
    <MainRightStyle >
          
        <button ><i className="fa-solid fa-bars-staggered"></i></button>

        <div className="social socialleft">
            {social.map(({link,icon},index) => {
            return(
                <a href={link}><i className={icon}></i></a>
                )
            })}
        </div>
    </MainRightStyle>
    )
}



