import React from 'react'
import axios from 'axios';

const port = process.env.PORT;
const api = `http://localhost:${port}`

axios.get(api).then((res) => {
  let arrayQuestions = res.data;
  return arrayQuestions;
})


const Questions = () => {
  const listaPerguntas = ['pergunta1','pergunta2','pergunta3'] // depois substituir pelo array vindo do get

  return (
    <div className='container-fluid'>
      <h1>Questions</h1>
      <ul type={'none'}>
        {listaPerguntas.map((pergunta) => (
          <>
            <li>{pergunta}</li>
            <br></br>
            <button>Responder!</button> 
            {/*caso não esteja logado (implementar a lógica), abrir um modal direcionando ao login/registro*/}
            <p>----------------------------------------------------</p> 
          </>
        ))}
      </ul>
    </div>
  )
}

export default Questions