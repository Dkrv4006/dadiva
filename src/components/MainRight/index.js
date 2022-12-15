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
          {/* {state && <><Da name="daniel"/>
          <button onClick={set} ><i className="fa-solid fa-bars-staggered"></i></button>
          </>
          } */}

          <div className="social socialleft">

            {social.map(({link,icon},index) => {
                   return( 
                    <>
                    <a href={link}><i className={icon}></i></a>
                    {/* <a href="https:t.me/dkrv400619"><i className="fa fa-telegram"></i></a>
                    <a href="https://github.com/Dkrv4006">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href="https://linkedin.com/in/daniel-kennedy-b1b386217">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Dkrv4006">
                        <i className="fa-brands fa-github"></i>
                    </a> */}
                    </>
             );
             })}
          </div>
        </MainRightStyle>
    )
}



