import './App.css';
import React from "react";
import profile from "./Images/foto_perfil.jpg";
import BotonesUrl from './Components/Contact';
import {makeStyles} from "@material-ui/core"
import Navbar from './Components/Navbar';
import Certifications from './Components/Certifications';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Contact from './Components/Contact';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar/>
      <About title= "About Me" id= "about" dark={true}/>
      <Experience title= "Experience" id= "experience" dark={false}/>
      <Skills title= "Skills" id= "sjills" dark={true}/>
      <Certifications title= "Certifications" id="certifications" dark={false}/>
      <Contact title= "Contact" id= "contact" dark={true}/>
      <header className="App-header">
        <div className= "App-Photo">
          <img className='my-photo' src = {profile} alt= "Me" />
        </div>
        <div>
          <h1>Marleen Muñoz Sala</h1>
          <h4>Developer Jr.</h4>
        </div>
      </header>
      <div className='Contact'>
          <h3>Contact</h3>
          <BotonesUrl/>
        </div>
      <hr size="2px" width="80%" noshade="noshade" align="center" color="white" />

      <div className='Content'>
        

      </div>
      
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root:{

  }
}))

export default App;
