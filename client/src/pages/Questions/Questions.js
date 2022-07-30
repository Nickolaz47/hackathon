import React from 'react'
import axios from 'axios';
import Answer from '../../components/Answer';
import { useState, useEffect} from 'react'

// const port = process.env.PORT;
const api = 'http://localhost:8080/api'

axios.get(api).then((res) => {
  let arrayQuestions = res;
  console.log(arrayQuestions);
});

// Página de questões já feitas, onde se pode respondê-las

const Questions = () => {
  const [questionsDb,setQuestionsDb] = useState('')

  const questionsImported = async () => {
      setQuestionsDb(await axios.get(`${api}/mentorships`));
  }

  return (
    <Answer />
  )
}

export default Questions