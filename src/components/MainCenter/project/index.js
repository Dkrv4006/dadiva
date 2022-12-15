
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
      icon:"fa-solid fa-spinner fa-spin-pulse"
    },
    {
      name: "deshboard",
      imga: types,
      icon:"fa-solid fa-spinner fa-spin-pulse"
    },
    {
      name: "deshboard",
      imga: react,
      icon:"fa-solid fa-spinner fa-spin-pulse"
    },
    {
      name: "deshboard",
      imga: node,
      icon:"fa-solid fa-spinner fa-spin-pulse"
    },
    {
      name: "deshboard",
      imga: false,
      icon:"fa-solid fa-spinner fa-spin-pulse"
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
         {Project.map(({name,imga,icon},index) => {
          return(
         <div  className="project">{imga 
        ? ( <img src={imga} alt="ppopo"></img>) 
         : (<i className={icon}></i>)}
         </div>
          )
         })}
       </div>
    </ProjectStyle>
  )
}
