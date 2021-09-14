import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SettingsIcon from '@material-ui/icons/Settings';
import SvgIcon from '@material-ui/core/SvgIcon';
import PersonIcon from '@material-ui/icons/Person';


import Booking from './screens/Booking.js'
import Profile from './screens/Profile.js'
import Setting from './screens/Setting.js'

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
function toDisplay(val){
  if(val===0){
    return(<Booking/>);
  }  
  else if(val===1){
    return(<Profile />);
  }
  else if(val === 2)
    return(<Setting />);
  
}
function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [newBooking, setNewBooking] = useState([]);
  const [name, setName] = useState("Passed from App.js")
  const changeName = (val) =>{
    setName(val)
  }

  useEffect(() => {
   document.title = "Diptendu's Parking"
  }, []);
    return (
      <div>
        <p>interaction between App.js and Booking.js: {name}</p>
        {toDisplay(value)}
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            console.log(newValue);
          }}
          showLabels
          className={classes.root}
          style = {{justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute', 
                    align:'center',
                    bottom: 0}}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
          <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
        </BottomNavigation>
      </div>
    );
  
}

export default App;
