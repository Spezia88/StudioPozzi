import React,{ Component } from 'react';
//import  '../css/Associati.css';
import TitleBanner from './TitleBanner';

import {Grid,Col,Row } from 'react-bootstrap';
import Span from './Span.js';
import firebase from 'firebase';
import '../css/ServiziAlCliente.css';
//import database from '../database.js';

import {Siti} from './ListSiti';
import Iframe from 'react-iframe'
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';

 /*<	Iframe 	
												url="https://www.youtube.com/watch?v=7-9mCy8K890&t=3s"
										        width="50%"
										        height="50%"
										        id="tutorialBluenext"
										        className=""
										        display="initial"
										        position="relative"
										        allowFullScreen/>*/
export default class ServiziAlCliente extends Component{

	render(){
		
		return(
				<div>
					<TitleBanner title="SERVIZI AL CLIENTE" />
					<Grid>
						
						<Row>
							<Col sm={12} lg={8} >
								  <h4 className="titoloServiziCliente">Fatturazione Elettronica</h4>
								  <Span/>
								  <Siti immagine="logo-bluenext.png" nome="bluenext" sito="http://fattureonline.sonoincloud.it"  handleClick={(link)=>window.open(link)} classImage="logoBluenext" classContainer="divBluenext"/>
								 
								 
								  
							</Col>
							<Col sm={12} lg={4} >
									  <h4 className="titoloServiziCliente">Tutorial</h4>
									  <Span/>
									  <Siti immagine="youtube.png" nome="youtube" sito="https://www.youtube.com/watch?v=7-9mCy8K890&t=3s"  handleClick={(link)=>window.open(link)} classImage="youtubeLogo" classContainer="divBluenext"/>

							</Col>
						</Row>					
						
						
						<Row>
							  <Col sm={12} lg={8}>
								  <h4 className="titoloServiziCliente">Gestione Privacy</h4>
								  <Span/>
								  <Siti immagine="smartprivacy.png" nome="smartprivacy" sito="http://privacymanager.sonoincloud.it"  handleClick={(link)=>window.open(link)} classImage="logoPrivacyBluenext" classContainer="divPrivacyBluenext"/>
		        			 
							</Col>
							<Col sm={12} lg={4} >
								  <h4 className="titoloServiziCliente">Tutorial</h4>
								  <Span/>
							      <Siti immagine="youtube.png" nome="youtube" sito="https://www.youtube.com/watch?v=Un3qiagzAKs&feature=youtu.be"  handleClick={(link)=>window.open(link)} classImage="youtubeLogo" classContainer="divBluenext"/>
							</Col>
					 	</Row>
					 
					</Grid>
				</div>


		)
	}
}