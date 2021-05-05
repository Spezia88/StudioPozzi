import React,{ Component } from 'react';
//import  '../css/Associati.css';
import TitleBanner from './TitleBanner';
import {Row,Col,Button} from 'react-bootstrap';
import { NavLink,Route,withRouter } from 'react-router-dom';
import Home from './Home';
import Clienti from './Clienti';
import {firebaseAuth} from '../database';
//import Studio from './Admin/Studio';
import Associati from './Associati';
import NewCliente from './Admin/NewCliente';
import NewContatto from './Admin/NewContatto';
import NewProfessionista from './Admin/NewProfessionista';
import NoteLegali from './NoteLegali';
import Contatti from './Contatti';
import Circolari from './Circolari';
import SideBarAttivita from './SideBarAttivita';
import {AuthUser} from '../js/common';

class AdminConsole extends Component{
	constructor(props) {
		super(props);
		this.signOutUser=this.signOutUser.bind(this);
	}
	componentDidMount() {
		
		 window.scrollTo(0, 0);
	}
	signOutUser(e){

		e.preventDefault();
		let _this=this;
		firebaseAuth().signOut().then(function() {
			
			console.log('Signed Out Successfull from firebase');
			AuthUser.signout();
			_this.props.history.push("/");
		  }, function(error) {
			console.error('Sign Out Error', error);
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
							 <Button onClick={this.signOutUser} bsStyle="primary">Logout</Button>
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
						  <li className="attivitaMenu" key={5}><NavLink activeClassName="attivitaSelected"  key={5} exact to="/admin/clienti" >CLIENTI E REFERENZE</NavLink></li>
						  <li className="attivitaMenu" key={6}><NavLink activeClassName="attivitaSelected"  key={6} exact to="/admin/contatti" >CONTATTI</NavLink></li>
						  <li className="attivitaMenu" key={7}><NavLink activeClassName="attivitaSelected"  key={7} exact to="/admin/notelegali" >NOTE LEGALI</NavLink></li>
						  
						</ul>
					</Col>
					<Col lg={10} >
						
						  <Route exact path="/admin" render={(props)=><Home adminMode={true} {...props}  />}  />
                		  <Route path="/admin/studio"   render={(props)=><Associati adminMode={true} {...props}  />}/>
                		  <Route path="/admin/circolari"  render={(props)=><Circolari adminMode={true} {...props} />}  />
                		  <Route path="/admin/attivita"   render={(props)=><SideBarAttivita adminMode={true} {...props} />}  />
						  <Route path="/admin/clienti"   render={(props)=><Clienti adminMode={true} {...props} />} />
						  <Route path="/admin/nuovocliente"   render={(props)=><NewCliente adminMode={true} {...props} />}  />
                		  <Route path="/admin/contatti"   render={(props)=><Contatti adminMode={true} {...props} />}/>
                		  <Route path="/admin/nuovocontatto"   render={(props)=><NewContatto adminMode={true} {...props} />}  />
                		  <Route path="/admin/nuovoprofessionista"   render={(props)=><NewProfessionista adminMode={true} {...props} />}  />
                		  <Route path="/admin/notelegali"   render={(props)=><NoteLegali adminMode={true} {...props} />} />
                		
					</Col>
					
			</div>
		)
	}

}

export default withRouter(AdminConsole);