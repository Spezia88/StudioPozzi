import React,{ Component } from 'react';

import {Modal,Button,Glyphicon } from 'react-bootstrap';
import TinyMCE from 'react-tinymce';



class ModalCV extends Component {
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
     	const{cv,handleChange,editMode}=this.props;
      return (
	      	<div style={{display:"inline"}}>
	            <Button bsClass="customButton" bsSize="large" onClick={this.open} >
	          		Curriculum Vitae
	        	</Button>

		        <Modal show={this.state.showModal} onHide={this.close}>
		          <Modal.Header >
		            <Modal.Title>{this.props.nomeCompleto}</Modal.Title>
		          </Modal.Header>
		          <Modal.Body>
		           			
		           			
		           			{  editMode ? 
				                        <TinyMCE
				                          content={cv}
				                          config={{
				                            plugins: 'link image code',
				                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
				                          }}
				                          onChange={handleChange}
				                        />	:

				                        	<p dangerouslySetInnerHTML={{__html: cv}}></p>
		           			}
			            	
		           		

		            
		          </Modal.Body>
		          <Modal.Footer>
		            <Button bsClass="customButton" bsSize="large" onClick={this.close}>Chiudi</Button>
		          </Modal.Footer>
		        </Modal>
	    	</div>
    )
  }
}

export default ModalCV;

