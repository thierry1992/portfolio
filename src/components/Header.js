import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../télécharger.jpg";
import Typed from "react-typed";

// CSS Styles
const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "salmon"
    },
    subtitle: {
        color: "white",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}));



const Header = () => {

    const classes = useStyles()


    return (
    <Box className={classes.typedContainer}>
        <Grid container justify="center" >
        <Avatar className={classes.avatar} src={avatar} alt="Nendaka Tshiunza Thierry" />  
        </Grid>
        
        <Typography className={classes.title} variant="h4">
            <Typed strings={["Nendaka Tshiunza Thierry"]} typeSpeed={40} />
        </Typography>
        <br/>
        <Typography className={classes.subtitle} variant="h5">
            <Typed 
            strings={["Artificial Intelligence engineer", 
            "Machine Learning engineer" ,"Data Scientist"]} 
            typeSpeed={40} backSpeed={60} loop />
        </Typography>          
    </Box>    
    );
}

export default Header
