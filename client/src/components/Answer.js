import { useState, useEffect } from "react";
import axios from 'axios';
// import Question from "./Question";

const Answer = () => {
    const api = 'http://localhost:8080/api'

    const [questionsDb,setQuestionsDb] = useState('') // preciso requisitar por um get e aparecer as perguntas a serem respondidas
    //    

    const questionsImported = async () => {
      setQuestionsDb(await axios.get(`${api}/mentorships`));
    }

    useEffect(questionsImported, [])
    // passar por props depois o texto da questão para exibir em <p></p>
    
    const listaPerguntas = ['pergunta1','pergunta2','pergunta3'] // depois substituir pelo array vindo do get

    const handleOnChange = (e) => {
        setQuestionsDb(e.target.value);
    };

    // colocar sistema onde somente pessoas autenticadas possam responder

    return (
        <div className="container">
            <h1>Perguntas</h1>
            {/* <p>{questionsDb}</p> */}
            <ul type={'none'}>
            {listaPerguntas.map((pergunta) => (
            <>
                <li>{pergunta}</li>
                <br></br>
                <form>
                    <label for={'answer'}>Resposta</label>
                    <br></br>
                    <input type={'text'} id={'answer'} value={questionsDb} placeholder={'Digite aqui sua resposta'} onChange={handleOnChange}></input>
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