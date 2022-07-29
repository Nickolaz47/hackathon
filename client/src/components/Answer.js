import { useState, useEffect } from "react";
import axios from 'axios';
// import Question from "./Question";

const Answer = () => {
    const api = 'http://localhost:8080/api'

    const [questionsDb,setQuestionsDb] = useState('') // preciso requisitar por um get e aparecer as perguntas a serem respondidas
    //    
    const [answer,setAnswer] = useState('')

    const questionsImported = async () => { // to aqui agora
      setQuestionsDb(await axios.get(`${api}/mentorships`));
    }

    useEffect(questionsImported, [])
    
    const listaPerguntas = ['pergunta1','pergunta2','pergunta3'] // depois substituir pelo array vindo do get

    const handleOnChange = (e) => {
        setAnswer(e.target.value);
    };

    // const typeText = () => {

    // }
    // falta fazer função que poste todas as respostas a uma pergunta a ela, no db

    // colocar sistema onde somente pessoas autenticadas possam responder

    return (
        <div className="container">
            <h1>Perguntas</h1>
            {/* <p>{questionsDb}</p> */}
            <ul type={'none'}>
            {listaPerguntas.map((pergunta) => ( // mapear lista de perguntas do get
            <>
                <li>{pergunta}</li>
                <br></br>
                <form onSubmit=''>
                    <label for={'answer'}>Resposta</label>
                    <br></br>
                    <input type={'text'} id={'answer'} value={answer} placeholder={'Digite aqui sua resposta'} onChange={handleOnChange}></input>
                    <br></br><br></br>
                    <input type={'submit'}></input>
                </form> 
                {/* caso não esteja logado (implementar a lógica), abrir um modal direcionando ao login/registro */}
                <p>----------------------------------------------------</p> 
            </>
            ))}
            </ul>
        </div> 
    )
}

export default Answer;