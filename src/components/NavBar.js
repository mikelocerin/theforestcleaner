import React, {useState} from 'react';
import {Paper, Tabs , Tab, makeStyles} from '@material-ui/core'


  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

export default function NavBar(){

    const classes = useStyles();

    const[value , setValue] = useState(0);

    const handleChange = (event, newValue) => { 
        setValue(newValue)
    }
    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example">
                <Tab label= 'The Forest'/>
                <Tab label="Map" />
                <Tab label="Dirty Points" />
            </Tabs>
        </Paper>
)}