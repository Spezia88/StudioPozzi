import React,{Component} from 'react';
import {Col,Button } from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom';


function Aggiungi(props) {

  
  if (props.editMode && props.adminMode) {
    
    return (

    	<div>
					   <Col lg={10} sm={8}>
					   </Col>
				                
				 		<Col lg={2} sm={4}>
					        <NavLink to={props.link}><Button bsStyle="success" style={{marginTop:'10px'}}>Aggiungi</Button></NavLink>		     		
					    </Col>			    
		 </div>
	);
  }
  else
  	return (<div></div>);
}



export default Aggiungi;