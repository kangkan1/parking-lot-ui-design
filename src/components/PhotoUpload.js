import React,{useState} from "react";

function PhotoUpload (props){
	const [enabled, setEnabled] = useState(props);
	const [image, setImage] = useState(null);
	const [validFile, setValidFile] = useState(false);
	const [fileSelected, setFileSelected] = useState(false);
	console.log("props passed: "+String(props))
	console.log("props.editEnabled: "+String(props[0]))
	console.log("enabled: "+String(enabled.editEnabled))
	return(
			<div style={{width:'67%', margin:'auto', border:'1px solid #eee', 
                   boxShadow:'0 5px 6px #ccc', padding:'16px', textAlign:'center',
                   marginTop:'10px'}}>
				<p>Photo upload component</p>
				<h1>PhotoUpload</h1>
				<form>
	              <label for="fname">Choose a profile photo: </label>
	              <input type="file" name="myImage" 
	                      style={{border:'1px solid #eee', width:'70%',
	                              boxShadow:'0 2px 3px #ccc', padding:'1.1em',
	                              boxSizing: 'borderBox', borderRadius:'1.1em'}}/>
            	</form> 
			</div>
			);
}

export default PhotoUpload;