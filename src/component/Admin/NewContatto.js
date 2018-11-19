import React,{ Component } from 'react';
import {Col,Button,Grid,FormGroup,ControlLabel,FormControl,HelpBlock } from 'react-bootstrap';
import firebase from 'firebase';

import FileUploader from 'react-firebase-file-uploader';
import {withRouter} from 'react-router-dom';
import {storageEsecuzioni} from '../../database';
import UploadFile from './UploadFile';
import {addContatto} from '../../remote_storage';

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

class NewContatto extends Component{
	constructor(props) {
		super(props);
		this.state={
						  email: "",
			              email_certificata: "",
			              fax:"",
			              indirizzo:"",
			              lat:"",
			              lng:"",
			              luogo:"",
			              telefono:"",
			              titolo:""
					}
		
	
		
	}
	componentDidMount () {
	  window.scrollTo(0, 0)
	}

	
	
	handleAddContatto(e){

		
	
		this.setState({

				email: this.email.value,
			    email_certificata: this.email_certificata.value,
			    fax:this.fax.value,
			    indirizzo:this.indirizzo.value,
			    lat:this.lat.value,
			    lng:this.lng.value,
			    luogo:this.luogo.value,
			    telefono:this.telefono.value,
			    titolo:this.titolo.value

		}, () => addContatto(this.state) );
		//this.props.history.push('/admin/contatti');

	}
	render(){
		
		

		return(
				 <form onSubmit={this.handleAddContatto.bind(this)}>
					    <FieldGroup
					      id="formControlLuogo"
					      type="text"
					      label="Luogo"
					      placeholder="Inserisci luogo"
					      inputRef={ref => { this.luogo = ref }}
					    />
					    <FieldGroup
					      id="formControlsIndirizzo"
					      type="text"
					      label="Indirizzo"
					      placeholder="Inserisci indirizzo"
					      inputRef={ref => { this.indirizzo = ref }}
					    />
					    <FieldGroup
					      id="formControlTelefono"
					      label="Telefono"
					      type="text"
					      placeholder="Inserisci telefono"
					      inputRef={ref => { this.telefono = ref }}
					    />
					    <FieldGroup
					      id="formControlFax"
					      label="Fax"
					      type="text"
					      placeholder="Inserisci fax"
					      inputRef={ref => { this.fax = ref }}
					    />
						<FieldGroup
					      id="formControlEmail"
					      label="Email"
					      type="text"
					      placeholder="Inserisci email"
					      inputRef={ref => { this.email = ref }}
					    />
					 
					    <FieldGroup
					      id="formControlEmailCert"
					      label="Email certificata"
					      type="text"
					      placeholder="Inserisci email certificata"
					      inputRef={ref => { this.email_certificata = ref }}
					    />
					    <FieldGroup
					      id="formControlEmail"
					      label="Titolo"
					      type="text"
					      placeholder="Inserisci titolo. Es: Sede amministrativa"
					      inputRef={ref => { this.titolo = ref }}
					    />

					    <FieldGroup
					      id="formControlLatitudine"
					      label="Latitudine"
					      type="number"
					      placeholder="Inserisci latitudine per mappa Google(https://www.coordinate-gps.it/)"
					      step="any"
					      inputRef={ref => { this.lat = ref }}
					    />
					     <FieldGroup
					      id="formControlLongitudine"
					      label="Longitudine"
					      type="number"
					      placeholder="Inserisci longitudine per mappa Google(https://www.coordinate-gps.it/)"
					      step="any"
					      inputRef={ref => { this.lng = ref }}
					    />
					     <Button bsStyle="success" type="submit">
      						Aggiungi
    					</Button>

				</form>
		)
	}






}

export default NewContatto;