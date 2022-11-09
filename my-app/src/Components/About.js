import React from 'react'
import {Button, CardContent, makeStyles, Typography} from "@material-ui/core"
import profile from "../Images/foto_perfil.jpg";
import Card from "@material-ui/core/Card/Card";
import TypeWriterEffect from "react-typewriter-effect";
import CardActions from '@material-ui/core/CardActions/CardActions';
import CV from "../Images/Marleen_CV.pdf";

const About = ({title, dark, id}) => {
   const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
        <div className={classes.sectioncontent} id={id}>
            <br/>
            <Typography variant= "h3">{title}</Typography>
            <Card className={classes.card}>
                <img className={classes.cardMedia} src = {profile} alt= "Me" />
                <CardContent className={classes.CardContent}>
                  <TypeWriterEffect 
                    text= "Hi! I am Marleen Muñoz,"
                    textStyle={
                      {
                        fontSize: "2.3rem",
                        fontWeight: "700px",
                        color: "#a085c3",
                        textShadow: "2px 2px 10px rgb(148, 125, 135)",
                      }
                    }
                    startDelay={10}
                    typeSpeed={50}
                    cursorColor= "#898fb5"
                  />
                  <br/>
                  <TypeWriterEffect
                    text= "I'm a Jr. Developer"
                    textStyle={
                      {
                        fontSize: "1.6rem",
                        fontWeight: "700px",
                        color: "#333",
                      }
                    }
                    startDelay={2300}
                    typeSpeed={25}
                    cursorColor= "#898fb5"
                  />
                  <br/>
                  <div className={classes.cardtext}>
                  <TypeWriterEffect
                    text= "I graduate with extensive knowledge of programming in high-level languages. I seek to continue learning while I contribute to the development of the company."
                    textStyle={
                      {
                        fontSize: "1.3rem",
                        fontWeight: "700px",
                        color: "#333",
                      }
                    }
                    startDelay={3500}
                    typeSpeed={25}
                    cursorColor= "#898fb5"
                  />
                  </div>
                </CardContent>
  
                <CardActions>
                  <Button variant="contained" className={classes.cvButton}>
                    <a href= {CV} download> Download CV </a>
                  </Button>
                </CardActions>
            </Card>
        </div>
        
    </div>
  )
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
    height: "70vh",
    display: "flex",
    margin: theme.spacing(2,13,0,0)
  },
  CardContent:{
    margin: theme.spacing(2,2,0,2),
  },
  cardtext:{
    [theme.breakpoints.down("xs")]:{
      display: "none",
    },
  },
  cardMedia:{
    [theme.breakpoints.down("xs")]:{
      maxWidht: 300,
      maxHeight: 300,
      marginLeft: 40,
      marginRight: -20,
      marginTop: 10,
      width: "80%",
    },
    [theme.breakpoints.only("sm")]:{
      maxWidht: 450,
      maxHeight: 450,
      marginLeft: 150,
      marginRight: "auto",
      marginTop: 10,
      width: "60%",
    },
    border: "80px", 
    objectFit: "cover",
  },
  cvButton:{
    [theme.breakpoints.down("sm")]:{
      marginBottom: "-20px",
      right: "8.5rem",
    },
    position: "absolute",
    bottom: 90,
    right: 350,
    color: "#292673",
    backgroundColor: "#f0f1f6",
    borderRadius: "6px",
    fontSize: "13px",
    border: "2px solid #d3d5e3",
    cursor: "pointer",
    transitionDuration: "0.4s",
    display: "inline-block",
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
}
 
))

export default About

