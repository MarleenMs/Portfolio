import { List, makeStyles, Toolbar } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar/AppBar";
import React from "react";
import Logo from "../Images/Logo2.png"
import {Link, animateScroll as scroll} from "react-scroll"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const links = [
    {
        id: "about",
        text: "About me  ",
        icon: <FontAwesomeIcon icon="fa-regular fa-address-card" />
    },
    {
        id: "skills",
        text: "Skills  ",
        icon: <FontAwesomeIcon icon="fa-light fa-toolbox" />
    },
    {
        id: "contact",
        text: "Contact  ",
        icon: <FontAwesomeIcon icon="fa-regular fa-address-book" />
    },
    {
        id: "certifications",
        text: "Certifications  ",
        icon: <FontAwesomeIcon icon="fa-regular fa-file-certificate" />
    },
    {
        id: "experience",
        text: "Experience  ",
        icon: <FontAwesomeIcon icon="fa-regular fa-briefcase-blank" />
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
                            <Link key={index} to = {id} spy={true} smooth={true} duration={500} offset={-70}>{text}</Link>
                        ))
                    }
                </List>
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
            marginLeft: theme.spacing(3),
            marginRight: theme.spacing(1)
        }
    }
}))


export default Navbar