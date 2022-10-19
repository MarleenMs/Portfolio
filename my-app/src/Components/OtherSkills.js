import * as React from 'react';
import {Card, CardContent, Collapse, makeStyles, Typography} from "@material-ui/core"
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { List, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';


const OtherSkills = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Card className={classes.card}> 
        <CardContent className={classes.CardContent}>
          <Typography component="h5" variant="h5" color="primary" gutterBottom align="center">
            Other Skills
          </Typography>
          
          <List>
          <ListItemButton>
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
          <ListItemButton onClick={handleClick}>
              <ListItemIcon><FiberManualRecordIcon color="primary" fontSize='xs'/></ListItemIcon>
              <ListItemText primary="Languages" /> {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ minWidth:"200px", pl: 4 }}>
                  <ListItemText primary="Spanish - Native" />
                </ListItemButton>
                <ListItemButton sx={{ minWidth:"200px", pl: 4 }}>
                  <ListItemText primary="English - C1" />
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
}))


export default OtherSkills