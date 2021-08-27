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

function Booking(){
  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-08-27T21:11:54'));
  const [startTime, setStartTime] = React.useState(new Date('2021-08-27T21:11:54'));
  const [endTime, setEndTime] = React.useState(new Date('2021-08-27T21:11:54'));
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleStartTime = (date) => {
    setStartTime(date);
  };
  const handleEndTime = (date) => {
    setStartTime(date);
  };

    return (
      <div>
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
      </div>
    );
  
}
export default Booking