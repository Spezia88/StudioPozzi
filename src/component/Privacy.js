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


export default class Privacy extends Component{

	render(){

		return(
				<div>
					<TitleBanner title="PRIVACY" />
					<Grid>
						<Col lg={12} >
							<p>Lo <strong>STUDIO POZZI - Dottori Commercialisti Associati</strong>, La informa che per quanto riguarda la tutela della privacy i dati personali che la riguardano (notizie anagrafiche e fiscali), da Lei forniti direttamente pe l'espletamento di incarichi professionali o per altri scopi, sono trattati esclusivamente per l'adempimento di obblighi previsti dalla normativa vigente, per finalità strettamente connesse alla gestione dei rapporti con la SV.</p><br/>
							<p>Il rifiuto di fornire in tutto o in parte i Suoi dati personali (ad esempio Codice Fiscale ovvero dati anagrafici e identificativi) potrà comportare la mancata attivazione o la sospensione dei rapporti intercorrenti per i quali i dati sono richiesti come elementi informativi essenziali.</p><br/>
							<p>Inoltre gli scopi del trattamento riguardano anche gli adempimenti di carattere amministrativo (registrazione dei dati a fini gestionali o di fatturazione) previsti da normative nazionali e regionali.</p><br/>
							<p>I dati vengono registrati e conservati sia in forma informatizzata, sia in forma cartacea.</p><br/>
							<p><strong>All'esterno dello Studio</strong> i dati vengono comunicati esclusivamente ai seguenti partner: consulenti del lavoro, finanziari ed economici, banche, associazioni o enti eventualmente autorizzati. </p><br/>
							<p><strong>All'interno dello Studio</strong> i dati possono essere conosciuti dai titolari e dagli incaricati dell'Ufficio Amministrativo/Contabile.</p><br/>
							<p>Riportiamo di seguito l'estratto dell'articolo 7 Dlgs 196/2003, per ricordarLe che può esercitare nei nostri confronti i seguenti diritti:</p><br/>
							<ul>
								<li>ottenere la conferma dell'esistenza di dati personali che La riguardano, anche se non ancora registrati, e la comunicazione in forma intelligibile </li>
								<li>ottenere l'indicazione dell'origine dei dati personali, nonché delle finalità e modalità del trattamento</li>
								<li>ottenere l'indicazione della logica applicata nei trattamenti effettuati con l'ausilio di strumenti elettronici </li>
								<li>ottenere l'aggiornamento, la rettificazione ovvero, quando vi ha interesse, l'integrazione dei dati </li>
								<li>ottenere la cancellazione, la trasformazione in forma anonima o il blocco dei dati trattati in violazione di legge </li>
								<li>ottenere la cancellazione, la trasformazione in forma anonima o il blocco dei dati di cui non è necessaria la conservazione, in relazione agli scopi per i quali i dati sono stati raccolti o successivamente trattati </li>
								<li>ottenere l'attestazione che l'aggiornamento, la rettificazione, l'integrazione, la cancellazione, la trasformazione in forma anonima o il blocco sono stati portati a conoscenza, anche per quanto riguarda il contenuto, di coloro ai quali i dati sono stati comunicati o diffusi, tranne che nei casi in cui tale adempimento si riveli impossibile o comporti un impiego di mezzi manifestamente sproporzionato rispetto al diritto tutelato </li>
								<li>opporsi, in tutto o in parte, per motivi legittimi, al trattamento dei dati personali che La riguardano, ancorché pertinenti allo scopo della raccolta.</li>
							</ul>
							<p><strong>Titolare del trattamento</strong>: STUDIO POZZI - DOTTORI COMMERCIALISTI ASSOCIATI.</p>
						</Col>
					</Grid>
				</div>


		)
	}
}