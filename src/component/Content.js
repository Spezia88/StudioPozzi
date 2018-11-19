import React, { Component } from 'react';
import Home from './Home';
import Associati from './Associati';
import Esecuzioni from './Esecuzioni';
import ListSiti from './ListSiti';
import Contatti from './Contatti';
import NavBar from './NavBar';
//import Studio from './Studio';
import Circolari from './Circolari';
import Disclaimer from './Disclaimer';
import NoteLegali from './NoteLegali';
import Privacy from './Privacy';
import SideBarAttivita from './SideBarAttivita';
import InformativaCookie from './InformativaCookie';
import Attivita from './Attivita.js';
import ServiziAlCliente from './ServiziAlCliente.js';
import AdminConsole from './AdminConsole';

import Login from './Login';
import {Route,Switch,Redirect} from 'react-router-dom';
import {Grid} from 'react-bootstrap';

//import HomeAdmin from './Admin/Home';

const PrivateRoute = ({ component: Component,auth, ...rest}) =>{
						

						return (
						  
						  
						  <Route {...rest} render={props =>{ 
						  						
						  							
												   	return(	 auth ? (
														       <Component {...props} adminMode={true} />
														    ) : (
														      <Redirect to={{
														        pathname: '/login',
														        state: { from: props.location }
														      }}/>
														    )
														 )	 
													}
							}/>		
						)
 	
 	
}



/*<Route path='approfondimenti/:id' component={CircolariPerAnno} />*/
class Content extends Component{
	constructor(props) {
		super(props);
		
	}
	
	render(){
		return(
			<div>
			
	            
				<Switch>

					<Route exact path='/' render={(props)=><Home adminMode={false} {...props}  />} />
			        <Route path='/studio'  render={(props)=><Associati adminMode={false} {...props}  />}/>
			   
			        <Route  path='/notelegali' component={NoteLegali} />
	             	<Route  path='/privacy' component={Privacy} />
	             	<Route  path='/disclaimer' component={Disclaimer} />
			        <Route  path='/login'  render={(props)=><Login {...this.props} {...props} /> } />
		
			        <Route path='/esecuzioni'  component={Esecuzioni}/>
			        <Route path='/link' component={ListSiti}/>
			        <Route path='/contatti' component={Contatti}/>
			        <Route path='/informativacookie' component={InformativaCookie}/>
			        <Route path='/attivita/*' render={(props)=><SideBarAttivita adminMode={false} {...props} /> } />
			     	<Route path="/attivita" exact component={Attivita} />	
			     	<Route path="/servizialcliente" exact component={ServiziAlCliente} />	
			     	
			     
			     	<PrivateRoute  path="/approfondimenti"  component={Circolari} auth={this.props.authCircolari}/> 
			     	
			        
			    </Switch>
			</div>

			)
	}



}

export default Content;

export {PrivateRoute};