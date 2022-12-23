
import { ProjectStyle } from './style'
import  react  from "../../../assets/reactjs.svg"
import  node  from "../../../assets/nodejs.svg"
import  types  from "../../../assets/typescript.svg"
import  javascript  from "../../../assets/javascript.svg"



export const Project = () => {

  const Project = [
    {
      name: "deshboard",
      imga: javascript,
      icon:"fa-solid fa-spinner fa-spin-pulse",
      link: " https://dkrv4006.github.io/Cronometro/"
    },
    {
      name: "deshboard",
      imga: types,
      icon:"fa-solid fa-spinner fa-spin-pulse",
      link: "https://dkrv4006.github.io/Gerador/"
    },
    {
      name: "deshboard",
      imga: react,
      icon:"fa-solid fa-spinner fa-spin-pulse",
      link: "https://dkrv4006.github.io/financiamento_de_veiculo/"
    },
    {
      name: "deshboard",
      imga: node,
      icon:"fa-solid fa-spinner fa-spin-pulse",
      link: "https://dkrv4006.github.io/lista-tarefa/"
    },
    {
      name: "deshboard",
      imga: false,
      icon:"fa-solid fa-spinner fa-spin-pulse",
      link: "https://dkrv4006.github.io/Projeto_html/"
    },
    {
      name: "deshboard",
      imga: false,
      icon:"fa-solid fa-spinner fa-spin-pulse"
    },
  ]
  return (
    <ProjectStyle>
       <h1>Projetos</h1>
         <div className="projectMain">
         <div className="iconpro"><i className="fa-solid fa-briefcase"></i></div>
         {Project.map(({link,name,imga,icon},index) => {
          return(
         <a href={link} className="project">{imga 
        ? ( <img src={imga} alt="ppopo"></img>) 
         : (<i className={icon}></i>)}
         </a>
          )
         })}
       </div>
    </ProjectStyle>
  )
}
