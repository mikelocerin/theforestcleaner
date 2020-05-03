import React from 'react'
import Router from './router.js'
import {ThemeProvider, createMuiTheme, makeStyles} from '@material-ui/core'
import { lime } from '@material-ui/core/colors'
import Header from './Header.js'
import SimpleBottomNavigation from './NavigationBar.js'
import ForestImg from '../forest.jpg'

const useStyles = makeStyles({
    root: {
        backgroundImage: `url(${ForestImg})`,

    }
  });

const forestTheme = createMuiTheme({
    palette: {
      primary: {
          main:'#b2ff59',
      },
      secondary: lime,
    },
    status: {
      danger: 'orange',
    },
  });

    function HomePage(){
        const classes = useStyles()
        return (
        <div style={{height: '800px', position: 'relative'}}>
            <ThemeProvider theme={forestTheme}>
                <Header></Header>
                <SimpleBottomNavigation></SimpleBottomNavigation>
            </ThemeProvider>
            
            <div className={classes.root}>
                <Router></Router>
            </div>

        </div>
        );
    }
export default HomePage