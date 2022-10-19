import React from 'react'
import {makeStyles, Typography} from "@material-ui/core"

const Certifications = ({title, dark, id}) => {
    const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
       <div className={classes.sectioncontent} id={id}>
            <Typography variant= "h3">{title}</Typography>
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
  }
}))


export default Certifications