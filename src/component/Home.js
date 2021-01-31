import React,{Component} from 'react';
import '../css/Home.css';
import '../css/Card.css';

import firebase from 'firebase';
import { ImageFromStorage } from 'react-firebase-storage-connector';
import {getHome,saveHome} from '../remote_storage';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';

import {Carousel} from 'react-bootstrap';
import CardInstance from './Card';
import IframeRatio from './IframeRatio';
import {Grid,Row,Col,Button } from 'react-bootstrap';

import ButtonGroup from './Admin/ButtonGroup.js';

const CarouselInstance =(props)=>{
	const {adminMode}=props;
	if(adminMode)
		return null;
	return(
		
		  <Carousel >
		    
		    <Carousel.Item>
		      <img width={1900} height={500} alt="sala riunioni" src={require('../image/Salariunioni_1_HD.jpg')} />	   
		    </Carousel.Item>

		    <Carousel.Item>
		      <img width={1900} height={500} alt="sala riunioni" src={require('../image/salariunionifullHD.jpg')} />
		      
		    </Carousel.Item>
		    <Carousel.Item>
		      <img width={1900} height={500} alt="studio pozzi esterni" src={require('../image/morbegno1.jpg')} />
		      
		    </Carousel.Item>
		    
		    <Carousel.Item>
		      <img width={1900} height={500} alt="studio pozzi esterni" src={require('../image/morbegno2.jpg')} />
		      
		    </Carousel.Item>

		    <Carousel.Item>
		      <img width={1900} height={500} alt="studio pozzi esterni" src={require('../image/milano1.jpg')} />
		      
		    </Carousel.Item>
		    <Carousel.Item>
		      <img width={1900} height={500} alt="studio pozzi esterni" src={require('../image/milano2.jpg')} />
		      
		    </Carousel.Item>
			<Carousel.Item>
		      <img width={1900} height={500} alt="studio pozzi esterni" src={require('../image/livigno1.jpg')} />
		      
		    </Carousel.Item>
			<Carousel.Item>
		      <img width={1900} height={500} alt="studio pozzi esterni" src={require('../image/livigno2.jpg')} />  
		    </Carousel.Item>	    
		  </Carousel>
		
	)
};

class Home extends Component{
		constructor(props) {
			super(props);
			this.state={
				home:{},
				editMode:false

			}
			this.handleSave=this.handleSave.bind(this);
			this.handleAnnulla=this.handleAnnulla.bind(this);
			this.handleEditorChangeAreaAmministrativa=this.handleEditorChangeAreaAmministrativa.bind(this);
			this.handleEditorChangeAreaFiscale=this.handleEditorChangeAreaFiscale.bind(this);
			this.handleEditorChangeOperazioniStraordinarie=this.handleEditorChangeOperazioniStraordinarie.bind(this);
			
			 
			
		}
		componentDidMount() {
			 this.bindAsObject(getHome(),  "home");

			
		}
		handleAnnulla(){
			getHome().once("value").then(home=>{
							
							let homeValue=home.val();
							this.setState({
					            home:homeValue,
					            editMode:!this.state.editMode

					        })

					  });

		}
		
		handleEditorChangeAreaAmministrativa = (e) => {
		    
		   


		    					
		    this.setState({

		    				home:{
		    						DescrizioneAreaAmministrativa:e.target.getContent(),
		    						DescrizioneAreaFiscale:this.state.home.DescrizioneAreaFiscale,
		    						DescrizioneOperazioniStraordinarie: this.state.home.DescrizioneOperazioniStraordinarie
		    				}	
		    })
		  }
		handleEditorChangeAreaFiscale = (e) => {
		      this.setState({

		    				home:{
		    						DescrizioneAreaAmministrativa:this.state.home.DescrizioneAreaAmministrativa,
		    						DescrizioneAreaFiscale:e.target.getContent(),
		    						DescrizioneOperazioniStraordinarie: this.state.home.DescrizioneOperazioniStraordinarie
		    				}	
		   		 })
		  }
		  handleEditorChangeOperazioniStraordinarie = (e) => {
		    
		   					this.setState({

		    				home:{
		    						DescrizioneAreaAmministrativa:this.state.home.DescrizioneAreaAmministrativa,
		    						DescrizioneAreaFiscale:this.state.home.DescrizioneAreaFiscale,
		    						DescrizioneOperazioniStraordinarie: e.target.getContent()
		    				}	
		   		 })
		  }
		handleSave(){
		
			const _this=this;
			!this.state.editMode ?
								(
									this.setState({
											editMode:!this.state.editMode,
										

									})
								)
								:
								(
									
									saveHome(this.state.home).then(()=>{

													console.log("Salvataggio effettuato correttamente ");
													_this.setState({
												
															editMode:!_this.state.editMode
															

													})
									})
									.catch(e=>{
													console.log("Errore Salvataggio "+e);
									})
									

									

								)
			
		}
		render(){
			
			return(
				<div >	
					
					<CarouselInstance adminMode={this.props.adminMode}/>
						
					 
					
					<IframeRatio />
				    <CardInstance editMode={this.state.editMode} descAmministrativa={this.state.home.DescrizioneAreaAmministrativa} descFiscale={this.state.home.DescrizioneAreaFiscale} descFinanza={this.state.home.DescrizioneOperazioniStraordinarie}  handleEditorChangeAreaAmministrativa={this.handleEditorChangeAreaAmministrativa}  handleEditorChangeAreaFiscale={this.handleEditorChangeAreaFiscale}  handleEditorChangeOperazioniStraordinarie={this.handleEditorChangeOperazioniStraordinarie} />
					<ButtonGroup editMode={this.state.editMode} adminMode={this.props.adminMode} handleSave={this.handleSave} handleAnnulla={this.handleAnnulla}/>
				</div>
			)
		}
}

reactMixin(Home.prototype, ReactFireMixin);

export default Home

