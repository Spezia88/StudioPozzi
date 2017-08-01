import React,{ Component } from 'react';
//import  '../css/Associati.css';
import TitleBanner from './TitleBanner';
import {Grid,Row,Col,Glyphicon} from 'react-bootstrap';
import {signOutCircolari,getAnniCircolari} from '../remote_storage';
//import {storageCircolari} from '../database';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import CircolariPerAnno from './CircolariPerAnno';
import {PrivateRoute} from './Content';
import IframeRatio from './IframeRatio';
import {
  Route,
  Link
} from 'react-router-dom';
import {storageCircolari} from '../database';



 class Circolari extends Component{
	constructor(props) {
		super(props);
		this.state={
			anni:[],
			editMode:false
		}
	}



	handleClickButton(){
		signOutCircolari().then(function() {
  						console.log("Sign-out successful."); 
		})
		.catch(function(error) {
  									console.log(error);
							});
	}
	componentWillMount() {
		
		this.bindAsArray(getAnniCircolari(), "anni");
		

	}
	/*componentWillUnmount () {
		   	
		  
		   	this.unbind("anni");

	}*/
	render(){
		
		let editMode;
		if(this.props.match.path==="/admin/circolari")
				editMode=true;
		else
				editMode=false;
		const ListAnniCircolari=this.state.anni.map((anno,index)=>{
			
				return(
										
						
							<Col xs={12} sm={12} md={12} lg={12} key={index+anno.anno}>

									<div><Glyphicon glyph="glyphicon glyphicon-folder-open" /><Link  to={this.props.match.path+'/'+anno.anno}>{anno.anno}</Link></div>
									
									
							</Col>
							
						
				)
			
		});
		return(
			<div  style={{marginBottom:'25em'}}>
				<TitleBanner title="APPROFONDIMENTI" adminMode={editMode}/>
				<IframeRatio />

				
				<Grid >
					{
					
						ListAnniCircolari

					    
					
					}
					
					<Route path={this.props.match.path+'/:anno'} render={(props)=><CircolariPerAnno adminMode={editMode} {...props} />} />
				</Grid>
				
			</div>
		)
	}

}


reactMixin(Circolari.prototype, ReactFireMixin);
export default Circolari;