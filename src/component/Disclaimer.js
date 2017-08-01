import React,{ Component } from 'react';
//import  '../css/Associati.css';
import TitleBanner from './TitleBanner';

import {Grid,Col } from 'react-bootstrap';

import firebase from 'firebase';
import '../css/Esecuzioni.css';
//import database from '../database.js';
import {getPrivacy} from '../remote_storage';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';


export default class NoteLegali extends Component{

	render(){
		const annoCorrente=new Date();
		return(
				<div style={{marginBottom:'250px'}}>
					<TitleBanner title="DISCLAIMER" />
					<Grid>
						<Col lg={12} >
							<p>Tutti i dati ed i materiali del presente sito sono forniti ad esclusivo scopo informativo e non costituiscono offerta al pubblico di servizi di consulenza professionale.<br/>

									Lo STUDIO POZZI - Dottori Commercialisti Associati non potrà essere ritenuto responsabile a qualsiasi titolo per errori, inesattezza o incompletezza e per qualsiasi affidamento di terzi sui contenuti del presente sito.<br/>

									© 2009-{annoCorrente.getFullYear()}, STUDIO POZZI - Dottori Commercialisti Associati</p>
						</Col>
					</Grid>
				</div>


		)
	}
}