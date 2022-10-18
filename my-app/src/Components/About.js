import React from 'react'
import {makeStyles, Typography} from "@material-ui/core"
import profile from "../Images/foto_perfil.jpg";

const About = ({title, dark, id}) => {
   const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
        <div className={classes.sectioncontent} id={id}>
            <Typography variant= "h3">{title}</Typography>
        </div>
        <div className= "App-Photo">
          <img className='my-photo' src = {profile} alt= "Me" />
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  section:{
    minHeight: "100vh",
  },
  sectiondark:{
    background: "#333",
    color: "#FFF"
  },
  sectioncontent: {
    maxWidht: "80vx",
    marginLeft: "100px",
  }
}))

export default About

