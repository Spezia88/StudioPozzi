import React,{ Component } from 'react';
import {Button,FormGroup,ControlLabel,FormControl,HelpBlock } from 'react-bootstrap';
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

		
		
		this.setState({

				luogo:this.luogo.value,
				registro:this.registro.value,
				tipologia:this.tipologia.value,
				documentazione:this.state.documentazione,
				professionista:this.professionista.value
		}, () => addEsecuzione(this.state) );
		

	}
	render(){
		
		

		return(
				 <form onSubmit={this.handleAddEsecuzione.bind(this)}>
					    <FieldGroup
					      id="formControlLuogo"
					      type="text"
					      label="Luogo"
					      placeholder="Inserisci luogo"
					      inputRef={ref => { this.luogo = ref }}
					    />
					    <FieldGroup
					      id="formControlsRegistro"
					      type="text"
					      label="Registro"
					      placeholder="Inserisci registro"
					      inputRef={ref => { this.registro = ref }}
					    />
					    <FieldGroup
					      id="formControlTipologia"
					      label="Tipologia"
					      type="text"
					      placeholder="Inserisci tipologia"
					      inputRef={ref => { this.tipologia = ref }}
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
					      placeholder="Inserisci professionista"
					      inputRef={ref => { this.professionista = ref }}
					    />
					     <Button bsStyle="success" type="submit">
      						Aggiungi
    					</Button>

				</form>
		)
	}






}

export default NewEsecuzione;