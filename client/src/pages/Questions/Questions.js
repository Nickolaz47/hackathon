import React from 'react'
import axios from 'axios';

const port = process.env.PORT;
const api = `http://localhost:${port}`

axios.get(api).then((res) => {
  console.log(res)
})


const Questions = () => {
  const listaPerguntas = ['pergunta1','pergunta2','pergunta3'] // depois substituir pelo array vindo do get

  return (
    <div className='container-fluid'>
      <h1>Questions</h1>
      <ul>
        {listaPerguntas.map((pergunta) => {
          <li>{pergunta}</li>
        })}
      </ul>
    </div>
  )
}

export default Questions