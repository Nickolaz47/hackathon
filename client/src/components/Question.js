import { useState, useEffect } from "react";
import axios from 'axios';


// página para fazer perguntas
const Question = () => {
    const api = 'http://localhost:8080/api' // aqui será para postar a pergunta

    const handleOnSubmit = () => {
        axios.post(`${api}/questions`,textQuestion)
    };

    const [textQuestion,setTextQuestion] = useState(''); // pegar esse "textQuestion", passar para o bd, e exibi-lo no componente de answer
     
    const handleOnChange = (e) => {
        setTextQuestion(e.target.value);
    };

    // mandar para uma hook personalizada 

    return (
        <>
        <div className="container">
            <div>
                <form onSubmit={handleOnSubmit}>
                    <label for={'question'}>Faça sua pergunta</label><br></br>
                    <input type={'text'}  id={'question'} onChange={handleOnChange} placeholder={'Digite sua pergunta'} value={textQuestion}></input>
                    <br></br><br></br>
                    <input type={'submit'}></input>
                </form>
            </div>
            <br></br>
        </div>
        <h1>{textQuestion}</h1>
        </>
    )
};

export default Question;