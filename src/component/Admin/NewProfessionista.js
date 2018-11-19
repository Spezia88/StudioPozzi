import React,{ Component } from 'react';
import {Row,Col,Button,Grid,FormGroup,ControlLabel,FormControl,HelpBlock } from 'react-bootstrap';
import firebase from 'firebase';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import {addProfessionista,getCategorieProfessionali} from '../../remote_storage';

import { Redirect } from 'react-router'

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  )
}


class NewProfessionista extends Component{
	constructor(props) {
		super(props);
		this.state={
						  nomeCompleto:"",
						  email: "",
			              fax:"",
			              telefono:"",
			              cv:"",
			              categoria:"",
			              istruzione:"",
			              ruolo:"",
			              opzioniCategorie:[]
					}
		
	
		
	}
	componentDidMount () {
	  window.scrollTo(0, 0);
	  this.bindAsArray(getCategorieProfessionali(), "opzioniCategorie");
	}

	handleAddProfessionista(e){

		
		e.preventDefault();
		this.setState({

				  nomeCompleto:this.nomeCompleto.value,
				  email: this.email.value,
			      fax:this.fax.value,
			      telefono:this.telefono.value,
			      cv:this.cv.value,
			      categoria:this.categoria.value,
			      istruzione:this.istruzione.value,
			      ruolo:this.ruolo.value,
			      fireRedirect: false

		}, () => {	addProfessionista(this.state);
					this.setState({ fireRedirect: true }); 
				  });
		

	}
	render(){
		
		
		let optionCategorieProfessionali=this.state.opzioniCategorie.map((categoria)=>{
				
				return(
					    	 <option key={categoria[".key"]} value={categoria[".key"]}>{categoria[".value"]}</option>

				)
			
		});
		const { fireRedirect } = this.state
		const { from } = this.props.location.state || '/'

		return(

				<Row>
					<Col lg={12}>
						<h3>Inserire dati professionista. Se un campo non viene valorizzato non sarà mostrato nella pagina</h3>
					</Col>
		      		<Col lg={12}>
							 <form onSubmit={this.handleAddProfessionista.bind(this)}>
								    <FieldGroup
								      id="formControlNome"
								      type="text"
								      label="Nome e Cognome"
								      placeholder="Inserisci nome completo"
								      inputRef={ref => { this.nomeCompleto = ref }}
								    />
								    <FormGroup controlId="categoriaProfessionale">
								      <ControlLabel>Categoria Professionale</ControlLabel>
								      <FormControl componentClass="select" placeholder="Selezionare categoria professionista"  inputRef={ref => { this.categoria = ref }}>
								      
								        {optionCategorieProfessionali}
								      </FormControl>
								    </FormGroup>
								    <FieldGroup
								      id="formControlsRuolo"
								      type="text"
								      label="Ruolo"
								      placeholder="Inserisci ruolo"
								      inputRef={ref => { this.ruolo = ref }}
								    />
								    <FieldGroup
								      id="formControlEmail"
								      label="Email"
								      type="text"
								      placeholder="Inserisci email"
								      inputRef={ref => { this.email = ref }}
								    />
								    <FieldGroup
								      id="formControlTelefono"
								      type="text"
								      label="Telefono"
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
								      id="formControlTitolodiStudio"
								      label="Titolo di studio"
								      type="text"
								      placeholder="Inserisci titolo di studio"
								      inputRef={ref => { this.istruzione = ref }}
								    />
								    <FieldGroup
								      id="formControlCV"
								      label="CV"
								      type="textarea"
								      placeholder="Inserisci curriculum vitae"
								      inputRef={ref => { this.cv = ref }}
								    />
								     <Button bsStyle="success" type="submit">
			      						Aggiungi
			    					</Button>

							</form>
							 {fireRedirect && (
					          <Redirect to={from || '/admin/studio'}/>
					        )}
					</Col>
				</Row>
		)
	}






}


reactMixin(NewProfessionista.prototype, ReactFireMixin)
export default NewProfessionista;