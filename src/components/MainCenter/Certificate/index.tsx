
import { CertificateStyle } from './style'

export const Certificate = () => {
  return (
    <CertificateStyle>
        <div className="left">
          <h1>Certificado</h1>

          <div className='frome'>
          
          <h4><i className="fa fa-certificate"></i> Curso de JavaScript Completo</h4>
          <h4><i className="fa fa-certificate"></i> Formação Node.js</h4>
          <h4><i className="fa fa-certificate"></i> Fabrica de Aplicativos - React.js</h4>

          </div>
        </div>
        <div className="icon">  
        <i className="fa-solid fa-check"></i>
  </div>
    </CertificateStyle>
  )
}
