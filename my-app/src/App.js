import './App.css';
import React from "react";
import profile from "./Images/foto_perfil.jpg";
import BotonesUrl from './Components/Links';

//jsx
//clases y funciones 
//clases componentes vs clases de funcion 
//use -> hook
//dom html
//spread operator

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className= "App-Photo">
          <img src = {profile} alt= "Me"/>
        </div>
        <div>
          <h1>Marleen Muñoz</h1>
          <h4>Mathematics Applied and Computer Science student</h4>
        </div>
      </header>
      <hr size="2px" width="80%" noshade="noshade" align="center" />
      
      <div className='Content'>
        <h2>Press a button to get the link</h2>
        <BotonesUrl/>
      </div>
    </div>
  );
}

export default App;
