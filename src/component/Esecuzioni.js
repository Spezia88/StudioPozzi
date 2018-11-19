import React,{ Component } from 'react';
//import  '../css/Associati.css';
import TitleBanner from './TitleBanner';
import { ImageFromStorage } from 'react-firebase-storage-connector';
import {Media,Grid,Button,Col } from 'react-bootstrap';

import firebase from 'firebase';
import '../css/Esecuzioni.css';
//import database from '../database.js';
import {getEsecuzioni,deleteEsecuzione,saveEsecuzioni} from '../remote_storage';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import ButtonGroup from './Admin/ButtonGroup.js';
import {removeIndexFromArray} from '../js/common.js';
import { Link,NavLink } from 'react-router-dom';
//import associati from '../datiAssociati.js'
class LinkDocumentazione extends Component {
		constructor(props) {
			
			super(props);
			
			this.state={
				link:this.props.documento,
				url:""

			}
			this.handleClick=this.handleClick.bind(this);	

		}
		
		componentWillMount() {
			
			const _this=this;
			firebase.storage().ref('esecuzioni').child(this.state.link).getDownloadURL().then(function(url) {
			  	
			  	_this.setState({
			  		url
			  	})
			}).catch(function(error) {
	
			      _this.setState({
			      	link:'',
			      	url:''
			      })
	
				})
		}
		handleClick(e){
			e.preventDefault();
			window.open(this.state.url);
		}
		render() {
				/*let ButtonElimina;
				if(this.props.editMode)
					ButtonElimina=<div>
							<Button onClick={()=>this.props.handleEliminaDocumento} bsStyle="danger">Elimina</Button>
						</div>;*/

				return(
					<div>
						<div>
							<a href='#' onClick={this.handleClick}>{this.state.link}</a>
						</div>
					
						
					</div>
				)
		}
		

}

class  Esecuzione extends Component{

				constructor(props) {
					super();
					this.state={
							luogo:props.luogo,
							registro:props.registro,
							tipologia:props.tipologia,
							professionista:props.professionista
					}
					this.handleChange=this.handleChange.bind(this);
					//this.handleEliminaDocumento=this.handleEliminaDocumento.bind(this);
				}

				handleChange(event){
					
					
					let property=event.target.title;
					let value=event.target.value;
					this.setState({
						[property]:value
					})
					
					this.props.handleChangeEsecuzione(this.props.index,property,value);
				}
				handleEliminaDocumento(index){

					
				}
				render(){
					let Luogo,Registro,Tipologia,ProfessionistaIncaricato,Elimina;
					
					if(this.props.editMode){
						
						Elimina=  <Button onClick={()=>this.props.deleteEsecuzione(this.props.index)} bsStyle="danger">Elimina</Button>
						Luogo=<input type="text" defaultValue={this.state.luogo} onChange={this.handleChange} title="luogo" />;
						Registro=<input type="text" defaultValue={this.state.registro} onChange={this.handleChange} title="registro"/>;
						Tipologia=<input type="text" value={this.state.tipologia} onChange={this.handleChange} title="tipologia"/>;
						ProfessionistaIncaricato= <input type="text" value={this.state.professionista} onChange={this.handleChange} title="professionista" />;
					}
					else{
						Luogo=<p>{this.state.luogo}</p>;
						Registro=<p>{this.state.registro}</p>;
						Tipologia=<p>{this.state.tipologia}</p>;
						ProfessionistaIncaricato=<p>{this.state.professionista}</p>
					}
					let linkDocumenti;
					if(this.props.documentazione !=null){
						linkDocumenti=this.props.documentazione.map((documento,index)=>{
							
							return <LinkDocumentazione editMode={this.props.editMode} documento={documento} key={index} handleEliminaDocumento={this.handleEliminaDocumento(index)}/>
						});
					}
					else
						linkDocumenti=<p></p>;

					return(
						
								<div className="esecuzione">
			      			
			      				
									 <Media>
									     <Media.Left>
									         <ImageFromStorage storageRef={firebase.storage().ref('image').child('immobile.jpg')} alt={this.props.immagine} className="imgEsecuzione"  />
									         <ImageFromStorage storageRef={firebase.storage().ref('image').child('immobileMobile.jpg')} alt={this.props.immagine} className="imgEsecuzioneMobile"  />
									      </Media.Left>
									      <Media.Body>
									        
										       	<h4 className="titoloEsecuzioni">LUOGO</h4>
										        {Luogo}
										       	<h4 className="titoloEsecuzioni">REGISTRO GENERALE ESECUZIONE</h4>
										       	{Registro}
										       	<h4 className="titoloEsecuzioni">TIPOLOGIA IMMOBILE - TITOLO DI POSSESSO</h4>
										        {Tipologia}	
										       	<h4 className="titoloEsecuzioni">DOCUMENTAZIONE</h4>
										       	{linkDocumenti}

										       	<h4 className="titoloEsecuzioni">PROFESSIONISTA INCARICATO</h4>
										    	{ProfessionistaIncaricato}
										       	<p>{Elimina}</p>
										        
									      </Media.Body>
									 </Media>
								
									 
							  </div>
						
							
					)
				}
				
				
				
		
}

function Aggiungi(props) {
  const isLoggedIn = props.editMode;
  const admin=props.adminMode;
  if (isLoggedIn && admin) {
    return (<div>
					   <Col lg={11} sm={8}>
				 
					   </Col>
				                
				 		<Col lg={1} sm={4}>
					        <NavLink to='/admin/nuovaesecuzione'><Button bsStyle="success">Aggiungi</Button></NavLink>
			     		</Col>
					
			    
			 </div>);
  }
  return (<div></div>);
}
		
class Esecuzioni extends Component{
	constructor(props) {
		super(props);
		this.state={
			esecuzioni:[],
			editMode:false
		}
		this.handleAnnulla=this.handleAnnulla.bind(this);
		this.handleSave=this.handleSave.bind(this);
		
	}
	componentWillMount() {


		     this.bindAsArray(getEsecuzioni(), "esecuzioni");
	}

	deleteEsecuzione(index){
			
				deleteEsecuzione(index);
				window.scrollTo(0, 0);

	}
	handleAnnulla(){
			this.setState({
					editMode:!this.state.editMode
					

			})
	}
	handleChangeEsecuzione(index,property,e){
			let tmp=this.state.esecuzioni;
			
			tmp[index][property]=e;
			
			this.setState({
							esecuzioni:tmp
			})
			
	}
	handleSave(){
			
			if(this.state.editMode)
				saveEsecuzioni(this.state.esecuzioni);
			this.setState({
					editMode:!this.state.editMode
					

			})
	}
	render(){
		
		const _this=this;
		const ListEsecuzioni=this.state.esecuzioni.map((esecuzione,index)=>{
			
			return(
				<Esecuzione editMode={this.state.editMode} {...esecuzione} key={index} index={index} deleteEsecuzione={_this.deleteEsecuzione.bind(_this)} handleChangeEsecuzione={_this.handleChangeEsecuzione.bind(_this)}/>
				

			);
		});
		
		return(
			<div>
				<TitleBanner title="ESECUZIONI IMMOBILIARI" adminMode={this.props.adminMode}/>
				<div>
				{ListEsecuzioni}
				</div>
				<ButtonGroup editMode={this.state.editMode} adminMode={this.props.adminMode} handleSave={this.handleSave} handleAnnulla={this.handleAnnulla}/>
				<Aggiungi editMode={this.state.editMode} adminMode={this.props.adminMode}/>
			</div>
		)
	}


}

reactMixin(Esecuzioni.prototype, ReactFireMixin)

export default Esecuzioni;
