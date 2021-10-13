import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';



import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SettingsIcon from '@material-ui/icons/Settings';
import SvgIcon from '@material-ui/core/SvgIcon';
import PersonIcon from '@material-ui/icons/Person';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
//import MenuIcon from '@mui/icons-material/Menu';


import Booking from './screens/Booking.js'
import Profile from './screens/Profile.js'
import Setting from './screens/Setting.js'

import ProfilePage from './pages/ProfilePage.js'

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

function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [newBooking, setNewBooking] = useState([]);
  const [name, setName] = useState("Passed from App.js");
  const [userBooking, setUserBooking] = useState([]);

  const changeName = (val) =>{
    setName(val)
  };

  const updateUserBooking = ({val})=>{
 
    setUserBooking(val)
  };
  const toDisplay =(val) =>{
  if(val===0){
    return(<Booking />);
  }  
  else if(val===1){
    return(<Profile />);
  }
  else if(val === 2)
    return(<Setting />);
  
}


  useEffect(() => {
   document.title = "Diptendu's Parking"
  }, []);
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                
              </IconButton>
              <EmojiTransportationIcon fontSize="large"/>
              <Typography 
                variant="h6" color="inherit" component="div"
                style={{padding:10}}
                onClick={()=>{
                  setValue(0);
                }}>
                Home
              </Typography>
              <Typography 
                style={{padding:10}}
                variant="h6" color="inherit" component="div"
                onClick={()=>{
                  setValue(1);
                }}>
                Booking
              </Typography>
              <Typography 
                style={{padding:10}}
                variant="h6" color="inherit" component="div"
                onClick={()=>{
                  setValue(2);
                }}>
                Setting
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        {toDisplay(value)}

        
      </div>
    );
  
}

export default App;
