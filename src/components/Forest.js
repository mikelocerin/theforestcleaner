import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    intro:{
        widht:'600px',
        height:'700px'
    }
  });

export default function Forest (){

    const classes = useStyles();

    return(
    
            <div className={classes.intro}>

                <p>We are ......................</p>

            </div>
     
        
    )
}