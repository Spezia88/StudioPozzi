import React,{ Component } from 'react';
//import  '../css/Associati.css';
import TitleBanner from './TitleBanner';
import { ImageFromStorage } from 'react-firebase-storage-connector';
import {Grid,Row,Col,Clearfix } from 'react-bootstrap';

import firebase from 'firebase';
import '../css/Siti.css';
//import database from '../database.js';
import {getSitiPerLaProfessione} from '../remote_storage';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';

const Siti=(props)=>{
	
	

	return(
		  	 
		  			<div onClick={()=>props.handleClick(props.sito)} className="containerSito">
			 			<ImageFromStorage storageRef={firebase.storage().ref('image').child(props.immagine)} alt={props.nome} className="avatarSito" />
			 		
		 			</ div>
		 	
	)

}

class ListSiti extends Component{
	constructor(props) {
		super(props);
		this.state={
			  sitiProfessione:[]
		}
		
	}
	componentWillMount() {
		     this.bindAsArray(getSitiPerLaProfessione(), "sitiProfessione");
	}
	openSite(link){
		window.open(link);
	}
	render(){
		
		
		const ListSiti=this.state.sitiProfessione.map((siti,index)=>{
			console.log(siti);
				return(
										
						
							<Col xs={12} sm={12} md={6} lg={4} key={index}>
									<Siti {...siti} key={index} handleClick={this.openSite}/>
									
							</Col>
							
						
				)
			
		});
		
		return(
			<div>	
				<TitleBanner title="SITI PER LA PROFESSIONE"/>
					<div className="containerSiti">
						<Row>
							{ListSiti}
						</Row>
					</div>
				
			</div>
		)
	}


}

reactMixin(ListSiti.prototype, ReactFireMixin)

export default ListSiti;
