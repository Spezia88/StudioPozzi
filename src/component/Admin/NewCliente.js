import React,{ Component } from 'react';
import {Button,FormGroup,ControlLabel,FormControl,HelpBlock } from 'react-bootstrap';
import {storageClienti} from '../../database';
import UploadFile from './UploadFile';
import {addCliente} from '../../remote_storage';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class NewCliente extends Component{
	constructor(props) {
		super(props);
		this.state={
							logo:"",
							nome:"",
							sito:"",
							ordine: ""
					}
		
	
		
	}
	componentDidMount () {
	  window.scrollTo(0, 0)
	}

	
	handleUploadSuccess(e){

		console.log("File Upload success!"+e);
		this.setState({logo: this.state.logo.concat(e)});


	}
	handleUploadError(){
		
		console.log("File Upload error!");
	}
	handleUploadStart(){
		
		console.log("File Upload Start!");
	}
	handleAddCliente(){
	
		this.setState({
				...this.state,
				nome:this.nome.value.charAt(0).toUpperCase() + this.nome.value.slice(1),
				sito:this.sito.value,
				ordine: "",
				
		}, () => {
			addCliente(this.state)
			this.props.history.push('admin/clienti');	
		} );

	}
	render(){
		
		

		return(
				 <form onSubmit={this.handleAddCliente.bind(this)}>
					    <FieldGroup
					      id="formControlNome"
					      type="text"
					      label="Nome"
					      placeholder="Inserisci nome"
					      inputRef={ref => { this.nome = ref }}
					    />
					    <FieldGroup
					      id="formControlSito"
					      type="text"
					      label="Sito"
					      placeholder="Inserisci sito"
					      inputRef={ref => { this.sito = ref }}
					    />					 
					    <FormGroup controlId="formControlLogo">
						     <ControlLabel>Aggiungi logo</ControlLabel>
						   	 <UploadFile 
								acceptedExtension=".png,svg.jpeg.jpg" 
								storageRef={storageClienti} 
								handleUploadStart={this.handleUploadStart} 
								handleUploadError={this.handleUploadError} 
								handleUploadSuccess={this.handleUploadSuccess.bind(this)} 
								name="Aggiungi logo cliente"
							 />
						</FormGroup>
					     <Button bsStyle="success" type="submit">
      						Aggiungi
    					</Button>

				</form>
		)
	}
}

export default NewCliente;