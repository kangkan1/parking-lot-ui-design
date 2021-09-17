import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PhotoUpload from '../components/PhotoUpload';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function Setting () {

  const classes = useStyles();
  const [editEnabled, setEditEnabled] = useState(false)
  const [fullName, setFullName] = useState("");
  const [editSave, setEditSave] = useState("Edit")
  const [address, setAddress] = useState("Your address...")
  const [emailId, setEmailId] = useState("")

  return (
    <div style={{display:'table', margin:'0 auto',  overflowY: 'auto'}}>
      <form className={classes.root} noValidate autoComplete="off">
        <div style={{padding:'15px'}}>
          <Button variant="contained" 
            color="primary"
            onClick={()=>{
              if(editSave === "Edit"){
                setEditSave("Save")
                setEditEnabled(true)
              }else {
                setEditSave("Edit")
                setEditEnabled(false)
              }
            }}>
            {editSave}
          </Button>
          <PhotoUpload editEnabled={editEnabled} />
          <div>
            <TextField required id="standard-required" 
              label="Full Name" 
              defaultValue="Your name" 
              value = {fullName}
              disabled={!editEnabled}
              onChange ={(e)=>setFullName(e.target.value)}/>
           </div>
           <div>   
            <TextField
              id="standard-multiline-static"
              label="Address"
              multiline
              rows={4}
              value={address}
              disabled={!editEnabled}
              onChange={(e)=>setAddress(e.target.value)}/>
           </div>
           <div>
            <TextField
              id="filled-number"
              label="Email id"
              value = {emailId}
              onChange={(e)=>setEmailId(e.target.value)}
              disabled={!editEnabled}
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
           </div>   
        </div>
      </form>

    </div>
  );
}

export default Setting