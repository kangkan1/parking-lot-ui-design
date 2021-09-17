import React,{useState} from "react";

function PhotoUpload (props){

	const [enabled, setEnabled] = useState(props["editEnabled"]);
	const [image, setImage] = useState(null);
	const [validFile, setValidFile] = useState(false);
	const [fileSelected, setFileSelected] = useState(false);

	const renderImage =()=>{
		if(validFile){
			return(<div>
					<p style={{fontFamily: 'cursive'}}>Image preview: </p>
              		<img src={image} 
                    	 style={{width:'25%', height:'25%', border:'7px solid #ddd',
                                maxWidth:'90%', maxHeight: '90%', marginTop:'2px',
                                padding:'7px'}}/>
					</div>);
		}else{
			return(<p style={{fontFamily: 'cursive', color:'red'}}>
                	This is not a valid image file
              	   </p>);
		}
	}
	const onImageChange = (event) => {
	    console.log("Onchange triggered");
	    if (event.target.files && event.target.files[0]){
	    	console.log("Valid files selected");
	    	let image = new Image()
	    	image.src = window.URL.createObjectURL(event.target.files[0])
	    	let img = event.target.files[0];
		    let url = img.name
		    const file = event.target.files[0];
		    const fileType = file['type'];
		    const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
	    	if(validImageTypes.includes(fileType)){
	    		setImage(URL.createObjectURL(img));
	    		setValidFile(true);
	    	}else{
	    		alert('Invalid file. Please choose image file png, jpeg, jpg')
	    		setImage(null);
	    		setValidFile(false);
	    	}
	    }
  	};
	return(
			<div style={{width:'75%', height:'75%', margin:'auto', border:'1px solid #eee', 
                   boxShadow:'0 5px 6px #ccc', padding:'5px', textAlign:'center',
                   marginTop:'5px', overflowY: 'auto'}}>
				
				{renderImage()}
				<form>
	              <label for="fname">Choose a profile photo: </label>
	              <input type="file" name="myImage" 
	              		 onChange={(event)=>{onImageChange(event)}}
	              		 disabled={!props["editEnabled"]}
	                     style={{border:'1px solid #eee', width:'70%',
	                              boxShadow:'0 2px 3px #ccc', padding:'1em',
	                              boxSizing: 'borderBox', borderRadius:'1em'}}/>
            	</form> 
			</div>
			);
}

export default PhotoUpload;