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
				<div>
					<TitleBanner title="NOTE LEGALI" />
					<Grid>
						<Col lg={12} >
							<p><strong>Sede Legale: </strong> 20144 Milano - Via Del Caravaggio n. 3</p><br/>
							<p><strong>Studio e sede amministrativa: </strong> 23017 Morbegno - Via Rivolta n. 36</p><br/>
							<p><strong>Codice fiscale: </strong> 05093720968</p><br/>
							<p><strong>Partita IVA: </strong> IT 05093720968</p><br/>
							<p><strong>Telefono: </strong> +39 (0)342 612383</p><br/>
							<p><strong>Fax: </strong> +39 (0)342 613811 </p><br/>
							<p><strong>Email: </strong> morbegno@studiopozzicommercialisti.it</p><br/>
							<p><strong>Email certificata: </strong> morbegno@pec.studiopozzicommercialisti.it</p><br/><br/>
							<p>© 2009-{annoCorrente.getFullYear()}, STUDIO POZZI - Dottori Commercialisti Associati</p>
						</Col>
					</Grid>
				</div>


		)
	}
}