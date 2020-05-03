import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
        <BottomNavigationAction label="Home" icon={<RestoreIcon />} component={Link} to='/' />
        <BottomNavigationAction label="Log In" icon={<RestoreIcon />} component={Link} to='/login' />
        <BottomNavigationAction label="Map" icon={<FavoriteIcon />} component ={Link} to='/map' />
        <BottomNavigationAction label="Dirty Points" icon={<LocationOnIcon />} component={Link} to='/panel' />
    </BottomNavigation>
  );
}