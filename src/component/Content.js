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
import {AuthUser,ROLE_ADMIN,ROLE_CLIENT} from '../js/common';
import Login from './Login';
import {Route,Switch,Redirect} from 'react-router-dom';


//import HomeAdmin from './Admin/Home';

const PrivateRoute = ({ component: Component,authRole, ...rest}) =>{
						
						
						return (
						  
						  
						  <Route {...rest} render={props =>{ 
						  						
						  							
												   	return(	 AuthUser.isAuthenticated && (AuthUser.role===authRole || AuthUser.role===ROLE_ADMIN) ? (
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
			   
			        <Route  path='/notelegali' component={NoteLegali} adminMode={false}/>
	             	<Route  path='/privacy' component={Privacy} adminMode={false}/>
	             	<Route  path='/disclaimer' component={Disclaimer} adminMode={false}/>
			        <Route  path='/login'  render={(props)=><Login  {...props} /> } />
		
			        <Route path='/esecuzioni'  component={Esecuzioni} adminMode={false}/>
			        <Route path='/link' component={ListSiti} adminMode={false}/>
			        <Route path='/contatti' component={Contatti} adminMode={false}/>
			        <Route path='/informativacookie' component={InformativaCookie} adminMode={false}/>
			        <Route path='/attivita/*' render={(props)=><SideBarAttivita adminMode={false} {...props} /> } />
			     	<Route path="/attivita" exact component={Attivita} adminMode={false}/>	
			     	<Route path="/servizialcliente" exact component={ServiziAlCliente} adminMode={false}/>	
			     	
			     
			     	<PrivateRoute  path="/approfondimenti"  component={Circolari} authRole={ROLE_CLIENT}/> 
			     	
			        
			    </Switch>
			</div>

			)
	}



}

export default Content;

export {PrivateRoute};