import React,{ Component } from 'react';

//import  '../css/Associati.css';
import TitleBanner from './TitleBanner';
import Span from './Span.js';
import { ImageFromStorage } from 'react-firebase-storage-connector';
import {Grid,Row,Col,Clearfix,Glyphicon,Button } from 'react-bootstrap';

import firebase from 'firebase';
import '../css/Contatti.css';
//import database from '../database.js';
import {getContatti,deleteContatto,addContatto,saveContatti} from '../remote_storage';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import GoogleMapReact from 'google-map-react';
import { Link,NavLink } from 'react-router-dom';
import {removeIndexFromArray} from '../js/common.js';
import ButtonGroup from './Admin/ButtonGroup.js';
import Aggiungi from './Admin/Aggiungi.js';






const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', 
    
    height: 110, width: 110, top: -50, left: -30,    
  }}>
    <ImageFromStorage storageRef={ firebase.storage().ref('image').child('logoMobile.png')} alt='logo'  />
    <p style={{  color: 'darkblue', fontSize:'large'}}>{text}</p>
   
  </div>
);



class SimpleMap extends Component {
  

	constructor(props) {
		super(props);

		this.state={
			 center:{lat: props.lat, lng: props.lng},
			 zoom:props.zoom
		}
		
	}

  render() {
    return (
       <GoogleMapReact
       bootstrapURLKeys={{
							key: 'AIzaSyDtA_GYollzNH2BCAvTAYY8vDIYgYgO9UE',
							language: 'it'
										    
						}} 
        center={this.state.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent 
          lat={this.props.lat} 
          lng={this.props.lng} 
          text={'Studio Pozzi'} 
        />
      </GoogleMapReact>
    )
  }
}

class Sede extends Component{
		

		constructor(props) {
					super(props);
					this.state={
							  email: props.email,
			                  email_certificata: props.email_certificata,
			                  fax:props.fax,
			                  indirizzo:props.indirizzo,
			                  lat:props.lat,
			                  lng:props.lng,
			                  luogo:props.luogo,
			                  telefono:props.telefono,
			                  titolo:props.titolo
					}
					this.handleChange=this.handleChange.bind(this);
					//this.handleEliminaDocumento=this.handleEliminaDocumento.bind(this);
		}

		handleChange(event){
					
					
					let property=event.target.title;
					let value=event.target.value;
					this.setState({
						[property]:value
					})
					
					this.props.handleChangeContatto(this.props.index,property,value);
		}
				
		render(){
					let Email,EmailCert,Fax,Indirizzo,Lat,Lng,Luogo,Telefono,Titolo,Elimina;
					
					if(this.props.editMode){
						
						Elimina=  <Button onClick={()=>this.props.deleteContatto(this.props.index)} bsStyle="danger">Elimina</Button>;
						Email=<input type="text" defaultValue={this.state.email} onChange={this.handleChange} title="email" />;
						EmailCert=<input type="text" defaultValue={this.state.luogo} onChange={this.handleChange} title="emailCert" />;
						Fax=<input type="text" defaultValue={this.state.fax} onChange={this.handleChange} title="fax" />;
						Indirizzo=<input type="text" defaultValue={this.state.indirizzo} onChange={this.handleChange} title="indirizzo" />;
						
						Luogo=<input type="text" defaultValue={this.state.luogo} onChange={this.handleChange} title="luogo"/>;
						Telefono=<input type="text" value={this.state.telefono} onChange={this.handleChange} title="telefono"/>;
						Titolo= <input type="text" value={this.state.titolo} onChange={this.handleChange} title="titolo" />;
					}
					else{
						
						Email=<p style={{margin:'auto'}}><Glyphicon glyph="glyphicon glyphicon-envelope" /> {this.state.email}</p>;
						EmailCert=<p style={{margin:'auto'}}><Glyphicon glyph="glyphicon glyphicon-envelope" /> {this.state.email_certificata}</p>;
						Fax=<p style={{margin:'auto'}}><Glyphicon glyph="glyphicon glyphicon-print" /> {this.state.fax}</p>;
						Indirizzo=<p style={{margin:'auto'}}>{this.state.indirizzo}</p>;
					
						Luogo=<h4 className="sede">{this.state.luogo.toUpperCase()}</h4>;
						Telefono=<p style={{margin:'auto'}}><Glyphicon glyph="glyphicon glyphicon-earphone" /> {this.state.telefono}</p>;
						Titolo= <h3 className="propertySede">{this.state.titolo.toUpperCase()}</h3>;
					}
			

			return(

				<Row>
	    		
	    				
	    				<Col lg={6} xs={12} > 
	    					<div className="sedeContainer">
	    						{Luogo}
	    						<Span />
	    					</div>
	    					<div className="propertyContainer">
				    			{Titolo}
				    			{Indirizzo}
				    		</div>
				    		<div className="propertyContainer">
				    			<h3 className="propertySede">TELEFONO</h3>
				    			{Telefono}
				    		</div>
	    					<div className="propertyContainer">
				    			<h3 className="propertySede">FAX</h3>
				    			{Fax}
				    		</div>
	    					<div className="propertyContainer">
				    			<h3 className="propertySede">EMAIL</h3>
				    			{Email}
				    		</div>
	    					<div className="propertyContainer">
				    			<h3 className="propertySede">EMAIL CERTIFICATA</h3>
				    			{EmailCert}
				    		</div>
	    					
				    	</Col>
				    
				    	<Col lg={6} xs={12}> 
				    		<div style={{width: '100%', height: '70vh',margin:'auto',marginTop:'10vh'}}>
				    			<SimpleMap lat={this.state.lat} lng={this.state.lng} zoom={16} />
			    			</div>
		    			</Col> 
		    			<p>{Elimina}</p>
		    			<div>
							<span  style={{marginBottom:'12vh',marginTop:'12vh',borderStyle: "solid", borderBottomWidth: "2px", borderColor: "rgb(210, 209, 217)", width: "100%", float: "left"}}></span>
						</div>
	   			</Row>
	   		)
	   	
}};



class Contatti extends Component{
	

	constructor(props) {
		super(props);
		this.state={
			  sedi:[],
			  editMode:false
		}
		this.handleAnnulla=this.handleAnnulla.bind(this);
		this.handleSave=this.handleSave.bind(this);
	}

	componentWillMount() {
		     this.bindAsArray(getContatti(), "sedi");
	}


	deleteContatto(index){
			
				deleteContatto(index);
				window.scrollTo(0, 0);

	}
	handleAnnulla(){
			this.setState({
					editMode:!this.state.editMode
					

			})
	}
	handleChangeContatto(index,property,e){
			
			
			let tmp=this.state.sedi;
			
			tmp[index][property]=e;
			
			this.setState({
							sedi:tmp
			})
			
	}
	handleSave(){
			

			if(this.state.editMode)
				saveContatti(this.state.sedi);
			this.setState({
					editMode:!this.state.editMode
					

			})
	}

	render() {

		const _this=this;
		let ListSedi=this.state.sedi.map((sedi,index)=>{
				
				
				
				return(
					    	
					   	<Col xs={12} sm={12} md={12} lg={12} key={index}>			
					    	<Sede {...sedi} key={index} editMode={this.state.editMode}  index={index} adminMode={this.props.adminMode} deleteContatto={_this.deleteContatto.bind(_this)} handleChangeContatto={_this.handleChangeContatto.bind(_this)}/>
					    </Col>
					    	
				)
			
		});

		
		return(
										
						
							<div>
					    		<TitleBanner title="CONTATTI" adminMode={this.props.adminMode}/>
					    		<Grid>
					    			
									<Row >
					    	      	 	{ListSedi}
					    	       	</Row>
					    		<ButtonGroup editMode={this.state.editMode} adminMode={this.props.adminMode} handleSave={this.handleSave} handleAnnulla={this.handleAnnulla}/>
								<Aggiungi  editMode={this.state.editMode} adminMode={this.props.adminMode} link='/admin/nuovocontatto' />
					    		</Grid>
					    		
					    	</div>
							
						
		)

		

	 }



}

reactMixin(Contatti.prototype, ReactFireMixin)

export default Contatti;
