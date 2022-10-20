import './App.css';
import React from "react";
import {makeStyles} from "@material-ui/core"
import Navbar from './Components/Navbar';
//import Certifications from './Components/Certifications';
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
      <Skills title= "Skills" id= "skills" dark={true}/>
      <Contact title= "Contact" id= "contact" dark={false}/>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root:{

  }
}))

export default App;
