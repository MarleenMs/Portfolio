import React from 'react';
import {TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent} from '@mui/lab';
import Timeline from '@mui/lab/Timeline';
import {makeStyles} from "@material-ui/core";
import {Paper, Typography } from '@mui/material';



const Jobs= () => {
  const classes = useStyles();
  const skills =[
    {
      start_date: "November 2022",
      end_date: "Present",
      title: "Systems engineering/ Developer Jr.",
      place: "Scotiabank",
      respnsabilities:[
        "Preparation of deliverables for each phase of the project",
        "Analyze, specify and program computer solutions",
        "Analyze and correct incidents with a view to restoring service as soon as possible",
        "Design solutions to problems in IT applications",
      ]
    },
    {
     start_date: "August 2021",
      end_date: "July 2022",
      title: "Intra Trainee",
      place: "Transplace Mexico", 
    }
  ]

  return (
    <Timeline position="alternate" >
      {
        skills.map(({start_date, end_date, title, place, respnsabilities}, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent color="white">
                <Typography variant="h7">
                  {start_date} - {end_date}
                </Typography>
            </TimelineOppositeContent>  
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent variant="h7" component="h6">
              <Paper elevation={6} className={classes.paper}>
                {title} <br/>
                {place} <br/>
              </Paper>
            </TimelineContent>
         </TimelineItem>
          
        ))
      }
    </Timeline>
  )
}

const useStyles = makeStyles((theme) => ({
  section:{
    minHeight: "100vh",
    color: "#292673",
  },
  paper: {
    weight: "150px",
    fontSize: "14px",
    height: "60px",
    textAlign: "left",
    
  },
  listItem:{
    fontSize:'12px',
  },
}))

export default Jobs