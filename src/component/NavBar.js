import React,{ Component } from 'react';
import  '../css/NavBar.css';
import { NavLink } from 'react-router-dom';

class NavBar extends Component{
	
	constructor(props) {
		super(props);
		this.openMobileNav = this.openMobileNav.bind(this);		
	}
	
	openMobileNav(e){
		
		var x = document.getElementById("myTopnav");
	    if (x.className === "nav") {
	        x.className += " responsive";
	    } else {
	        x.className = "nav";
	    }
	    var y = document.getElementsByClassName('containerNav');
	  
	    y[0].classList.toggle("change");
	}

	render(){
		
	
		return(

			<div className="nav" id="myTopnav" ref="navbar">
		         <div id='logo' />
		         <div className="containerNav" onClick={this.openMobileNav}>
		            <div className="bar1"></div>
		            <div className="bar2"></div>
		            <div className="bar3"></div>
		          </div>
		      

		      
		        <NavLink activeClassName="selected"  exact to="/" onClick={this.openMobileNav}>HOME</NavLink>
		        <NavLink activeClassName="selected" to="/studio" onClick={this.openMobileNav}>LO STUDIO</NavLink>
		        <NavLink activeClassName="selected" to="/attivita" onClick={this.openMobileNav}>ATTIVITA'</NavLink>
		        <NavLink activeClassName="selected" to="/approfondimenti" onClick={this.openMobileNav}>APPROFONDIMENTI</NavLink>
		        <NavLink activeClassName="selected" to="/clienti" onClick={this.openMobileNav}>CLIENTI E REFERENZE</NavLink>
		        <NavLink activeClassName="selected" to="/link" onClick={this.openMobileNav}>SITI PER LA PROFESSIONE</NavLink>
		        <NavLink activeClassName="selected" to="/servizialcliente" onClick={this.openMobileNav}>SERVIZI AL CLIENTE</NavLink>
		        <NavLink activeClassName="selected" to="/contatti" onClick={this.openMobileNav}>CONTATTI</NavLink>

		      
		     	
		     </div>
		)
	}
}

export default NavBar;


