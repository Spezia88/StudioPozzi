import React,{ Component } from 'react';

import {Modal,Button,Glyphicon,Grid,Row,Col } from 'react-bootstrap';




class ModalContatti extends Component {
    constructor() {
      super();
      this.state = {showModal: false};
      this.close = this.close.bind(this);
      this.open = this.open.bind(this);
    }
    

  	close() {
    	this.setState({ showModal: false });
 	}

  	open() {
    	this.setState({ showModal: true });
  	}

    render() {
     
      return (
	      	<div style={{display:"inline"}}>
	            <Button bsClass="customButton" bsSize="large"  >
	          		{this.props.email}
	        	</Button>

		        <Modal show={this.state.showModal} onHide={this.close}>
		          <Modal.Header >
		            <Modal.Title>{this.props.nomeCompleto}</Modal.Title>
		          </Modal.Header>
		          <Modal.Body>
		           
			            		<h3 style={{textAlign:'left'}}><Glyphicon glyph="glyphicon glyphicon-earphone" /> Telefono: </h3>
			            	
			            		<p>{this.props.telefono}</p>
			            
			             <hr />
			          
			            		<h3 style={{textAlign:'left'}}><Glyphicon glyph="glyphicon glyphicon-envelope" /> Email: </h3>
			            	
			            		<p>{this.props.email}</p>
			            
			             <hr />
			            
			            		<h3 style={{textAlign:'left'}}><Glyphicon glyph="glyphicon glyphicon-print" /> Fax: </h3>
			            	
			            		<p>{this.props.fax}</p>
			            	
		            

		           

		            
		          </Modal.Body>
		          <Modal.Footer>
		            <Button bsClass="customButton"  bsSize="large" onClick={this.close}>Chiudi</Button>
		          </Modal.Footer>
		        </Modal>
	    	</div>
    )
  }
}

export default ModalContatti;