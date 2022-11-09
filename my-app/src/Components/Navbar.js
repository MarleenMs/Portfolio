import { Divider, Drawer, IconButton, List, ListItem, makeStyles, Toolbar } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar/AppBar";
import React from "react";
import Logo from "../Images/Logo2.png"
import {Link} from "react-scroll"
import MenuIcon from "@mui/icons-material/Menu"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import CancelIcon from "@mui/icons-material/Cancel"
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
//import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import {useState} from "react"
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";


//animateScroll as scroll
const links = [
    {
        id: "about",
        text: "About me  ",
        icon_link: <AccountCircleIcon fontSize="large"/>
    },
    {
        id: "experience",
        text: "Experience  ",
        icon_link: <WorkHistoryIcon fontSize="large"/>
    },
    {
        id: "skills",
        text: "Skills  ",
        icon_link: <AutoFixHighIcon fontSize="large"/>
    },
    /*{
        id: "certifications",
        text: "Certifications  ",
        icon_link: <WorkspacePremiumIcon fontSize="large"/>
    },*/
    {
        id: "contact",
        text: "Contact  ",
        icon_link: <ContactMailIcon fontSize="large"/>
    },
]

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    return(
    <>
        <AppBar position="sticky" className = {classes.root}>
            <Toolbar className= {classes.toolbar}>
                <img src= {Logo} className = {classes.logo} alt = "Logo" />
                <List className = {classes.menu} >
                    {
                        links.map(({id, text, icon_link}, index) => (
                            <Link key={index} 
                                to = {id} 
                                spy={true} 
                                smooth={true} 
                                activeclass= "active" 
                                duration={500} 
                                offset={-80}>
                                {icon_link} {text}
                            </Link>
                        ))
                    }
                </List>
                <IconButton edge="end" className={classes.menubutton} onClick={() => setOpen(!open)}>
                    <MenuIcon fontSize="large"/>
                </IconButton>
            </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
            <IconButton onClick = {() => setOpen(false)}>
                <CancelIcon className={classes.closebutton} fontSize="large"/>
            </IconButton>
            <Divider/>
            {
                links.map(({id, text, icon_link}, index) => (
                    <Link key={index} 
                        className ={classes.sidebar}
                        to = {id} 
                        spy={true} 
                        smooth={true} 
                        activeclass= "active" 
                        duration={500} 
                        offset={-80}>
                        <ListItem component = "h5">
                            <span>
                                <ListItemIcon>
                                    {icon_link}
                                </ListItemIcon>
                            </span> {text}
                        </ListItem>
                    </Link>
                ))
            }

        </Drawer>
    </>
    )
}

const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: "white",
        top: 0,
        left:0,
        right: 0,
        zIndex: 999,
    },
    toolbar:{
        display: "felx",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    logo:{
        height: "5rem",
        objetctFit: "contain",
        "&:hover": {cursor: "pointer"}
    },
    menu:{
        [theme.breakpoints.down("sm")]:{
            display: "none"
        },
        "& a": {
            color: "#333",
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginLeft: theme.spacing(4),
            marginRight: theme.spacing(4)
        },
        "& a:hover": {
            cursor: "pointer",
            color: "#222c76",
            borderBottom: "3px solid #222c76"
        }
    },
    menubutton:{
        display: "none",
        [theme.breakpoints.down("sm")]:{
            display: "block"
        },
        color: "#222c76",
        position: "absolute",
        top: 12,
        right: 20,
    },
    closebutton:{
        color: "#222c76",
        top: 12,
        right: 20,
    },
    sidebar:{
        width: "40vw",
        [theme.breakpoints.down("sm")]:{
            width: "60vw",
        },
        "& h5":{
            margin: theme.spacing(6,0,0,4),
            fontSize: "1.3rem",
            color: "#333",
            fontWeight: "bold",
        },
        "& h5:hover": {
            cursor: "pointer",
            color: "#222c76",
        }
    }
    
}))


export default Navbar