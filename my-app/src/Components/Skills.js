import React from 'react'
import {Card, CardContent, Collapse, makeStyles, Typography} from "@material-ui/core"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import C_prog from "../Images/c-programming.png";
import { List, ListItemButton, ListItemIcon, ListItemText, ListItemAvatar } from '@mui/material';

const Skills = ({title, dark, id}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
        <div className={classes.sectioncontent} id={id}>
            <br/>
            <Typography variant= "h3">{title}</Typography>
            <Card className={classes.card} >
                <CardContent className={classes.CardContent}>               
                    <Typography component="h5" variant="h5" color="primary" gutterBottom>
                    Programming Languages
                    </Typography>
                    <List>

                      <ListItemButton onClick={handleClick}>
                          <ListItemAvatar>
                            <img className={classes.images} alt="C programming" src={C_prog}/>
                         </ListItemAvatar>
                          <ListItemText primary="C" /> {open ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="3 years of experience" />
                            </ListItemButton>

                        </List>
                      </Collapse>
                    </List>
                </CardContent>
            
                <CardContent className={classes.CardContent}>
                <Typography component="h5" variant="h5" color="primary" gutterBottom>
                    Other Skills
                </Typography>    
                  <Typography fontSize="50px" color="#333" >
                    <List>
                      <ListItemButton>
                        <ListItemIcon> <FiberManualRecordIcon fontSize='xs'/> </ListItemIcon>
                        <ListItemText primary="Linux / Windows " />
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon> <FiberManualRecordIcon fontSize='xs'/></ListItemIcon>
                        <ListItemText primary="Microsoft Office Package" />
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon><FiberManualRecordIcon fontSize='xs'/></ListItemIcon>
                        <ListItemText primary="Git / Github" />
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon><FiberManualRecordIcon fontSize='xs'/></ListItemIcon>
                        <ListItemText primary="Scrum Methodology" />
                      </ListItemButton>
                    </List>
                    </Typography>    
                </CardContent>
              
                <CardContent className={classes.CardContent}>
                <Typography component="h5" variant="h5" color="primary" gutterBottom>
                    Languages
                    </Typography>    
                  <Typography component="h5" variant="h5" color="primary" gutterBottom>
                    English
                    </Typography>    
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
    alignContent: 'center',
    display: "flex",
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginRight: theme.spacing(13),
    marginTop: theme.spacing(1),
  },
  CardContent:{
    "& h6": {
      fontSize: "0.8rem",
    },
    "& h4": {
      fontSize: "-10.1rem",
    }
  },
  images:{
    maxHeight: 30,
  }
  
}))

export default Skills

