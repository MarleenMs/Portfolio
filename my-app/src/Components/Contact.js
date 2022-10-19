import React, {useState} from "react";
import {FaLinkedin,FaGithub, FaRegEnvelope } from 'react-icons/fa';
import {makeStyles, Typography} from "@material-ui/core"

function BotonesUrl({title, dark, id}){
    const [link, setLink] = useState(" ");
    const classes = useStyles();
    return(
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant= "h3">{title}</Typography>
            </div>
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
    color: "#292673",
  },
  sectiondark:{
    backgroundColor: "#292673",
    color: "#f1eedb",
  },
  sectioncontent: {
    maxWidht: "80vx",
    marginLeft: "100px",
    "& h3": {
      margin: theme.spacing(0,0,0,6),
      fontSize: "2.1rem",
    },
  }
}))


export default BotonesUrl
