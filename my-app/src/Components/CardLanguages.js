import * as React from 'react';
import {Card, CardContent, Collapse, makeStyles, Typography} from "@material-ui/core"
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
import { List, ListItemButton, ListItemText, ListItemAvatar } from '@mui/material';


const CardLanguages = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Card className={classes.card}> 
        <CardContent className={classes.CardContent}>
          <Typography component="h5" variant="h5" color="primary" gutterBottom align="center">
            Programming Languages
          </Typography>
          
          <List>
            <ListItemButton sx={{ minWidth: "250px", pl: 4 }} onClick={handleClick}>
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

            <ListItemButton sx={{ minWidth: "250px", pl: 4 }} onClick={handleClick}>
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


            <ListItemButton sx={{ minWidth: "250px", pl: 4 }} onClick={handleClick}>
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


            <ListItemButton sx={{ minWidth: "250px", pl: 4 }} onClick={handleClick}>
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

            <ListItemButton sx={{ minWidth: "250px", pl: 4 }} onClick={handleClick}>
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

            <ListItemButton sx={{ minWidth: "250px", pl: 4 }} onClick={handleClick}>
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

            <ListItemButton sx={{ minWidth: "250px", pl: 4 }} onClick={handleClick}>
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

            <ListItemButton sx={{ minWidth: "250px", pl: 4 }} onClick={handleClick}>
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
      
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  gridc: {
    [theme.breakpoints.down("sm")]:{
      height: "80vh",
      margin: theme.spacing(2,3,0,-10),
      display: "block",
    },
  },
  card:{
    [theme.breakpoints.down("sm")]:{
      display: "block",
    },
    alignContent: 'center',
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    width: "300px",
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


export default CardLanguages