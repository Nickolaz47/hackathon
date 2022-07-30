import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const Mentorships = () => {
  const api = 'http://localhost:8080/api';

  const listaMentorias = ['mentoria1','mentoria2','mentoria3']

  const [mentorshipsDb,setMentorshipsDb] = useState('');

  axios.get(`${api}/mentorships`).then((res) => { // quem estiver autenticado, fazer tal requisição
    setMentorshipsDb(res.data);
  }).catch((error) => {
    console.log(error)
  });

  return (
    <div className='container'>
      <h1>Mentorships</h1>
      <ul>
        {listaMentorias.map((mentorship) => ( // depois substituir no map pelo array gerado pela requisição get
          <>
            <li type='none'>{mentorship}</li>
            <br></br>
            <button>Participar</button>
            <p>-----------------------------</p>
          </>
        ))}
      </ul>
    </div>
  )
}

export default Mentorships