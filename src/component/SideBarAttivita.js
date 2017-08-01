import React,{ Component } from 'react';
//import  '../css/Associati.css';
import TitleBanner from './TitleBanner';

import {getProfessionistiFromCategoria} from '../remote_storage';

import Span from './Span.js';
//import database from '../database.js';
import {getAttivita,saveAttivita} from '../remote_storage';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import {Grid,Row,Col} from 'react-bootstrap';
import { NavLink,Route } from 'react-router-dom';
import '../css/Attivita.css';
import TinyMCE from 'react-tinymce';
import ButtonGroup from './Admin/ButtonGroup.js';
import update from 'immutability-helper';

import {getKeys,getValues} from '../js/common.js';




const MainContent=(props)=>{

	const {handleChange,editMode,content}=props;
	let contenuto;
	if(editMode){ 
				
			contenuto=	<TinyMCE
					                          content={content}
					                          config={{
					                            plugins: 'link image code',
					                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
					                          }}
					                          onChange={handleChange}
					        />	
	}
	else{
			
			contenuto=<div className="contentAttivita" dangerouslySetInnerHTML={{__html: content}}></div>;
				
	}					
	return(
			<div>
			{	
				contenuto
			}
			</div>
	)
}


class SideBarAttivita extends Component{
	constructor() {
		super();
		this.state={
			 attivita: {},
			 editMode:false
			 
		}
		this.handleAnnulla=this.handleAnnulla.bind(this);
		this.handleSave=this.handleSave.bind(this);
	}
	componentWillMount() {
		
		 this.bindAsObject(getAttivita(),  "attivita");
		
		
	}
	handleAnnulla(){
			this.setState({
					editMode:!this.state.editMode
					

			})
		}
	handleSave(){
			
			if(this.state.editMode)
				saveAttivita(this.state.attivita);
			this.setState({
					editMode:!this.state.editMode
			})
			
		}	
	
	handleChange(key,e){
		
		var tmpAttivita = update(this.state.attivita, {
						   [key]:{ $set: e.target.getContent()}
						});
	    
	    this.setState({attivita:tmpAttivita});
	    
		
		

	}
	render(){
    	
    	const keyAttivita=getKeys(this.state.attivita);
    	
		const Materie=keyAttivita.map((key,index)=>{
			
			let link;
			
			if(this.props.adminMode)
					
					link=this.props.match.url+'/'+key;
			else
					
					link='/attivita/'+key;	
			
			if(key!=".key"){
				return(	

						  <li className="attivitaMenu" key={index}><NavLink activeClassName="attivitaSelected"  key={index} exact to={link} >{key}</NavLink></li>
						
						
				);
			
			}
	 	});
	
		return(
			<div>
				<TitleBanner title="ATTIVITA'" adminMode={this.props.adminMode}/>
				

				<Grid>
					<Col id="sideBarMenu" lg={4}>
						<ul>
						{Materie}
						</ul>
					</Col>
					<Col lg={8}>
						<div>
							
							{keyAttivita.map((key,index)=>{
								
								let link
								if(this.props.adminMode)
									 link=this.props.match.url+'/'+key;
								else
									 link='/attivita/'+key;	
									return(<Route	 
													 key={index}
						            				 path={link}
						           					 exact={true}
						            				 render={()=> <MainContent key={index} editMode={this.state.editMode} handleChange={this.handleChange.bind(this,key)} content={this.state.attivita[key]}/>}

				
						            				 
						            				 
			            					/>	 
		            					)
							})}
							
						</div>
					</Col>
				</Grid>
				<ButtonGroup editMode={this.state.editMode} adminMode={this.props.adminMode} handleSave={this.handleSave} handleAnnulla={this.handleAnnulla} />
			</div>
		)
	}

}
reactMixin(SideBarAttivita.prototype, ReactFireMixin)

export default SideBarAttivita;
