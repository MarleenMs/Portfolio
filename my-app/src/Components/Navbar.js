import { makeStyles, Toolbar } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar/AppBar";
import React from "react";
import Logo from "../Images/Logo2.png"

const Navbar = () => {
    const classes = useStyles();
    return(
        <AppBar position="sticky" className = {classes.root}>
            <Toolbar className= {classes.toolbar}>
                <img src= {Logo} className = {classes.logo} alt = "Logo" />
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
    }
}))


export default Navbar