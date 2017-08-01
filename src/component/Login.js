import React,{ Component } from 'react';
//import  '../css/Associati.css';
import TitleBanner from './TitleBanner';
import {Grid,Row,Col} from 'react-bootstrap';
import {login} from '../remote_storage.js'
import {Redirect} from 'react-router-dom';
import IframeRatio from './IframeRatio';


function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

export default class Login extends Component {
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
    if(this.props.location.state.from.pathname==="/admin"){
	    login(this.username.value, this.pw.value)
	    .catch((error) => {
	          _this.setState({
	          				 loginMessage:'Username/password errati'
	          })
	       })
  	}
  	else{

  		 login(this.username.value+'@gmail.com', this.pw.value)
	    .catch((error) => {
	          _this.setState({
	          				 loginMessage:'Username/password errati'
	          })
	       })
  	}
  }
  
  render () {
  	
  	const  {from} = this.props.location.state || { from: { pathname: '/' } }
  	//Check wich authentication i have to control: admin or circolari

  	if(from.pathname==="/admin"){
  	
  		//Check if the user is authenticated
	  	if (this.props.authAdmin) {
	  	  console.log("Entro in redirect");
	      return (
	        <Redirect to='/admin'/>
	      )
	    }

	    return (
	     	 <div>
		        <TitleBanner title="AREA RISERVATA" />

		        <Grid>
					
					<Col lg={3}>
				    </Col>
				    <Col lg={6}>
					    <h3 style={{textAlign:"center"}}>LOGIN AREA RISERVATA</h3>
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
	//authentication from circolari
	else{
			//Check if the user is authenticated
	  		if (this.props.authCircolari) {
	  	  		
	      		return (
	        		<Redirect to='/approfondimenti'/>
	      		)
	    	}
			return(
						<div>
					        <TitleBanner title="APPROFONDIMENTI" />
					        <IframeRatio />
					        <Grid>
								<p>Le circolari vengono predisposte ed automaticamente inviate ai clienti dello studio. Per poter accedere all'area riservata vogliate cortesemente inviare una richiesta via mail al seguente indirizzo:<br/>info@studiopozzicommercialisti.it</p>
								<Col lg={3}>
							    </Col>
							    <Col lg={6}>
								    <h3 style={{textAlign:"center"}}>LOGIN CLIENTI</h3>
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
}