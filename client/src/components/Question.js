import { useState } from "react";

const Question = () => {
    const handleOnSubmit = () => {
        
    };
     // Usar a API pra fazer um post

    const [textQuestion,setTextQuestion] = useState(''); // pegar esse "textQuestion", passar para o bd, e exibi-lo no componente de answer
     

    const handleOnChange = (e) => {
        setTextQuestion(e.target.value);
    };

    // mandar para um hook personalizada 

    return (
        <>
        <div style={{display:'flex'}}>
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