import React,{ Component } from 'react';

//import  '../css/Associati.css';
import TitleBanner from './TitleBanner';
import { ImageFromStorage } from 'react-firebase-storage-connector';
import {Grid,Row,Col,Clearfix,Glyphicon } from 'react-bootstrap';

import firebase from 'firebase';
import '../css/Contatti.css';
//import database from '../database.js';
import {getContatti} from '../remote_storage';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', 
    
    height: 110, width: 110, top: -50, left: -30,    
  }}>
    <ImageFromStorage storageRef={ firebase.storage().ref('image').child('logoMobile.png')} alt='logo'  />
    <p style={{  color: 'darkblue', fontSize:'large'}}>{text}</p>
   
  </div>
);

class SimpleMap extends React.Component {
  

	constructor(props) {
		super(props);
		
	}
  	static defaultProps = {
    	center: {lat: 46.1338521, lng: 9.56571299999996},
    	zoom:16
  	};

  render() {
    return (
       <GoogleMapReact
       bootstrapURLKeys={{
							key: 'AIzaSyDtA_GYollzNH2BCAvTAYY8vDIYgYgO9UE',
							language: 'it'
										    
						}} 
        center={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent 
          lat={46.1338521} 
          lng={9.56571299999996} 
          text={'Studio Pozzi'} 
        />
      </GoogleMapReact>
    )
  }
}


class Contatti extends Component{
	constructor(props) {
		super(props);
		this.state={
			   contatti:{}
		}
		
	}
	componentWillMount() {
		getContatti().then(contatti=>{
		
        this.setState({
            contatti

        })

    });
	}
	render() {
	    return (
	    	<div>
	    		<TitleBanner title="CONTATTI" />
	    		<Grid>
	    			<Row>
	    		
	    			
	    				<Col lg={12} xs={12} > 
				    		<h4>STUDIO E SEDE AMMINISTRATIVA</h4>
				    		<p style={{margin:'auto'}}>{this.state.contatti.studio_sede_amministrativa}</p>
				    		<h4>TELEFONO</h4>
				    		<p style={{margin:'auto'}}><Glyphicon glyph="glyphicon glyphicon-earphone" /> {this.state.contatti.telefono}</p>
				    		<h4>FAX</h4>
				    		<p style={{margin:'auto'}}><Glyphicon glyph="glyphicon glyphicon-print" /> {this.state.contatti.fax}</p>
				    		<h4>EMAIL</h4>
				    		<p style={{margin:'auto'}}><Glyphicon glyph="glyphicon glyphicon-envelope" /> {this.state.contatti.email}</p>
				    		<h4>EMAIL CERTIFICATA</h4>
				    		<p style={{margin:'auto'}}><Glyphicon glyph="glyphicon glyphicon-envelope" /> {this.state.contatti.email_certificata}</p>
				    	</Col>
				    </Row>
				    <Row>
				    	<Col lg={12} xs={12}> 
				    		<div style={{width: '100%', height: '70vh',margin:'auto',marginTop:'10vh'}}>
				    			<SimpleMap />
			    			</div>
		    			</ Col> 
	    			</Row>
	    		
	    		</Grid>
	    	</div>
	    
	    )
	  }



}

reactMixin(Contatti.prototype, ReactFireMixin)

export default Contatti;
