import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Navbar from './Navbar';
import {TextField, Typography, Button, Grid, Box} from "@material-ui/core";
import "./Project.css";



const Project = () => {
    return (
        <>
        <Box component="div" className="header__project" >
            <Navbar />
            <div  >
               <h1> Tutorial Project is in build !!</h1> 
            </div>
            

        </Box>    

        </>
    )
}

export default Project
