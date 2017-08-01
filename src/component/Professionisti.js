import React, { Component } from 'react';

import '../css/Professionisti.css';

import {Modal,Button,Col } from 'react-bootstrap';

import firebase from 'firebase';
import { ImageFromStorage } from 'react-firebase-storage-connector';
import ModalContatti from './ModalContatti';
import ModalCV from './ModalCV';

class Professionisti extends Component {
    constructor(props) {
      super(props);
      this.handleChangeCV=this.handleChangeCV.bind(this);
      this.handleChangeContatti=this.handleChangeContatti.bind(this);
      
    }
    handleChangeCV(e){
     
      this.props.handleChangeCV(e.target.getContent());
    }
    handleChangeContatti(e){
      
       this.props.handleChangeContatti(e.target.value);
    }
    render() {
      
      let contatti;

      if(this.props.contatti && this.props.editMode)

          contatti= <input type="text" value={this.props.contatti.email} onChange={this.handleChangeContatti} />;

      else if(this.props.contatti && !this.props.editMode)
          contatti=  <p className="mailProfessionista">{this.props.contatti.email}</p>;
      else
          contatti=<p></p>;
      return (
        <Col lg={4} md={4} sm={6} xs={12}>
          <div className="customCard">
            <div className="containerCard">
                <h3>{this.props.nomeCompleto}</h3>
                <p className="title" dangerouslySetInnerHTML={{__html: this.props.ruolo}}></p>
                
               
                {contatti}
               
               {this.props.cv ? (
                        <ModalCV editMode={this.props.editMode} cv={this.props.cv} nomeCompleto={this.props.nomeCompleto} handleChange={this.handleChangeCV}/>
                ):(
                   <p></p>
                )
               }
               
               <p></p>
            </div>
          </div>
        </Col>
    )
  }
}

export default Professionisti;