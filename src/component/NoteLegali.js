import React,{ Component } from 'react';
//import  '../css/Associati.css';
import TitleBanner from './TitleBanner';

import {Grid,Col } from 'react-bootstrap';

import firebase from 'firebase';
import '../css/Esecuzioni.css';
//import database from '../database.js';
import { getNoteLegali, saveNoteLegali } from '../remote_storage';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import TinyMCE from 'react-tinymce';
import ButtonGroup from './Admin/ButtonGroup.js';


export default class NoteLegali extends Component{

	constructor(props) {
		super(props);
		this.state={
			 note_legali:"",
			 editMode:false
		}
		this.handleAnnulla=this.handleAnnulla.bind(this);
		this.handleSave=this.handleSave.bind(this);
		this.handleEditorChangeNote=this.handleEditorChangeNote.bind(this);
		
	}
	componentWillMount() {

			getNoteLegali().then(note_legali=>{
							
					        this.setState({
					            note_legali:note_legali

					        })

					    });
		}
	handleAnnulla(){
			this.setState({
					editMode:!this.state.editMode
					

			})
	}
	
	handleSave(){
			
			
			if(this.state.editMode){
				
				saveNoteLegali(this.state.note_legali);
			}
			this.setState({
					editMode:!this.state.editMode
					

			})
	}
	handleEditorChangeNote (e) {
		    
		    this.setState({

		    				note_legali:e.target.getContent()
		    						
		    })
    }

	render(){
		const annoCorrente=new Date();



		return(
				<div>
					<TitleBanner title="NOTE LEGALI" adminMode={this.props.adminMode}/>
					<Grid>
						<Col lg={12} >

							  {  this.state.editMode ? 
		                        <TinyMCE
		                          content={this.state.note_legali}
		                          config={{
		                            plugins: 'lists',
		                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
		                          }}
		                          onChange={this.handleEditorChangeNote}
		                        />
		                         :  <div dangerouslySetInnerHTML={{__html: this.state.note_legali}}></div>
		                      }
						{/*	<p><strong>Sede Legale: </strong> 20144 Milano - Via Del Caravaggio n. 3</p><br/>
							<p><strong>Studio e sede amministrativa: </strong> 23017 Morbegno - Via Rivolta n. 36</p><br/>
							<p><strong>Codice fiscale: </strong> 05093720968</p><br/>
							<p><strong>Partita IVA: </strong> IT 05093720968</p><br/>
							<p><strong>Telefono: </strong> +39 (0)342 612383</p><br/>
							<p><strong>Fax: </strong> +39 (0)342 613811 </p><br/>
							<p><strong>Email: </strong> morbegno@studiopozzicommercialisti.it</p><br/>
							<p><strong>Email certificata: </strong> morbegno@pec.studiopozzicommercialisti.it</p><br/><br/>
							<p>© 2009-{annoCorrente.getFullYear()}, STUDIO POZZI - Dottori Commercialisti Associati</p>
*/}

					<ButtonGroup editMode={this.state.editMode} adminMode={this.props.adminMode} handleSave={this.handleSave} handleAnnulla={this.handleAnnulla} />	
						</Col>
					</Grid>
				</div>


		)
	}
}