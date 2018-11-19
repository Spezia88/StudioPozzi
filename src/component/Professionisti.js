import React, { Component } from 'react';

import '../css/Professionisti.css';

import {Modal,Button,Col } from 'react-bootstrap';

import firebase from 'firebase';
import { ImageFromStorage } from 'react-firebase-storage-connector';
import ModalContatti from './ModalContatti';
import ModalCV from './ModalCV';
import ButtonGroup from './Admin/ButtonGroup.js';
import {saveProfessionista,deleteProfessionista} from '../remote_storage';

class Professionista extends Component {
    constructor(props) {
      super(props);
      this.handleChangeCV=this.handleChangeCV.bind(this);
      this.handleChangeContatti=this.handleChangeContatti.bind(this);
      this.handleChangeNome=this.handleChangeNome.bind(this);
      this.handleSave=this.handleSave.bind(this);
      this.handleAnnulla=this.handleAnnulla.bind(this);
      this.handleEliminaProfessionista=this.handleEliminaProfessionista.bind(this);
      

      this.state={

                  professionista:this.props.professionista,
                  editMode:false
      }
     
    }
    componentDidUpdate(){
      
      console.log(this.props);
      console.log(this.state);
    }
    handleChangeCV(e){
      
      let professionista = {...this.state.professionista};
      professionista.cv=e.target.getContent();
      this.setState({professionista});
      //this.props.handleChangeCV(e.target.getContent());
    }
    handleChangeContatti(e){
       
       let professionista = {...this.state.professionista};
       professionista.contatti.email=e.target.value;
       this.setState({professionista});
       //this.props.handleChangeContatti(e.target.value);
    }
    handleChangeNome(e){
       


      let professionista = {...this.state.professionista};
      professionista.nomeCompleto=e.target.value;
      this.setState({professionista});
      //this.props.handleChangeNome(e.target.value);
    }
    handleEliminaProfessionista(){
          

          deleteProfessionista(this.props.idProfessionista,this.props.idCategoria).then(function(){

            return;
          });



    }
    handleAnnulla(){
      
      this.setState({
          editMode:!this.state.editMode
          

      })
    }
    handleSave(){
       
        if(this.state.editMode){
        saveProfessionista(this.state.professionista,this.props.idProfessionista,this.props.idCategoria).then(function(){

              return;
          });;
         
        }
        this.setState({
            editMode:!this.state.editMode
            

        })
    }
   
    render() {
      
      let contatti,nomeCompleto,Elimina;


      if(this.state.editMode){
          
          Elimina=  <div className="deleteProfessionista"><Button onClick={()=>this.handleEliminaProfessionista()} bsStyle="danger" >Elimina</Button></div>;
          nomeCompleto=<h3><input type="text" value={this.state.professionista.nomeCompleto} onChange={this.handleChangeNome} /></h3>;
          if(this.props.professionista.contatti){

              contatti= <input type="text" value={this.state.professionista.contatti.email} onChange={this.handleChangeContatti} />;
          }

      }
      else{

           nomeCompleto=<h3>{this.state.professionista.nomeCompleto}</h3>;
           if(this.state.professionista.contatti){

              contatti=  <p className="mailProfessionista">{this.state.professionista.contatti.email}</p>;
           }
           else

              contatti=<p></p>;
      }
      
    
      return (
        <Col lg={4} md={4} sm={6} xs={12}>
          <div className="customCard">
            <div className="containerCard">
                {nomeCompleto}
                <p className="title" dangerouslySetInnerHTML={{__html: this.state.professionista.ruolo}}></p>
                
                {contatti}
               
               {this.state.professionista.cv ? (
                        <ModalCV editMode={this.props.editMode} cv={this.state.professionista.cv} nomeCompleto={this.state.professionista.nomeCompleto} handleChange={this.handleChangeCV}/>
                ):(
                   <p></p>
                )
               }
               
               <p></p>
            </div>
         
          </div>
           <ButtonGroup editMode={this.state.editMode} adminMode={this.props.adminMode} handleSave={this.handleSave} handleAnnulla={this.handleAnnulla} scrollToTop={false}/>
           {Elimina}
        </Col>

    )
  }
}

export default Professionista;