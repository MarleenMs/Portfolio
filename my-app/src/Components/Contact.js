import React, {useState} from "react";
import {FaLinkedin,FaGithub, FaRegEnvelope } from 'react-icons/fa';
import {makeStyles} from "@material-ui/core"

function BotonesUrl({title, dark, id}){
    const [link, setLink] = useState(" ");
    const classes = useStyles();
    return(
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            Contact
            <br/>
            <button
                className="App-button"
                type="button"
                onClick={() => setLink("https://www.linkedin.com/in/marleen-munoz-sala/")}
              ><FaLinkedin/> LinkedIn</button>
        
            <button
                className="App-button"
                type="button"
                onClick={() => setLink("https://github.com/MarleenMs")}
              ><FaGithub/> Github</button>  

            <button
                className="App-button"
                type="button"
                onClick={() => setLink("marleen.ms99@gmail.com")}
              ><FaRegEnvelope/> Correo</button>    
            <br/><br/>
            <p>
                <a
                    className="App-link"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {link}
                </a> 
            </p>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
  section:{
    minHeight: "100vh",
  },
  sectiondark:{
    background: "#333",
    color: "#FFF"
  }
}))


export default BotonesUrl
