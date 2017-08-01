import React from 'react';
import {Grid,Row,Col,Thumbnail,Button } from 'react-bootstrap';
import '../css/Card.css';
import '../css/Attivita.css';
import firebase from 'firebase';
import { ImageFromStorage } from 'react-firebase-storage-connector';
import { Link } from 'react-router-dom';
import TitleBanner from './TitleBanner';

const Attivita =()=>{
  
  return(
        <div>
          <TitleBanner title="ATTIVITA'" />
          <Grid>
            <Row>
            <Col sm={4} md={7} lg={4}>
              <div >
                  <Link to="/attivita/Area amministrativa e aziendale">
                    <ImageFromStorage storageRef={ firebase.storage().ref('image').child('amministrativa.jpg')} alt=''  className="imgCardAttivita"/>
                    <div className="titleAttivita">
                      <h3>Area amministrativa e aziendale</h3>
                    </div>
                  </Link>
              </div>
            </Col>
            <Col sm={4} md={7} lg={4}>
              <div >  
                <Link to="/attivita/Area fiscale e societaria">
                  <ImageFromStorage storageRef={ firebase.storage().ref('image').child('legale.jpg')} alt=''  className="imgCardAttivita"/>
                   <div className="titleAttivita">
                      <h3>Area fiscale e societaria</h3>
                   </div>
                </Link>
               
                
              </div>
            
            </Col>
            <Col sm={4}  md={7} lg={4}>
              <div >  
                <Link to="/attivita/Operazioni straordinarie" className="attivitaMenu">
                  <ImageFromStorage storageRef={ firebase.storage().ref('image').child('immobile.jpg')} alt=''  className="imgCardAttivita"/>
                  <div className="titleAttivita">
                    <h3>Operazioni straordinarie</h3>
                  </div>
                </Link>
               
                
              </div>
            </Col>
            </Row>
          </Grid>
         
        </div>
      
  )
};

export default Attivita;
