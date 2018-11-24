import React,{ Component } from 'react';
//import  '../css/Associati.css';
import TitleBanner from './TitleBanner';
import {Grid,Col} from 'react-bootstrap';
import {login} from '../remote_storage.js'
import {Redirect} from 'react-router-dom';
import IframeRatio from './IframeRatio';
import {withRouter} from "react-router-dom";
import {AuthUser,ROLE_ADMIN,ROLE_CLIENT} from '../js/common';


class LoginForm extends Component {
  constructor(props) {
  	super(props);
  	this.state={
  		loginMessage:""
  		
  	}
  	this.handleSubmit=this.handleSubmit.bind(this);
  	
  }

  handleSubmit = (e) => {
  	
    e.preventDefault();
		var _this=this;
		let userName=this.username.value;
		debugger;
    if(this.props.location.state.from.pathname!=="/admin"){
		
	    userName=userName+'@gmail.com';
  	}
  

  	login(userName, this.pw.value).catch((error) => {
	          _this.setState({
	          				 loginMessage:'Username/password errati'
	          })
	  		})
  	
  }
  
  render () {
  	
		const  {from} = this.props.location.state || { from: { pathname: '/' } };
		
		let titleSection,infoMsg,titleLogin;
  	//Check wich authentication i have to control: admin or circolari

  	if(from.pathname==="/admin"){
  	
			titleSection="AREA RISERVATA";
			titleLogin="LOGIN AREA RISERVATA";
			infoMsg="";
		}			
		
		//Authentication from circolari
		else{
		
			titleSection="APPROFONDIMENTI";
			titleLogin="LOGIN CLIENTI";
			infoMsg="Le circolari vengono predisposte ed automaticamente inviate ai clienti dello studio. Per poter accedere all'area riservata vogliate cortesemente inviare una richiesta via mail al seguente indirizzo:<br/>info@studiopozzicommercialisti.it";

		}

	    return (
	     	 <div>
		        <TitleBanner title={titleSection} />
						<IframeRatio />
					  
						

		        <Grid>
						<p>{infoMsg}</p>	
					
					<Col lg={3}>
				    </Col>
				    <Col lg={6}>
					    <h3 style={{textAlign:"center"}}></h3>
				        <form onSubmit={this.handleSubmit}>
				          <div className="form-group">
				           
				            <input className="form-control" ref={(username) => this.username = username} placeholder="Username"/>
				          </div>
				          <div className="form-group">
				           
				            <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
				          </div>
				          {
				            this.state.loginMessage &&
				            <div className="alert alert-danger" role="alert">
				              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
				              <span className="sr-only">Errore:</span>
				              &nbsp;{this.state.loginMessage}
				            </div>
				          }
				          <button type="submit" className="btn btn-primary">Login</button>
				        </form>
		       		</Col>
					<Col lg={3}>
					</Col>
				</Grid>
	     	 </div>
	    )
	}
}
		



const Login = withRouter(LoginForm);


export default Login ;