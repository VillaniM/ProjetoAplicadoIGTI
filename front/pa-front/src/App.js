import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Form from './components/form/Form'
import Confirm from './components/form/Confirm'
import RequestControl from './components/manager/RequestControl';

function CreatePost(formReq){

  const history = useNavigate

  fetch('http://localhost:8080/request', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formReq),
   })
      .then((resp) => resp.json())
      .then((data) =>{
          const result = JSON.parse('');
          console.log(result);
          history('/confirm', {message: 'Enviado com sucesso!'})

      })
      .catch(err => console.log(err))
}


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/confirm' element={<Confirm />} />
        <Route exact path='/' element={<Form handleSubmit={CreatePost}/>} />
        <Route exact path='/request' element={<RequestControl />} />
      </Routes>
    </Router>
    //<Form handleSubmit={CreatePost}/>
  );
}

export default App;
