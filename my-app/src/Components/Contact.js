import React, {useState} from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import {Button, Card, CardContent, makeStyles, Typography} from "@material-ui/core"
import CardActions from "@material-ui/core/CardActions/CardActions";
import { withStyles } from "@material-ui/core/styles";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

function Contact({title, dark, id}){
    const [link, setLink] = useState(" ");
    const classes = useStyles();
    return(
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <br/>
                <Typography variant= "h3">{title}</Typography>
                <Card className={classes.card}>
                  <CardContent className={classes.CardContent}>
                    <WhiteTextTypography variant="h5" gutterBottom align="center">
                      Form for contact
                    </WhiteTextTypography>
                    <div className={classes.formDiv}>
                    <form className={classes.form} nonvalidate autoComplete="off">
                      <div className={classes.row}>
                        <div class={classes.col25}>
                          <label class={classes.label}>Your name</label> <br/>
                        </div>
                        <div class={classes.col75}>
                          <input class={classes.input} id="fname" name="name" placeholder="Name..."></input>
                        </div>
                      </div>
                        <div className={classes.row}>
                        <div class={classes.col25}>
                          <label class={classes.label}>Your e-mail</label> <br/>
                        </div>
                        <div class={classes.col75}>
                          <input class={classes.input}  id="fmail" name="mail" placeholder="E-mail..."></input>
                        </div>
                      </div>
                    <div className={classes.row}>
                      <div class={classes.col25}>
                        <label class={classes.label}>Write a message</label> <br/>
                      </div>
                      <div class={classes.col75}>
                        <textarea class={classes.textArea} id="subject" name="subject" placeholder="Write your message.." ></textarea>
                      </div>
                    </div>
                    <br/>
                    <div className={classes.row}>
                      <input className={classes.sButton} type="submit" value="Submit"/>
                    </div>
                    </form>
                    </div>
                  </CardContent>
                    <br/><br/>

                  <CardContent className={classes.CardContent}>
                    <WhiteTextTypography variant="h5" gutterBottom align="center">
                      Other ways to contact me
                    </WhiteTextTypography>
                    <br/>
                    <CardActions>
                    <div className={classes.CardContent}>
                    <Button
                        className={classes.cvButton}
                        onClick={() => setLink("https://www.linkedin.com/in/marleen-munoz-sala/")}
                      ><LinkedInIcon /> LinkedIn</Button> <br/>
                    <Button
                        className={classes.cvButton}
                        type="button"
                        onClick={() => setLink("marleen.ms99@gmail.com")}
                      ><EmailIcon /> Correo</Button> <br/>
                    <Button
                        className={classes.cvButton}
                        type="button"
                        onClick={() => setLink("https://github.com/MarleenMs")}
                      ><GitHubIcon/> Github</Button>
                      </div>
                    </CardActions>

            <p>
                <a
                    className="App-link"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer">  {link}
                </a> 
            </p>
            </CardContent>
          </Card>
        </div>
        <br/>    
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
  },
  card:{
    [theme.breakpoints.down("sm")]:{
      height: "80vh",
      margin: theme.spacing(2,3,0,-10),
      display: "block",
    },
    textAlign: "center",
    height: "70vh",
    display: "flex",
    margin: theme.spacing(2,13,0,0),
    backgroundColor: "#292673",
    
  },
  CardContent:{
    textAlign: "center",
    margin: "auto",
  },
  formDiv:{
    boxSizing: "border-box",
    borderRadius: "5px",
    backgroundColor: "#f0f1f6",
    padding: "20px",
    width: "400px",
    color: "#292673",
    fontWeight: "bold",
  },
  label: {
    width: "100%",
    paddingRight: "70px",
    marginRight: "100px",
    display: "inline-block",
    color: "#292673",
  },
  textArea: {
    height: "80px",
    color: "#333",
    padding: "5px 20px",
    border: "2px solid #d3d5e3",
    borderRadius: "4px",
    cursor: "pointer",
    float: "right",
  },
  col25: {
    float: "left",
    width: "25%",
    marginTop: "10px",
  },
  col75: {
    float: "left",
    width: "75%",
    marginTop: "10px",
  },
  /* Clear floats after the columns */
  row: {
    content: "",
    display: "table",
    clear: "both",
  },
  input: {
    color: "#333",
    padding: "5px 20px",
    border: "2px solid #d3d5e3",
    borderRadius: "4px",
    cursor: "pointer",
    float: "right",
},
  cardMedia:{
    borderRadius: "10px",
    border: "80px", 
    objectFit: "cover",
  },
  cvButton:{
    //margin: "auto",
    textAlign: "center",
    width: "150px",
    color: "#292673",
    backgroundColor: "#f0f1f6",
    borderRadius: "6px",
    fontSize: "13px",
    border: "2px solid #d3d5e3",
    cursor: "pointer",
    transitionDuration: "0.4s",
    display: "flex",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#d0c3e1",
      color: "white",
    },
    "& a": {
      color: "#a186c3",
      textDecoration: "none",
    },
    "& a:hover": {
      color: "white",

    },
  },
  sButton:{
    marginLeft: "230px",
    width: "100px",
    height: "25px",
    textAlign: "center",
    color: "white",
    backgroundColor: "#a186c3", 
    borderRadius: "6px",
    fontSize: "15px",
    border: "3px solid #d3d5e3",
    cursor: "pointer",
    transitionDuration: "0.4s",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#f0f1f6",
      color: "#292673",
      textDecoration: "underline",
    },
    "& a": {
      color: "#a186c3",
    },
    "& a:hover": {
      color: "#292673",
    },
  },
}))


export default Contact
