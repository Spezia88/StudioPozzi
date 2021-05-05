import React,{ Component } from 'react';
import TitleBanner from './TitleBanner';
import { ImageFromStorage } from 'react-firebase-storage-connector';
import {Button,Col } from 'react-bootstrap';
import firebase from 'firebase';
import '../css/Clienti.css';
import {getClienti,deleteCliente,saveClienti,getInCostruzione} from '../remote_storage';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import ButtonGroup from './Admin/ButtonGroup.js';
import {NavLink } from 'react-router-dom';

export const TestoClienti=()=>{
	
	

	return(
		  	 
		  			 <div>
			 			<p>
						 I clienti e le referenze rappresentano, insieme ai collaboratori di studio, il nostro patrimonio più
						importante e sono alla base della nostra reputazione.
						La nostra clientela è costituita per lo più da società di capitali, anche strutturate in forma di gruppo, dai
						loro soci e dalle le loro famiglie, da società di persone e da attività esercitate in forma individuale e
						professionale.
						La nostra clientela opera nei più disparati settori tra cui quello immobiliare, petrolifero, turistico/ricettivo,
						macchine utensili, medicale, commercio, meccanica, servizi in genere, energie rinnovabili e consulenza
						professionale.<br/>
						<strong>Il Codice Deontologico della Professione di Dottore Commercialista ed Esperto Contabile</strong> consente
						la menzione dei nostri clienti che hanno fornito specifica autorizzazione.<br/>
						Di seguito una breve elencazione di alcuni tra coloro che hanno gentilmente prestato il proprio consenso:
						</p>	 		
		 			</div>
		 	
	)

}


class Cliente extends Component{

				constructor(props) {
					super(props);
					this.state={
							logo:props.logo,
							nome:props.nome,
							sito:props.sito,
							ordine:""
					}
					this.handleChangeCliente=this.handleChangeCliente.bind(this);
				}
				handleChangeCliente(event){
					let property=event.target.title;
					let value=event.target.value;
					this.setState({
						[property]:value
					})
					
					this.props.handleChangeCliente(this.props.index,property,value);
					
				}
				render(){
					let Elimina,Sito;
					
					if(this.props.editMode){			
						Elimina=  <Button onClick={()=>this.props.deleteCliente(this.props.index)} bsStyle="danger">Elimina</Button>
						Sito=<h3><input type="text" value={this.state.sito} onChange={this.handleChangeCliente} title="sito" /></h3>;
					}
					
					return(
						<Col lg={4} sm={12}>
							<div className="cliente">
			      			
							  <div onClick={()=>this.props.handleClick(this.props.sito)} className={this.props.classContainer}>
								  <ImageFromStorage storageRef={firebase.storage().ref('clienti').child(this.props.logo)} alt={this.props.nome} className={this.props.classImage} />	 		
							  </ div>
							  {Sito}
							  {Elimina}
					  		</div>
					   </Col>
							
						
							
					)
				}		
}

function Aggiungi(props) {
  const isLoggedIn = props.editMode;
  const admin=props.adminMode;
  if (isLoggedIn && admin) {
    return (<div className="aggiungiContainer">
					   <Col lg={8} sm={6}>
				 
					   </Col>
					   <Col lg={2} sm={4}>
					        <NavLink to='/admin/nuovocliente'><Button bsStyle="success">Aggiungi</Button></NavLink>
			     		</Col>      
				 		<Col lg={2} sm={2}>
			     		</Col>
					
			    
			 </div>);
  }
  return (<div></div>);
}
		
class Clienti extends Component{
	constructor(props) {
		super(props);
		this.state={
			clienti:[],
			editMode:false
		}
		this.handleAnnulla=this.handleAnnulla.bind(this);
		this.handleSave=this.handleSave.bind(this);
		
	}
	componentWillMount() {
		     this.bindAsArray(getClienti(), "clienti");
			 getInCostruzione().then(inCostruzione => {
				this.setState({
					inCostruzione
				})
			});
		
	}

	deleteCliente(index){
			
				deleteCliente(index).then(() =>{
					window.scrollTo(0, 0);
				});
				

	}
	openSite(link){
		if(link) {
			window.open(link);
		}
		
	}

	handleChangeCliente(index,property,e){
		let tmp=this.state.clienti;
		
		tmp[index][property]=e;
		
		this.setState({
						clienti:tmp
		})
		
	}
	handleAnnulla(){
			this.setState({
					editMode:!this.state.editMode
					

			})
	}
	
	handleSave(){
			if(this.state.editMode)
				saveClienti(this.state.clienti).then(() => {
					this.props.history.push('/clienti');	
				});
			this.setState({
					editMode:!this.state.editMode
			});
	}
	render(){
		
		const _this=this;
		let ListClienti;
		if(this.state.inCostruzione && !this.props.adminMode){
			ListClienti =   <div className="sezioneInAllestimento"><ImageFromStorage storageRef={firebase.storage().ref('clienti').child("incostruzione.png")} alt="sitoInCostruzione" className="" /></div>;
		} else {
			ListClienti=this.state.clienti.map((cliente,index)=>{
			
				return(
					<Cliente editMode={this.state.editMode} {...cliente} key={index} index={cliente[".key"]} deleteCliente={_this.deleteCliente.bind(_this)} handleClick={this.openSite} handleChangeCliente={_this.handleChangeCliente.bind(_this)} classImage="avatarSitoClienti" classContainer="containerSitoCliente" />	
				);
			});
		}
				
		return(
			<div>
				<TitleBanner title="CLIENTI E REFERENZE" adminMode={this.props.adminMode}/>
				<div className="container content">
					<TestoClienti classContainer="containerTesto" />

					<div className="containerSitiClienti">
						{	ListClienti}
					</div>
					<div className="buttonGroup">
							<ButtonGroup editMode={this.state.editMode} adminMode={this.props.adminMode} handleSave={this.handleSave} handleAnnulla={this.handleAnnulla}/>
							<Aggiungi editMode={this.state.editMode} adminMode={this.props.adminMode}/>
					</div>	
					
				</div>
				
			</div>
		)
	}


}

reactMixin(Clienti.prototype, ReactFireMixin)

export default Clienti;
