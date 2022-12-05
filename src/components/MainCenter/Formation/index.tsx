
import { FormationStyle } from './style'

export const Formation = () => {
  return (
    <FormationStyle>
        <div className="left">
          <h1>Formações</h1>

          <div className='frome'>
          
          <h4><i className="fa fa-graduation-cap"></i> Análise e Desenvolvimento de Sistemas</h4>
          <h4><i className="fa fa-graduation-cap"></i> Cibersegurança</h4>

          </div>
        </div>
        <div className="icon">  
        <i className="fa-solid fa-spinner fa-spin-pulse"></i>
  </div>
    </FormationStyle>
  )
}
