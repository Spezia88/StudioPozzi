import React,{Component} from 'react';
import {Col,Button,Grid } from 'react-bootstrap';

import Associati from '../Associati';
import ButtonGroup from './ButtonGroup.js';
class Studio extends Component{
	constructor(props) {
		super(props);
		this.state={
			 associati: {
                  categorie:[],
                  professionisti:{} ,
                  storia:"",
                  editMode:false
                
      		  }
		}
		this.handleAnnulla=this.handleAnnulla.bind(this);
		this.handleSave=this.handleSave.bind(this);
		
	}
	componentWillMount() {
		 this.bindAsObject(getAssociati(), "associati",e=>{console.log(e)});
	}

	
	
	handleAnnulla(){
			this.setState({
					editMode:!this.state.editMode
					

			})
	}
	handleSave(){
			
			
			this.setState({
					editMode:!this.state.editMode
					

			})
	}
	render(){
		
		

		return(
				<div>
					<Storia />

					<ButtonGroup editMode={this.state.editMode} adminMode={this.props.adminMode} handleSave={this.handleSave} handleAnnulla={this.handleAnnulla} />
				</div>
		)
	}






}

export default Studio;