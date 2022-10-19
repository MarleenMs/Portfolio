import React from 'react'
import {Card, CardContent, makeStyles, Typography} from "@material-ui/core"
import Jobs from "./Jobs.js"

const Experience = ({title, dark, id}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
        <div className={classes.sectioncontent} id={id}>
            <br/>
            <Typography variant= "h3">{title}</Typography>
            <Card className={classes.card}>
                <CardContent className={classes.CardContent}>
                  <Jobs/>
                </CardContent>
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
    margin: theme.spacing(2,13,0,0),
    backgroundColor: "#292673",
  },
}))

export default Experience
