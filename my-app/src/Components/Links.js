import React, {useState} from "react";
import { FaGithub } from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';

export default function BotonesUrl(props){
    const [link, setLink] = useState(" ");
    return(
        <>
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
        </>
    );
}
