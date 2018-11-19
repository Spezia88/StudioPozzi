import React,{ Component } from 'react';
import  '../css/NavBar.css';
import { NavLink } from 'react-router-dom';

import { ImageFromStorage } from 'react-firebase-storage-connector';
import firebase from 'firebase';
//import { ImageFromStorage } from 'react-firebase-storage-connector';
/*
<div className="tutorialLink">
		        	 <a href="https://www.youtube.com/watch?v=7-9mCy8K890&t=3s">Tutorial Fatturazione in cloud</a>
		        	 <ImageFromStorage storageRef={firebase.storage().ref('image').child("youtube.png")} alt="youtube" className="logoYoutube" />
		        	</div>*/
class NavBar extends Component{
	
	constructor(props) {
		super(props);
		this.openMobileNav = this.openMobileNav.bind(this);	
		//this.handleScroll = this.handleScroll.bind(this);	
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
		        <NavLink activeClassName="selected" to="/esecuzioni" onClick={this.openMobileNav}>ESECUZIONI IMMOBILIARI</NavLink>
		        <NavLink activeClassName="selected" to="/link" onClick={this.openMobileNav}>SITI PER LA PROFESSIONE</NavLink>
		        <NavLink activeClassName="selected" to="/servizialcliente" onClick={this.openMobileNav}>SERVIZI AL CLIENTE</NavLink>
		        <NavLink activeClassName="selected" to="/contatti" onClick={this.openMobileNav}>CONTATTI</NavLink>

		      
		     	
		     </div>
		)
	}
}

export default NavBar;


