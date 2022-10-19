import React from 'react'
import {Card, CardContent, Collapse, makeStyles, Typography} from "@material-ui/core"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import C_prog from "../Images/c-programming.png";
import java from "../Images/java.png";
import python from "../Images/python.png";
import CSS from "../Images/css3.png";
import html from "../Images/html.png";
import javascript from "../Images/javascript.png";
import mysql from "../Images/my-sql.png";
import mongo from "../Images/mongodb.png";
import { List, ListItemButton, ListItemIcon, ListItemText, ListItemAvatar } from '@mui/material';

const Skills = ({title, dark, id}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [open1, setOpen1] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
        <div className={classes.sectioncontent} id={id}>
            <br/>
            <Typography variant= "h3">{title}</Typography>
            <Card className={classes.card} >
                <CardContent className={classes.CardContent}>               
                    <Typography component="h5" variant="h5" color="primary" gutterBottom textAlign="center">
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
                            <ListItemButton sx={{ maxHeight: 10, pl: 4 }}>
                              <ListItemText primary="3 years of experience" />
                            </ListItemButton>
                          </List>
                      </Collapse>

                      <ListItemButton onClick={handleClick}>
                          <ListItemAvatar>
                            <img className={classes.images} alt="Java" src={java}/>
                         </ListItemAvatar>
                          <ListItemText primary="Java" /> {open ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            <ListItemButton sx={{ maxHeight: 10, pl: 4 }}>
                              <ListItemText primary="3 years of experience" />
                            </ListItemButton>
                          </List>
                      </Collapse>


                      <ListItemButton onClick={handleClick}>
                          <ListItemAvatar>
                            <img className={classes.images} alt="Python" src={python}/>
                         </ListItemAvatar>
                          <ListItemText primary="Python" /> {open ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            <ListItemButton sx={{ maxHeight: 10, pl: 4 }}>
                              <ListItemText primary="2 years of experience" />
                            </ListItemButton>
                          </List>
                      </Collapse>


                      <ListItemButton onClick={handleClick}>
                          <ListItemAvatar>
                            <img className={classes.images} alt="HTML" src={html}/>
                         </ListItemAvatar>
                          <ListItemText primary="HTML" /> {open ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            <ListItemButton sx={{ maxHeight: 10, pl: 4 }}>
                              <ListItemText primary="2 years of experience" />
                            </ListItemButton>
                          </List>
                      </Collapse>

                      <ListItemButton onClick={handleClick}>
                          <ListItemAvatar>
                            <img className={classes.images} alt="CSS" src={CSS}/>
                         </ListItemAvatar>
                          <ListItemText primary="CSS" /> {open ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            <ListItemButton sx={{ maxHeight: 10, pl: 4 }}>
                              <ListItemText primary="2 years of experience" />
                            </ListItemButton>
                          </List>
                      </Collapse>

                      <ListItemButton onClick={handleClick}>
                          <ListItemAvatar>
                            <img className={classes.images} alt="mysql" src={mysql}/>
                         </ListItemAvatar>
                          <ListItemText primary="MySQL" /> {open ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            <ListItemButton sx={{ maxHeight: 10, pl: 4 }}>
                              <ListItemText primary="2 years of experience" />
                            </ListItemButton>
                          </List>
                      </Collapse>

                      <ListItemButton onClick={handleClick}>
                          <ListItemAvatar>
                            <img className={classes.images} alt="javascript" src={javascript}/>
                         </ListItemAvatar>
                          <ListItemText primary="Javascript" /> {open ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            <ListItemButton sx={{ maxHeight: 10, pl: 4 }}>
                              <ListItemText primary="1 years of experience" />
                            </ListItemButton>
                          </List>
                      </Collapse>

                      <ListItemButton onClick={handleClick}>
                          <ListItemAvatar>
                            <img className={classes.images} alt="mongodb" src={mongo}/>
                         </ListItemAvatar>
                          <ListItemText primary="MongoDB" /> {open ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            <ListItemButton sx={{ maxHeight: 10, pl: 4 }}>
                              <ListItemText primary="1 years of experience" />
                            </ListItemButton>
                          </List>
                      </Collapse>

                    </List>
                </CardContent>
            
                <CardContent className={classes.CardContent}>
                <Typography component="h5" variant="h5" color="primary" gutterBottom textAlign="center">
                    Other Skills
                </Typography>    
                  <Typography fontSize="50px" color="#333" >

                    <List>
                      <ListItemButton className={classes.icon}>"
                        <ListItemIcon><FiberManualRecordIcon color="secondary" fontSize='xs'/></ListItemIcon>
                        <ListItemText primary="Linux / Windows" />
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon><FiberManualRecordIcon color="secondary" fontSize='xs'/></ListItemIcon>
                        <ListItemText primary="Microsoft Office Package" />
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon><FiberManualRecordIcon color="secondary" fontSize='xs'/></ListItemIcon>
                        <ListItemText primary="Git / Github" />
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon><FiberManualRecordIcon color="secondary" fontSize='xs'/></ListItemIcon>
                        <ListItemText primary="Scrum Methodology" />
                      </ListItemButton>
                    </List>
                    <br/>
                    <List>
                      <ListItemButton onClick={handleClick1}>
                          <ListItemIcon><FiberManualRecordIcon color="primary" fontSize='xs'/></ListItemIcon>
                          <ListItemText primary="Languages" /> {open1 ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                        <Collapse in={open1} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="Spanish - Native" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                              <ListItemText primary="English - C1" />
                            </ListItemButton>
                          </List>
                      </Collapse>


                    </List>

                    </Typography>    
                </CardContent>
              
                
            </Card>
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
    minHeight: "auto",
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
    marginBottom: "auto",
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
    alignItems: 'center',
    marginRight: theme.spacing(13),
    marginTop: theme.spacing(1),
    marginBottom: "auto",
  },
  CardContent:{
    "& h6": {
      fontSize: "0.8rem",
    },
    "& h4": {
      fontSize: "-10.1rem",
    },
    marginBottom: "auto",
  },
  images:{
    maxHeight: 30,
  },
  icon: {
    fontSize: 'xs',
    color: 'red',
  },
  
}))

export default Skills

