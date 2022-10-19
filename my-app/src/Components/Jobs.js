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
      responsabilities: [
          "Preparation of deliverables for each phase of the project",
          "Analyze, specify and program computer solutions",
          "Analyze and correct incidents with a view to restoring service as soon as possible",
          "Design solutions to problems in IT applications",
      ]
    },
    
  ]
  return (
    <Timeline position="alternate" >
      {
        skills.map(({year, title}, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent color="text.secondary">
                <Typography variant="h6">
                  {year}
                </Typography>
            </TimelineOppositeContent>  
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent variant="h7" component="h6">
              <Paper elevation={6} className={classes.paper}>{title}</Paper>
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
    padding: "1px 20px",
  },
}))

export default Jobs