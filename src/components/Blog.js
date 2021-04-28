import React from 'react'
import Navbar from './Navbar';
import {TextField, Typography, Button, Grid, Box} from "@material-ui/core";
import "./Blog.css";



function Message() {
    return (
        <div>
            <Box component="div" className="header__blog" >
            <Navbar />
            <div  >
               <h1> Blog is in build !!</h1> 
            </div>
            

        </Box>    
            
        </div>
    )
}

export default Message

