import { Container } from "./style"

export default function Description() {
  return (
    <Container>
      <div className="descripition">
        <div className="age">
          <h3><span>Idade:</span> 23 anos</h3>
        </div>
        <hr />
        <div className="job">
          <h3><span>Trabalho:</span> Auxiliar Administrativo</h3>
        </div>
        <hr />
        <div className="phone">
          <h3><span>Telefone:</span> +55 (93) 992145145</h3>
        </div>
        <hr />
        <div className="email">
          <h3><span>Email:</span> dkrv4006@gmaol.com</h3>
        </div>
        <div className="me">
          <h2>Apaixonado por programação</h2>
          <p>Já estudo programação a mais de 2 anos
              voltado para desenvolvimento WEB,
              sempre fui um apaixonado por tecnologia
              gosto dos desafios e soluções de problema
              nunca trabalhei profissionalmente na área
              mais já desenvolvi alguns projetos</p>
        </div>
      </div>
    </Container>
  )
}
