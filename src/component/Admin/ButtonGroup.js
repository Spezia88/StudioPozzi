import React,{Component} from 'react';
import {Col,Button } from 'react-bootstrap';


class ButtonGroup extends Component{
	
	constructor(props) {
		super(props);
		this.state={

			buttonStyle:"primary",
			buttonLabel:"Modifica"
		}
		this.handleClickAnnulla=this.handleClickAnnulla.bind(this);
		this.handleClickActionButton=this.handleClickActionButton.bind(this);
	}
	componentDidMount() {
		!this.props.editMode
						?  this.setState({
										buttonStyle:"primary",
										buttonLabel:"Modifica"
							})
						:  this.setState({
										buttonStyle:"success",
										buttonLabel:"Salva"
							})
	}


	handleClickAnnulla(){

		this.props.handleAnnulla();
		this.setState({

						buttonStyle:"primary",
						buttonLabel:"Modifica"
		})
	}
	handleClickActionButton(){

		this.props.handleSave();
		if(this.props.scrollToTop || this.props.scrollToTop==undefined){
			window.scrollTo(0, 0);
		}
		
		this.props.editMode ?
								this.setState({

												buttonStyle:"primary",
												buttonLabel:"Modifica"
								})
							:
								this.setState({
												buttonLabel:"Salva",
												buttonStyle:"success"
	
							    })
	}
	render(){
		
		if(!this.props.adminMode)
			return null;
		
		let Annulla;
		if( this.props.editMode){
				Annulla= <Col lg={3} sm={4}><Button onClick={this.handleClickAnnulla} bsStyle="danger">Annulla</Button></Col>;

		}
		else
				Annulla=<Col lg={3} sm={4}></Col>;

		return(
			 <div>
				 <Col lg={5} sm={2}>
				 
				 </Col>
				                
				 {Annulla}
				                
				 <Col lg={3} sm={4}>
					       <Button onClick={this.handleClickActionButton} bsStyle={this.state.buttonStyle}>{this.state.buttonLabel}</Button>
			     </Col>
	        	 <Col lg={1} sm={2}>
				 
				 </Col>				
			</div>
			
		)
	}
};


export default ButtonGroup;