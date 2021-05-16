import React,{Component} from 'react';
import '../css/Home.css';
import '../css/Card.css';
import { ImageFromStorage } from 'react-firebase-storage-connector';
import {getHome,saveHome,getCarouselImages} from '../remote_storage';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';

import {Carousel} from 'react-bootstrap';
import CardInstance from './Card';
import IframeRatio from './IframeRatio';
import {storageCarousel} from '../database';

import ButtonGroup from './Admin/ButtonGroup.js';

const CarouselInstance =(props)=>{
	const {adminMode,carouselImages}=props;
	if(adminMode)
		return null;
	const Images = carouselImages.map((image,index) => (
		<Carousel.Item key={image.id}>
			<ImageFromStorage storageRef={ storageCarousel.child(image.name)} alt={image.name}  className="imgCarousel"/>
	  	</Carousel.Item>
	))
	return(
		
		  <Carousel >
		    {Images}
		  </Carousel>
		
	)
};

class Home extends Component{
		constructor(props) {
			super(props);
			this.state={
				home:{},
				carouselImages:[],
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
			 this.bindAsArray(getCarouselImages(), "carouselImages");	
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
					
					<CarouselInstance adminMode={this.props.adminMode} carouselImages={this.state.carouselImages}/>
						
					 
					
					<IframeRatio />
				    <CardInstance editMode={this.state.editMode} descAmministrativa={this.state.home.DescrizioneAreaAmministrativa} descFiscale={this.state.home.DescrizioneAreaFiscale} descFinanza={this.state.home.DescrizioneOperazioniStraordinarie}  handleEditorChangeAreaAmministrativa={this.handleEditorChangeAreaAmministrativa}  handleEditorChangeAreaFiscale={this.handleEditorChangeAreaFiscale}  handleEditorChangeOperazioniStraordinarie={this.handleEditorChangeOperazioniStraordinarie} />
					<ButtonGroup editMode={this.state.editMode} adminMode={this.props.adminMode} handleSave={this.handleSave} handleAnnulla={this.handleAnnulla}/>
				</div>
			)
		}
}

reactMixin(Home.prototype, ReactFireMixin);

export default Home

