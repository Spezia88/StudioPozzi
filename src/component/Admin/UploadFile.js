import React,{ Component } from 'react';

import firebase from 'firebase';

import FileUploader from 'react-firebase-file-uploader';



class UploadFile extends Component{
	
	constructor(props) {
		super(props);
		
	}
		
	componentWillMount() {
		console.log(this.props);
	}
	render(){
			return(
				  	 		
				  			
					  			
				  					          <FileUploader
									            accept={this.props.acceptedExtension}
									            name={this.props.name}
									          
									            storageRef={this.props.storageRef}
									            onUploadStart={this.props.handleUploadStart}
									            onUploadError={this.props.handleUploadError}
									            onUploadSuccess={this.props.handleUploadSuccess}
									           
									          />
				 			
				 	
			)
	}
	

}

export default UploadFile;