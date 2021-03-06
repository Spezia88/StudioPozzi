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


export default class InformativaCookie extends Component{

	
	render(){
		const htmlCookie=`
					<h1>Testo informativa estesa sull'uso dei cookie</h2>

					<p>Il presente sito web utilizza cookie  tecnici per garantire il corretto funzionamento delle procedure e migliorare l'esperienza di uso delle applicazioni online. Il presente documento fornisce informazioni sull'uso dei cookie e di tecnologie similari, su come sono utilizzati dal sito e su come gestirli.</p>

					<h4>Definizioni</h4>

					<p>I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, ove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. I cookie delle c.d. "terze parti" vengono, invece, impostati da un sito web diverso da quello che l'utente sta visitando. Questo perché su ogni sito possono essere presenti elementi (immagini, mappe, suoni, specifici link a pagine web di altri domini, ecc.) che risiedono su server diversi da quello del sito visitato.</p>

					<h3>Tipologie di cookie</h4>

					<p>In base alle caratteristiche e all'utilizzo dei cookie si possono distinguere diverse categorie:</p>

					<p>- Cookie tecnici. I cookie tecnici sono quelli utilizzati al solo fine di "effettuare la trasmissione di una comunicazione su una rete di comunicazione elettronica, o nella misura strettamente necessaria al fornitore di un servizio della società dell'informazione esplicitamente richiesto dall'abbonato o dall'utente a erogare tale servizio" (cfr. art. 122, comma 1, del Codice).Essi non vengono utilizzati per scopi ulteriori e sono normalmente installati direttamente dal titolare o gestore del sito web. Possono essere suddivisi in cookie di navigazione o di sessione, che garantiscono la normale navigazione e fruizione del sito web; cookie analytics, assimilati ai cookie tecnici laddove utilizzati direttamente dal gestore del sito per raccogliere informazioni, in forma aggregata, sul numero degli utenti e su come questi visitano il sito stesso; cookie di funzionalità, che permettono all'utente la navigazione in funzione di una serie di criteri selezionati al fine di migliorare il servizio reso allo stesso. Per l'installazione di tali cookie non è richiesto il preventivo consenso degli utenti, mentre resta fermo l'obbligo di dare l'informativa ai sensi dell'art. 13 del Codice, che il gestore del sito, qualora utilizzi soltanto tali dispositivi, potrà fornire con le modalità che ritiene più idonee.</p>


					<p>- Cookie di profilazione. I cookie di profilazione sono volti a creare profili relativi all'utente e vengono utilizzati al fine di inviare messaggi pubblicitari in linea con le preferenze manifestate dallo stesso nell'ambito della navigazione in rete. In ragione della particolare invasività che tali dispositivi possono avere nell'ambito della sfera privata degli utenti, la normativa europea e italiana prevede che l'utente debba essere adeguatamente informato sull'uso degli stessi ed esprimere così il proprio valido consenso. Ad essi si riferisce l'art. 122 del Codice laddove prevede che "l'archiviazione delle informazioni nell'apparecchio terminale di un contraente o di un utente o l'accesso a informazioni già archiviate sono consentiti unicamente a condizione che il contraente o l'utente abbia espresso il proprio consenso dopo essere stato informato con le modalità semplificate di cui all'articolo 13, comma 3" (art. 122, comma 1, del Codice). Il presente sito non utilizza cookie di profilazione.</p>


					<h3>Cookie analytics</h4>

					<h4>WebTrends</h4>

					<p>Al solo fine di monitorare e migliorare le prestazioni del sito ci si avvale di un prodotto di mercato di analisi statistica per la rilevazione degli accessi al sito. Esso può ricorrere all'utilizzo di cookies, permanenti e non, allo scopo di raccogliere informazioni statistiche e sui "visitatori unici" del sito. I cookies, definiti come "Unique Visitor Cookies", contengono un codice alfanumerico che identifica i computer di navigazione, senza tuttavia alcuna raccolta di dati personali.</p>

					<h4>Google Analytics</h4>

					<p>Il sito include anche componenti trasmesse da Google Analytics, un servizio di analisi del traffico web fornito da Google, Inc. ("Google"). Tali cookie sono usati al solo fine di monitorare e migliorare le prestazioni del sito. Per ulteriori informazioni, si rinvia al link di seguito indicato:</p>

					<p><a href="https://www.google.it/policies/privacy/partners/">https://www.google.it/policies/privacy/partners/</a></p>

					<p>L'utente può disabilitare in modo selettivo l'azione di Google Analytics installando sul proprio browser la componente di opt-out fornito da Google. Per disabilitare l'azione di Google Analytics, si rinvia al link di seguito indicato:</p>

					<p><a href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</a></p>

					<h3>Durata dei cookie</h4>

					<p>Alcuni cookie (cookie di sessione) restano attivi solo fino alla chiusura del browser o all'esecuzione dell'eventuale comando di logout. Altri cookie "sopravvivono" alla chiusura del browser e sono disponibili anche in successive visite dell'utente. Questi cookie sono detti persistenti e la loro durata è fissata dal server al momento della loro creazione. In alcuni casi è fissata una scadenza, in altri casi la durata è illimitata.</p>

					<h3>Gestione dei cookie</h4>

					<p>L'utente può decidere se accettare o meno i cookie utilizzando le impostazioni del proprio browser. <br>
					Attenzione: con la disabilitazione totale o parziale dei cookie tecnici potrebbe compromettere l'utilizzo ottimale del sito. <br>
					La disabilitazione dei cookie "terze parti" non pregiudica in alcun modo la navigabilità. <br>
					L'impostazione può essere definita in modo specifico per i diversi siti e applicazioni web. Inoltre i browser consentono di definire impostazioni diverse per i cookie "proprietari" e per quelli di "terze parti".
					A titolo di esempio, in Firefox, attraverso il menu Strumenti-&gt;Opzioni-&gt;Privacy, è possibile accedere ad un pannello di controllo dove è possibile definire se accettare o meno i diversi tipi di cookie e procedere alla loro rimozione. In internet è facilmente reperibile la documentazione su come impostare le regole di gestione dei cookies per il proprio browser, a titolo di esempio si riportano alcuni indirizzi relativi ai principali browser: <br> <br>
					Chrome: <a href="https://support.google.com/chrome/answer/95647?hl=it">https://support.google.com/chrome/answer/95647?hl=it</a> <br>
					Firefox: <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie">https://support.mozilla.org/it/kb/Gestione%20dei%20cookie</a> <br>
					Internet Explorer: <a href="http://windows.microsoft.com/it-it/windows7/how-to-manage-cookies-in-internet-explorer-9">http://windows.microsoft.com/it-it/windows7/how-to-manage-cookies-in-internet-explorer-9</a> <br>
					Opera: <a href="http://help.opera.com/Windows/10.00/it/cookies.html">http://help.opera.com/Windows/10.00/it/cookies.html</a> <br>
					Safari: <a href="http://support.apple.com/kb/HT1677?viewlocale=it_IT">http://support.apple.com/kb/HT1677?viewlocale=it_IT</a></p>
				`
		return(
				<div style={{marginBottom:'250px'}}>
					<TitleBanner title="INFORMATIVA COOKIE" />
					<Grid>
						<Col lg={12} >
								<div className="content" dangerouslySetInnerHTML={{__html: htmlCookie}}></div>
						</Col>
					</Grid>
				</div>


		)
	}
}