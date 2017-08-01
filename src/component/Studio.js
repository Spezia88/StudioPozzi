import React,{ Component } from 'react';
//import  '../css/Associati.css';
import TitleBanner from './TitleBanner';
import { ImageFromStorage } from 'react-firebase-storage-connector';
import {Grid,Row,Col,Media} from 'react-bootstrap';
import firebase from 'firebase';
import  '../css/Studio.css';

const Studio=()=> {

	return(


			<div>
				<TitleBanner title="LO STUDIO" />
				<Grid>
				
				<h4>La Storia</h4>
				<p>Lo STUDIO POZZI, costituito in associazione professionale ai sensi della legge 23 novembre 1939 n.1815, svolge attività di assistenza e consulenza in materia tributaria, contabile, del lavoro, societaria, aziendale ed amministrativa</p>  
				
				  <Media>
				     <Media.Left>
				     
				        <i className="fa fa-balance-scale fa-5x"></i>
				     </Media.Left>
				      <Media.Body>
				        <Media.Heading>Consulenza Tributaria</Media.Heading>
				    
				        
				        <ul>
				        	<li>Tenuta e scritturazione dei libri contabili </li>
				        	<li>Risposte e pareri motivati in materia tributaria. Assistenza fiscale specifica relativa all'imposizione diretta, indiretta e sostitutiva</li>
				        	<li>Assistenza nei rapporti con l'Amministrazione Finanziaria ed in tutti gli ambiti del contenzioso tributario</li>
				        </ul>
				        
				     
				         
				       
				  
				       
				      
				      </Media.Body>
				   </Media>
				    
				    <Media>
				     <Media.Left>
				     
				        <i className="fa fa-pencil-square-o fa-5x"></i>
				     </Media.Left>
				      <Media.Body>
				        <Media.Heading>Consulenza Contabile e del Lavoro</Media.Heading>
				          <ul>
				        	<li>Consulenza ed assistenza nell'interpretazione e nell'applicazione della normativa fiscale e connessi adempimenti quali la predisposizione e trasmissione di tutte le dichiarazioni fiscali</li>
				        	<li>Consulenza ed assistenza nella formazione di bilanci ordinari di impresa in tutti i loro contenuti documentali (note integrative, relazioni sulla gestione) in conformità e rispetto della vigente normativa e della migliore prassi in materia</li>
				        	<li>Attraverso una struttura dedicata, costituita anch'essa in associazione professionale, consulenza del lavoro e tenuta e scritturazione libri paga</li>
				        	
				          </ul>
				     </Media.Body>
				   </Media>

				    <Media>
				     <Media.Left>
				     
				        <i className="fa fa-file-text fa-5x"></i>
				     </Media.Left>
				      <Media.Body>
				        <Media.Heading>Consulenza Societaria e Contrattualistica</Media.Heading>
				          <ul>
				        	<li>Assistenza in fase di costituzione e nella gestione ordinaria delle società</li>
				        	<li>Consulenza negli adempimenti societari e nei rapporti tra i soci, tra questi e la società, tra società ed organi sociali</li>
				        	<li>Assistenza contrattuale per cessione/acquisizione di aziende e di partecipazioni sociali.</li>
				        	<li>Predisposizione e stipula di atti aventi ad oggetto la compravendita di partecipazioni in società a responsabilità limitata</li>
				        	<li>Consulenza ed assistenza per operazioni straordinarie: ristrutturazioni, riorganizzazioni societarie, liquidazioni, conferimenti, fusioni, trasformazioni, scissioni, affitti d'azienda, passaggi generazionali</li>
				        	<li>Consulenza contrattualistica e di diritto commerciale in genere</li>
				        </ul>
				     </Media.Body>
				   </Media>
				    <Media>
				     <Media.Left>
				     
				        <i className="fa fa-briefcase fa-5x"></i>
				     </Media.Left>
				      <Media.Body>
				        <Media.Heading>Consulenza Aziendale</Media.Heading>
				           <ul>
				        	<li>Analisi della struttura finanziaria e degli indici di bilancio, predisposizione di report</li>
				        	<li>Valutazione di aziende e partecipazioni. Predisposizione e asseverazione di perizie di stima (civilistiche e fiscali)</li>
				        	<li>Assistenza alle imprese nelle situazioni di crisi (ristrutturazioni del debito, accordi stragiudiziali e giudiziali)</li>
				        </ul>
				     </Media.Body>
				   </Media>
				   <Media>
				     <Media.Left>
				     
				        <i className="fa fa-gavel fa-5x"></i>
				     </Media.Left>
				      <Media.Body>
				        <Media.Heading>Controllo e Revisione Legale</Media.Heading>
				          	<ul>
				      		<li>Gli associati possiedono i requisiti di legge per poter svolgere incarichi e funzioni di sindaco e revisore legale dei conti in società ed enti pubblici.</li>
				      	</ul>
				     </Media.Body>
				   </Media>
				      <Media>
				     <Media.Left>
				     
				        <i className="fa fa-building fa-5x"></i>
				     </Media.Left>
				      <Media.Body>
				        <Media.Heading>Servizi alle Imprese</Media.Heading>
				          	 <ul>
					        	<li>Domiciliazione sedi societarie presso i nostri uffici di Morbegno (SO) e Milano </li>
					        	<li>Visure e certificati camerali e visure catastali</li>
					        	<li>Attivazione di caselle Posta Elettronica Certificata (PEC)</li>
					        	<li>Rilascio di Smart Card per Firma Elettronica</li>
				        	</ul>
				     </Media.Body>
				   </Media>
				       
				   </Grid>
			</div>


	)



}


export default Studio;