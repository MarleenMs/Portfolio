import { IconButton, List, makeStyles, Toolbar } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar/AppBar";
import React from "react";
import Logo from "../Images/Logo2.png"
import {Link, animateScroll as scroll} from "react-scroll"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import MenuIcon from "@mui/icons-material/Menu"


const links = [
    {
        id: "about",
        text: "About me  ",
        icon: <FontAwesomeIcon icon="fa-regular fa-address-card" />
    },
    {
        id: "experience",
        text: "Experience  ",
        icon: <FontAwesomeIcon icon="fa-regular fa-briefcase-blank" />
    },
    {
        id: "skills",
        text: "Skills  ",
        icon: <FontAwesomeIcon icon="fa-light fa-toolbox" />
    },
    {
        id: "certifications",
        text: "Certifications  ",
        icon: <FontAwesomeIcon icon="fa-regular fa-file-certificate" />
    },
    {
        id: "contact",
        text: "Contact  ",
        icon: <FontAwesomeIcon icon="fa-regular fa-address-book" />
    },
]

const Navbar = () => {
    const classes = useStyles();
    return(
        <AppBar position="sticky" className = {classes.root}>
            <Toolbar className= {classes.toolbar}>
                <img src= {Logo} className = {classes.logo} alt = "Logo" />
                <List className = {classes.menu} >
                    {
                        links.map(({id, text}, index) => (
                            <Link key={index} 
                                to = {id} 
                                spy={true} 
                                smooth={true} 
                                activeclass= "active" 
                                duration={500} 
                                offset={-80}>
                                {text}
                            </Link>
                        ))
                    }
                </List>
                <IconButton edge="end" className={classes.menubutton}>
                    <MenuIcon fontSize="large"/>
                </IconButton>
            </Toolbar>
        </AppBar>
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
            marginLeft: theme.spacing(3),
            marginRight: theme.spacing(1)
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
        }
}))


export default Navbar