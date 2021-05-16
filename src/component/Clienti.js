import React,{ Component } from 'react';
import TitleBanner from './TitleBanner';
import { ImageFromStorage } from 'react-firebase-storage-connector';
import {Button,Col } from 'react-bootstrap';
import firebase from 'firebase';
import '../css/Clienti.css';
import {getClienti,deleteCliente,saveClienti,getInCostruzione,getTestoClienti, saveTestoClienti} from '../remote_storage';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import ButtonGroup from './Admin/ButtonGroup.js';
import {NavLink } from 'react-router-dom';
import TinyMCE from 'react-tinymce';

export const TestoClienti=(props)=>{
	
	const {testoClienti,editMode,handleChangeTestoClienti}=props;

	return(
		  	 
		  			 <div>
						  {  editMode ? 
                        <TinyMCE
                          content={testoClienti}
                          config={{
                            plugins: 'lists',
                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                          }}
                          onChange={handleChangeTestoClienti}
                        />
                         :  <div dangerouslySetInnerHTML={{__html: testoClienti}}></div>
                      }
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
			testoClienti: '',
			editMode:false
		}
		this.handleAnnulla=this.handleAnnulla.bind(this);
		this.handleSave=this.handleSave.bind(this);
		this.handleChangeTestoClienti=this.handleChangeTestoClienti.bind(this);
	}
	componentWillMount() {
		     this.bindAsArray(getClienti(), "clienti");

			 getInCostruzione().then(inCostruzione => { 
				this.setState({
					inCostruzione
				})
			});

			getTestoClienti().then(data => { 
				this.setState({
					testoClienti:data.testoClienti
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
	handleChangeTestoClienti(event){
		let value=event.target.getContent();
		this.setState({
			testoClienti:value
		})
		
	}
	handleAnnulla(){
			this.setState({
					editMode:!this.state.editMode
					

			})
	}
	
	handleSave(){
			if(this.state.editMode){
				saveTestoClienti(this.state.testoClienti);
				saveClienti(this.state.clienti).then(() => {
					this.props.history.push('/clienti');	
				});	
			}
				
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
					<TestoClienti classContainer="containerTesto" testoClienti={this.state.testoClienti} editMode={this.state.editMode}  handleChangeTestoClienti={this.handleChangeTestoClienti}/>

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
