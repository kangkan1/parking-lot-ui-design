import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Icon } from '@material-ui/core';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';

function priceDisplay(selectedDate, startTime, endTime, rate){

    if(Date.parse(endTime) > Date.parse(startTime)){
      //var diff = Math.abs(endTime.getHours() - startTime.getHours());
      var end = endTime.getHours()*60 + endTime.getMinutes();
      var temp = new Date(startTime)
      var start = temp.getHours()*60+temp.getMinutes();
      var price = ((end-start)*rate/60).toFixed(2)
      var total = (price*1.05).toFixed(2)
      return(<div>
                <p>Price for {end-start} minutes is Rs. {price}</p>
                <p>GST 5% : Rs. {(price*0.05).toFixed(2)}</p>
                <p>Total price: Rs. {total}</p>
             </div>);
    } else {
        return(<p style={{color:'red'}}>Start time can't be more or equal to End time</p>)
    }
}
function Booking(){
  const [selectedDate, setSelectedDate] = React.useState(Date().toLocaleString());
  const [startTime, setStartTime] = React.useState(Date().toLocaleString());
  const [endTime, setEndTime] = React.useState(Date().toLocaleString());
  const [price, setPrice] = React.useState("Rs.300");
  const [rate, setRate] = React.useState(50)
  const handleDateChange = (date) => {
    setSelectedDate(date);
    
  };
  const handleStartTime = (date) => {
    setStartTime(date);
    
  };
  const handleEndTime = (date) => {
    setEndTime(date);
    
  };
  

    return (
      <div style={{display:'table', margin:'0 auto'}}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <EmojiTransportationIcon fontSize="large"/>
          <h2>Diptendu's Parking</h2>
        </div>
        <div>
          <h1>Pick a Date and timings for parking</h1>
        </div>  
         <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justifyContent="space-around">
            
            <KeyboardDatePicker
              style={{padding: '10px'}} 
              margin="normal"
              id="date-picker-dialog"
              label="Pick date for parking"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',

              }}
            />
            <KeyboardTimePicker
              style={{padding: '10px'}} 
              margin="normal"
              id="time-picker"
              label="Pick a start time"
              value={startTime}
              onChange={handleStartTime}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
            <KeyboardTimePicker
              style={{padding: '10px'}} 
              margin="normal"
              id="time-picker"
              label="Pick a end time"
              value={endTime}
              onChange={handleEndTime}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <p>Rate: {rate} per hour</p>
        {priceDisplay(selectedDate, startTime, endTime, rate)}
      </div>
    );
  
}
export default Booking