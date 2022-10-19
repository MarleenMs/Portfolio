import React from 'react';
import {Grid, makeStyles, Typography} from "@material-ui/core";
import CardLanguages from "./CardLanguages.js";
import OtherSkills from "./OtherSkills.js";

const Skills = ({title, dark, id}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
        <div className={classes.sectioncontent} id={id}>
            <br/>
            <Typography variant= "h3">{title}</Typography>
            <Grid className={classes.gridc} container spacing={1}>
              <Grid item xs={8} sm={3} md={4}>
                  <CardLanguages/>
              </Grid>
              <Grid item xs={8} sm={3} md={4}>
                  <OtherSkills/>
              </Grid>
            </Grid>
            <br/>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  section:{
    minHeight: "100vh",
    maxHeight: "auto",
    color: "#292673",
  },
  sectiondark:{
    backgroundColor: "#292673",
    color: "#f1eedb",
    minHeight: "100vh",
    maxHeight: "auto",
  },
  sectioncontent: {
    maxWidht: "auto",
    marginLeft: "100px",
    "& h3": {
      margin: theme.spacing(0,0,0,6),
      fontSize: "2.1rem",
      alignContent: "center",
      justifyContent: "center"
    },
    
  },
  gridc: {
    [theme.breakpoints.down("sm")]:{
      height: "80vh",
      margin: theme.spacing(2,3,0,-10),
      display: "block",
    },
    height: "80vh",
    marginRight: theme.spacing(3),
    margin: "16px 16px 24px 2px",
    minWidth: "30px",
  },
    
}))

export default Skills

