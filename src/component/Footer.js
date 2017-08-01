import React from 'react';
import {Grid,Row,Col } from 'react-bootstrap';
import '../css/Footer.css';
import {Link} from 'react-router-dom';

const Footer =()=>{
  return(
         
           <div id="footer">
           		
                <Grid>
              
	                	<Col lg={8} md={6}>
	                		 <p className="textFooter">
	             	 			<small>© 2009-2017, STUDIO POZZI - Partita Iva IT 05093720968</small>
	                		</p>
	                	</Col>
	                	<Col lg={1} md={2}>
	                		 <p className="textFooter">
	             	 			<Link to="/notelegali" style={{color:'white'}} ><small>Note Legali</small></Link>
	                		</p>
	                	</Col>
	                	<Col lg={1} md={1}>
	                		 <p className="textFooter">
	             	 			<Link to="/privacy" style={{color:'white'}} ><small>Privacy</small></Link>
	                		</p>
	                	</Col>
	                	<Col lg={1} md={1}>
	                		 <p className="textFooter">
	             	 			<Link to="/disclaimer" style={{color:'white'}} ><small>Disclaimer</small></Link>
	                		</p>
	                	</Col>
	                	<Col lg={1} md={2}>
	                		 <p className="textFooter">
	             	 			<Link to="/admin" style={{color:'white'}} ><small>Area Riservata</small></Link>
	                		</p>
	                	</Col>
                	
                	
                	
                </Grid>
            
                 
               
             
               
            </div>
  )
};

export default Footer;