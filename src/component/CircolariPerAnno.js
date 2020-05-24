import React,{ Component } from 'react';
import {Row,Col,Button} from 'react-bootstrap';
import {getCircolariAnno,downloadCircolare,deleteCircolare,saveCircolare} from '../remote_storage';
import {storageCircolari} from '../database';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import firebase from 'firebase';
import Span from './Span.js';
import UploadFile from './Admin/UploadFile';
import { ImageFromStorage } from 'react-firebase-storage-connector';
import '../css/Circolari.css';
import {removeIndexFromArray} from '../js/common.js';
import ReactPaginate from 'react-paginate';
import {
  Route,
  Link
} from 'react-router-dom';

const Circolare=(props)=>{
	
	let Elimina;
	if(props.adminMode)
			
			Elimina= <Col xs={3} sm={2} md={2} lg={1}> <Button onClick={()=>props.deleteCircolare(props.index,props.circolare)} bsStyle="danger">Elimina</Button></Col>
		
	

	return(
		  	 		
		  			<Row>
			  			<div onClick={()=>props.handleClick(props.circolare)} className="circolareSingola">
				 			
				 			<Col xs={2} sm={2} md={1} lg={1}> 
				 			
				 				<ImageFromStorage storageRef={firebase.storage().ref('image').child('pdf.png')} alt={props.nome} className="imgCircolari" />
				 			
				 			</Col>

				 			<Col xs={7} sm={8} md={9} lg={10}>

				 				<p className="nomeCircolare">{props.circolare}</p>
				 			
				 			</Col>
				 			
				 			
			 			</div>
			 			{Elimina}

		 			</Row >
		 			
	)

}




class CircolariPerAnno extends Component{

	constructor(props) {
		
		super(props);
		
		this.state={

			circolari:[],
			anno:this.props.match.params.anno,
			offset:0
		}
		
	}
	
		
	
	componentWillMount() {
		console.log(this.props.adminMode);
		this.bindAsArray(getCircolariAnno(this.state.anno), "circolari");
	
		
	}

	componentWillUnmount () {
		   	
		   	console.log("UnBind Circolari UnMount component");
		   //	this.unbind("circolari");

	}

	componentWillReceiveProps(nextProps){
		
		if(this.state.anno!==nextProps.match.params.anno){
			
			this.unbind("circolari");
			this.setState({anno:nextProps.match.params.anno,offset:0});
			this.bindAsArray(getCircolariAnno(nextProps.match.params.anno), "circolari");
	
		}
			
			
		
		
	}

	deleteCircolare(id,fileName){
			
			const _this=this;
			var newCircolari=removeIndexFromArray(this.state.circolari,id);
			
		
			// Delete the file
			storageCircolari.child(this.state.anno+'/'+fileName).delete().then(function() {
				
			  	deleteCircolare(_this.state.anno,newCircolari);
			  	

			}).catch(function(error) {

			  	console.log("Uh-oh, an error occurred! "+error);
			});
	}
	handleClick(fileName){

		downloadCircolare(fileName,this.state.anno).then(function(url) {
		          
		          
		      	  window.open(url);
		      }).catch(function(error) {
		          console.log("Error download file");

		      })

	}
	
	handleUploadStart(e){

			console.log("Upload start: "+e);
	}
	
	handleUploadError(e){

			console.log("Upload error "+e);
	}

	handleUploadSuccess(data){

			saveCircolare(this.state.anno,this.state.circolari,data);
	}
	handlePageClick = data => {

		this.setState({offset:data.selected});
		
	};

	render(){
			
			const pageCount = Math.round(this.state.circolari.length / 10);
			const ListCircolari=this.state.circolari.slice(this.state.offset*10,this.state.offset*10+10).map((circolare,index)=>{
				
				return(	
						
							<Col xs={12} sm={12} md={12} lg={12} key={index}>
									<Circolare  adminMode={this.props.adminMode} circolare={circolare.nome} key={index} index={index} handleClick={this.handleClick.bind(this)} deleteCircolare={this.deleteCircolare.bind(this)}/>
									
							</Col>
							
						
				)
			
			});
			let UploadCircolari;
			if(this.props.adminMode){

				UploadCircolari=<Row>
									<Col xs={12} sm={12} md={12} lg={12} >
										
										<label>Aggiungi Circolare</label>
										
										<UploadFile 
											acceptedExtension=".pdf" 
											storageRef={storageCircolari.child(this.state.anno)} 
											handleUploadStart={this.handleUploadStart} 
											handleUploadError={this.handleUploadError} 
											handleUploadSuccess={this.handleUploadSuccess.bind(this)} 
											name="Aggiungi Circolare"
										/>
									
									</Col>
								</Row>;

			}
			return(
				   <div>
						
				   		<section className="sectionCircolari">
							<Row>
							<h4>Circolari Anno {this.state.anno}</h4>
							<Span />
								
								{ListCircolari}
								<ReactPaginate
									previousLabel={'Precedente'}
									nextLabel={'Successivo'}
									breakLabel={'...'}
									breakClassName={'break-me'}
									pageCount={pageCount}
									marginPagesDisplayed={2}
									pageRangeDisplayed={5}
									onPageChange={this.handlePageClick}
									containerClassName={'pagination'}
									subContainerClassName={'pages pagination'}
									activeClassName={'active'}
								/>
									
							</Row>
							
						</section>
						
						<section style={{paddingTop :'2em'}}>
							
							{UploadCircolari}
						
						</section>
					</div>
			)
	}


}


reactMixin(CircolariPerAnno.prototype, ReactFireMixin);

export default CircolariPerAnno;