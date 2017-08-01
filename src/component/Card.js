import React from 'react';
import {Grid,Row,Col,Thumbnail,Button } from 'react-bootstrap';
import '../css/Card.css';
import firebase from 'firebase';
import { ImageFromStorage } from 'react-firebase-storage-connector';
import { Link } from 'react-router-dom';
import TinyMCE from 'react-tinymce';

const Card=(props)=>{
  
  const {imageName,linkTo,title,content,handleChange,editMode}=props;

  return(
   
     <Col sm={4} md={7} lg={4}>
             <div className="cardContainer">
                   <Link to={linkTo} >
                    <ImageFromStorage storageRef={ firebase.storage().ref('image').child(imageName)} alt=''  className="imgCard"/>
                  </Link>
                <h3>{title}</h3>
                      {  editMode ? 
                        <TinyMCE
                          content={content}
                          config={{
                            plugins: 'lists',
                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                          }}
                          onChange={handleChange}
                        />
                         :  <div dangerouslySetInnerHTML={{__html: content}}></div>
                      }
              </div>
      </Col>
      
  )
}

 


const CardInstance =(props)=>{
 
  let {descFiscale,descAmministrativa,descFinanza}=props;
  const {editMode,handleEditorChangeAreaAmministrativa,handleEditorChangeAreaFiscale,handleEditorChangeOperazioniStraordinarie}=props;
 
 
   
 
  return(
         <div>
          <Grid>
            <Row>
            <Card editMode={editMode} imageName="amministrativa.jpg" linkTo="/attivita/Area amministrativa e aziendale" title="Area amministrativa e aziendale" content={descAmministrativa} handleChange={handleEditorChangeAreaAmministrativa} />
            
            <Card editMode={editMode} imageName="legale.jpg" linkTo="/attivita/Area fiscale e societaria" title="Area fiscale e societaria" content={descFiscale} handleChange={handleEditorChangeAreaFiscale} />
          
            <Card editMode={editMode} imageName="immobile.jpg" linkTo="/attivita/Operazioni straordinarie" title="Operazioni straordinarie" content={descFinanza} handleChange={handleEditorChangeOperazioniStraordinarie} />
            
            
            </Row>
           
          </Grid>
        
        </div>
      
  )
};

export default CardInstance;
