import React,{ Component } from 'react';
//import  '../css/Associati.css';
import TitleBanner from './TitleBanner';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import { NavLink,Route,Redirect } from 'react-router-dom';
import Home from './Home';
import Esecuzioni from './Esecuzioni';
import {PrivateRoute} from './Content';
import {signOutCircolari} from '../remote_storage';
//import Studio from './Admin/Studio';
import Associati,{Storia} from './Associati';
import NewEsecuzione from './Admin/NewEsecuzione';
import NewContatto from './Admin/NewContatto';
import NewProfessionista from './Admin/NewProfessionista';
import NoteLegali from './NoteLegali';
import Contatti from './Contatti';
import Circolari from './Circolari';
import SideBarAttivita from './SideBarAttivita';


export default class AdminConsole extends Component{
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		 window.scrollTo(0, 0);
	}
	handleClickButton(){

		signOutCircolari().then(function() {
  							debugger;
  						 <Redirect to={{
											
											pathname: '/'
													
									   }}/>

		})
		.catch(function(error) {
  									console.log(error);
							});
	}



	render(){

		return(
			<div style={{marginBottom:'6000px'}}>
				<TitleBanner title="AREA RISERVATA" />
				<Row>
						<Col lg={10} >
						</Col>
						<Col lg={1}>
							 <Button onClick={this.handleClickButton} bsStyle="primary">Logout</Button>
						</Col>
						<Col lg={1}>
							 
						</Col>
				</Row>	
					<Col lg={2} >
						<ul>
						  <li className="attivitaMenu" key={1}><NavLink activeClassName="attivitaSelected"  key={1} exact to="/admin" >HOME</NavLink></li>
						  <li className="attivitaMenu" key={2}><NavLink activeClassName="attivitaSelected"  key={2} exact to="/admin/studio/professionisti" >PROFESSIONISTI</NavLink></li>
						
						  <li className="attivitaMenu" key={3}><NavLink activeClassName="attivitaSelected"  key={3} exact to="/admin/attivita" >ATTIVITA</NavLink></li>
						  <li className="attivitaMenu" key={4}><NavLink activeClassName="attivitaSelected"  key={4} exact to="/admin/circolari" >CIRCOLARI</NavLink></li>
						  <li className="attivitaMenu" key={5}><NavLink activeClassName="attivitaSelected"  key={5} exact to="/admin/esecuzioni" >ESECUZIONI IMMOBILIARI</NavLink></li>
						  <li className="attivitaMenu" key={6}><NavLink activeClassName="attivitaSelected"  key={6} exact to="/admin/contatti" >CONTATTI</NavLink></li>
						  <li className="attivitaMenu" key={7}><NavLink activeClassName="attivitaSelected"  key={7} exact to="/admin/notelegali" >NOTE LEGALI</NavLink></li>
						  
						</ul>
					</Col>
					<Col lg={10} >
						
						  <Route exact path="/admin" render={(props)=><Home adminMode={true} {...props}  />}  />
                		  <Route path="/admin/studio"   render={(props)=><Associati adminMode={true} {...props}  />}/>
                		 
                		  <Route path="/admin/circolari"  render={(props)=><Circolari adminMode={true} {...props} />}  auth={this.props.auth}/>
                		  <Route path="/admin/attivita"   render={(props)=><SideBarAttivita adminMode={true} {...props} />}  />
                		  <Route path="/admin/esecuzioni"   render={(props)=><Esecuzioni adminMode={true} {...props} />}  auth={this.props.auth}/>
                		  <Route path="/admin/nuovaesecuzione"   render={(props)=><NewEsecuzione adminMode={true} {...props} />}  auth={this.props.auth}/>
                		  <Route path="/admin/contatti"   render={(props)=><Contatti adminMode={true} {...props} />}  auth={this.props.auth}/>
                		  <Route path="/admin/nuovocontatto"   render={(props)=><NewContatto adminMode={true} {...props} />}  auth={this.props.auth}/>
                		  <Route path="/admin/nuovoprofessionista"   render={(props)=><NewProfessionista adminMode={true} {...props} />}  auth={this.props.auth}/>
                		  <Route path="/admin/notelegali"   render={(props)=><NoteLegali adminMode={true} {...props} />}  auth={this.props.auth}/>
                		
					</Col>
					
			</div>
		)
	}

}