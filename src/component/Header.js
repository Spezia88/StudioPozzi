import React,{Component} from 'react';
import {Image } from 'react-bootstrap';
import '../css/Header.css';
import firebase from 'firebase';
import { ImageFromStorage } from 'react-firebase-storage-connector';
class Header extends Component {

	render(){
	
					return(
										<header>

												<div id="header">
													
													<ImageFromStorage storageRef={ firebase.storage().ref('image').child('logoHeader.png')} alt='logoStudioPozzi'  className="logoDesktop"/>
													<ImageFromStorage storageRef={ firebase.storage().ref('image').child('logoHeaderMobile.png')} alt='logoStudioPozzi'  className="logoMobile"/>
													
												</div>
											

											
										</header>
							  			
				  				
				  )
	}
};

export default Header;