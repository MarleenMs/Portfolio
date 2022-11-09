import React, {useState} from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import {Button, Card, CardContent, makeStyles, TextField, Typography} from "@material-ui/core"
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
                    <div className={classes.formDiv}>
                    <form className={classes.form} nonvalidate autoComplete="off">
                      <TextField label="Your name"/> <br/>
                      <TextField label="Your e-mail"/> <br/>
                      <TextField label="Write a message"/> <br/>
                    </form>
                    </div>

                    <br/><br/>

                    <WhiteTextTypography variant="h5" gutterBottom align="center">
                      Other ways to contact me
                    </WhiteTextTypography>
                    <CardActions>
                    <Button
                        className={classes.cvButton}
                        onClick={() => setLink("https://www.linkedin.com/in/marleen-munoz-sala/")}
                      ><LinkedInIcon /> LinkedIn</Button> 
                    <Button
                        className={classes.cvButton}
                        type="button"
                        onClick={() => setLink("marleen.ms99@gmail.com")}
                      ><EmailIcon /> Correo</Button>
                    <Button
                        className={classes.cvButton}
                        type="button"
                        onClick={() => setLink("https://github.com/MarleenMs")}
                      ><GitHubIcon/> Github</Button>  
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
    
  },
  cardMedia:{
    borderRadius: "10px",
    border: "80px", 
    objectFit: "cover",
  },
  cvButton:{
    //margin: "auto",
    textAlign: "center",
    //position: "fixed ",
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
}))


export default Contact
