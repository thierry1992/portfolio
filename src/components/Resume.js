import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Box} from "@material-ui/core";
import Navbar from "./Navbar";


const useStyles = makeStyles(theme=>({
    mainContainer: {
        background: "salmon"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1 px solid black",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up('md')]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }

        }


    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:befor": {
            content: "''",
            position: "absolute",
            roght: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: " tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin:"1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"
            }
        }

    },

    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background:  "tomato",
        color:" white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up('md')]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto" 
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "black",
        padding: "3rem O",
        textTransform: "uppercase"
    },
    subHeading:{
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}));


const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component="header" className={classes.mainContainer} >
                <Typography variant="h4" align="center" className={classes.heading} >
                    Project personnal/professionnal working
                </Typography>
                <Box component="div" className={classes.timeLine} >
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} >PROJECT 1</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Analysis system education's data
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"black"}}>
                            Using: the librairies<em><b> Python (Pandas, numpy...), Matplotlib</b></em>
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"violet"}}>
                            Goal: Search the best country for begin systems education 
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} >PROJECT 2</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Concept an application for the healty's service
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"black"}}>
                            Using: <b> Pandas, numpy, seaborn, KNNImputer, Analysis Components(PCA)</b>
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"violet"}}>
                            Goal: Choose a model unsupervised to achieve the application
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} >PROJECT 3</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Anticipate the electricity consumption of buildings
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"black"}}>
                            Using: <b> Variance Threshold, SelectKbest (chi2), Sklearn Selection Model, GradientBoosting, RandomForest, XGBoost</b>
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"violet"}}>
                            Goal: Seattle  want to become a neutral city in 2050, create a model to predict energy consumption and CO2 emissions 
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} >PROJECT 4</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Segment customers of e-commerce 
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"black"}}>
                            Using: <b> RFM Analysis,Agglomerative Clustering, KMeans, DBscan, Rand Index Adjusted</b>
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"violet"}}>
                            Goal:  
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} >PROJECT personnal 1</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Facebook duplicata
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"black"}}>
                            Using: <b> React, JavaScript, Firebase</b>
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"violet"}}>
                            Goal: Discovery React JS and Firebase
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} >PROJECT personnal 2</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Whatsapp duplicata
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"black"}}>
                            Using: <b> React, JavaScript, MongoDB, Express, NodeJs</b>
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"violet"}}>
                            Goal: Discovery Mern stack
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} >PROJECT personnal 3</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Breast Cancer (Kaggle)
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"black"}}>
                            Using: <b> Seaborn, Matplotlib, RandomForestClassifier, AdaBoostClassifier, KNNClassifier</b>
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"violet"}}>
                            Goal: Find a powerful model to classify whether the cancer is malignant or benign 
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} >Project Personnal 4</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Hi-Dr (plate-forme télémedicine)
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"black"}}>
                            Using: <b> ReactJs, Firebase, Stripe, DetectFace</b>
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"violet"}}>
                            Goal: Healt care
                        </Typography>
                    </Box> 

                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} >Project Personnal 5</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Black Lives Matter Twitter
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"black"}}>
                            Using: <b> Pandas, Textblob, WordCloud</b>
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"violet"}}>
                            Goal: Sentiment analysis
                        </Typography>
                    </Box>  

                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} >PROJECT 5</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Segmentation customer (e-commerce)
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"black"}}>
                            Using: <b> Agglomerative Clustering, Kmeans, DBSCAN, Rand Index Adjusted</b>
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"violet"}}>
                            Goal: Find the best cluster's model
                        </Typography>
                    </Box>  

                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} >PROJECT 6</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Classify consumer goods
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"black"}}>
                            Using: <b>NLP, Bag of words, TF-IDF, SIFT, Transfer Learning</b>
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"violet"}}>
                            Goal: 
                        </Typography>
                    </Box>  
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} >PROJECT personnal 6</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Heart Failure and Stroke (Kaggle)
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"black"}}>
                            Using: <b> Pandas, Seaborn,Model ML de classification, Streamlit</b>
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"violet"}}>
                            Goal: Deploy model on the cloud 
                        </Typography>
                    </Box>  
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} >PROJECT personnal 7</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Hepatitis C (Kaggle)
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"black"}}>
                            Using: <b> Pandas, Seaborn,Model ML de classification, Streamlit</b>
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"violet"}}>
                            Goal: Deploy model on the cloud 
                        </Typography>
                    </Box>  
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} >PROJECT personnal 8</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Classification Image Monument
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"black"}}>
                            Using: <b> Pandas,Réseaux de neurone, Streamlit</b>
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"violet"}}>
                            Goal: Deploy  on the cloud 
                        </Typography>
                    </Box>                        

                </Box>
            </Box>

        </>    
    )
};

export default Resume;
