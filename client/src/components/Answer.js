import { useState } from "react";
import Question from "./Question";

const Answer = ({textQuestion}) => {
    const [textAnswer,setTextAnswer] = useState('');
    // passar por props depois o texto da questão para exibir em <p></p>

    const handleOnChange = (e) => {
        setTextAnswer(e.target.value);
    };

    return (
        <div>
            <p>Texto da pergunta </p>
            <form>
                <label for={'answer'}>Resposta</label>
                <br></br>
                <input type={'text'} id={'answer'} value={textAnswer} placeholder={'Digite aqui sua resposta'} onChange={handleOnChange}></input>
                <br></br><br></br>
                <input type={'submit'}></input>
            </form>
        </div>
    )
}

export default Answer;