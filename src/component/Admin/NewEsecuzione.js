import React,{ Component } from 'react';
import {Col,Button,Grid,FormGroup,ControlLabel,FormControl,HelpBlock } from 'react-bootstrap';
import firebase from 'firebase';

import FileUploader from 'react-firebase-file-uploader';

import {storageEsecuzioni} from '../../database';
import UploadFile from './UploadFile';
import {addEsecuzione} from '../../remote_storage';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

/*const AlertDismissable (props){
  

  render() {
    if (props.alertVisible) {
      return (
        <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
          <h4>Oh snap! You got an error!</h4>
          <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
          <p>
            <Button bsStyle="danger">Take this action</Button>
            <span> or </span>
            <Button onClick={this.handleAlertDismiss}>Hide Alert</Button>
          </p>
        </Alert>
      );
    }

    return (
      <Button onClick={this.handleAlertShow}>Show Alert</Button>
    );
  },

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  },

  handleAlertShow() {
    this.setState({alertVisible: true});
  }
});*/

class NewEsecuzione extends Component{
	constructor(props) {
		super(props);
		this.state={
							luogo:"",
							registro:"",
							tipologia:"",
							documentazione:[],
							professionista:""
					}
		
	
		
	}
	componentDidMount () {
	  window.scrollTo(0, 0)
	}

	
	handleUploadSuccess(e){

		console.log("File Upload success!"+e);
		this.setState({documentazione: this.state.documentazione.concat(e)});


	}
	handleUploadError(){
		
		console.log("File Upload error!");
	}
	handleUploadStart(){
		
		console.log("File Upload Start!");
	}
	handleAddEsecuzione(){

		addEsecuzione(this.state);

	}
	render(){
		
		

		return(
				 <form onSubmit={this.handleAddEsecuzione.bind(this)}>
					    <FieldGroup
					      id="formControlLuogo"
					      type="text"
					      label="Luogo"
					      placeholder="Inserisci luogo"
					      inputRef={ref => { this.input = ref }}
					    />
					    <FieldGroup
					      id="formControlsRegistro"
					      type="text"
					      label="Registro"
					      placeholder="Inserisci registro"
					    />
					    <FieldGroup
					      id="formControlTipologia"
					      label="Tipologia"
					      type="text"
					      placeholder="Inserisci professionista"
					    />
					    <FormGroup controlId="formControlDocumentazione">
						     <ControlLabel>Aggiungi documentazione</ControlLabel>
						   	 <UploadFile 
								acceptedExtension=".pdf" 
								storageRef={storageEsecuzioni} 
								handleUploadStart={this.handleUploadStart} 
								handleUploadError={this.handleUploadError} 
								handleUploadSuccess={this.handleUploadSuccess.bind(this)} 
								name="Aggiungi documentazione"
							 />
						</FormGroup>
						<FieldGroup
					      id="formControlTipologia"
					      label="Professionista Incaricato"
					      type="text"
					      placeholder="Inserisci tipologia"
					    />
					     <Button bsStyle="success" type="submit">
      						Aggiungi
    					</Button>

				</form>
		)
	}






}

export default NewEsecuzione;