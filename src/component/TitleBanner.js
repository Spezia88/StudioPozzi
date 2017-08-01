import React,{Component} from 'react';
import '../css/Banner.css';


class TitleBanner extends Component{
	
  
	render(){
		if(this.props.adminMode)
			return null;
		return(
			<div className="titleBanner" >
			  <h2>{this.props.title}</h2>
			 
			</div>
		)
	}
}

export default TitleBanner;