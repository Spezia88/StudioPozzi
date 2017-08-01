import React,{ Component } from 'react';
//import  '../css/Associati.css';
import TitleBanner from './TitleBanner';
import Professionisti from './Professionisti';
import {getKeys} from '../js/common.js';
import {getProfessionistiFromCategoria,saveProfessionisti} from '../remote_storage';
import '../css/Associati.css';
import Span from './Span.js';
//import database from '../database.js';
import {getAssociati} from '../remote_storage';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import {Grid,Row,Col} from 'react-bootstrap';
import TinyMCE from 'react-tinymce';
import ButtonGroup from './Admin/ButtonGroup.js';
import update from 'immutability-helper';

//import associati from '../datiAssociati.js'


const Storia=(props)=>{
	const {storia,editMode,handleChange,adminMode,handleSave,handleAnnulla}=props;
	return(

			<section>
				<Row>
				<h4>La Storia</h4>
				<Span />
					 {  editMode ? 
                        <TinyMCE
                          content={storia}
                          config={{
                            plugins: 'link image code',
                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                          }}
                          onChange={handleChange}
                        />
                         :  (<div>
	                             
	                             <div dangerouslySetInnerHTML={{__html: storia}}></div>

	                         	

                         	 </div>
                         	)
                      }
						
				</Row>
				
			</section>

	)


}
class Categoria extends Component{

		constructor() {
			super();
			this.state={
				professionisti:[]
				

			}
		}

		componentDidMount() {
		    getProfessionistiFromCategoria(this.props.id,(professionisti)=>{
		 		  professionisti.then(data=>{
		 				
		 				
		 				this.setState({
		 					professionisti:this.state.professionisti.concat(data)
		 				})
		 				
		 		})
			})
		}
		handleChangeProfCV(index,e){

			
			let tmp=this.state.professionisti;
			tmp[index].cv=e;
			this.setState({
							professionisti:tmp
			})
			this.props.handleChangeProfessionisti(this.state.professionisti[index].nomeCompleto,tmp[index]);
		}
		handleChangeProfContatti(index,e){

			
			
			let tmp=this.state.professionisti;
			tmp[index].contatti.email=e;
			this.setState({
							professionisti:tmp
			})
			this.props.handleChangeProfessionisti(this.state.professionisti[index].nomeCompleto,tmp[index]);
		}

		render(){
			const {handleChangeCategoria}=this.props;
			const ListProfessionisti=this.state.professionisti.map((professionista,index)=>{

				return(
				
						<Professionisti editMode={this.props.editMode}  key={index} {...professionista} handleChangeCV={this.handleChangeProfCV.bind(this,index)} handleChangeContatti={this.handleChangeProfContatti.bind(this,index)} />
					

				);
			});

				return(

		      			<Row>
		      				<Col lg={12}>
							{
								this.props.editMode ?
											(


												  <div>
												    
												  	<input type="text" value={this.props.name} onChange={handleChangeCategoria} />
												  </div>
												 
												
											)

												:

												<h4 >
													{this.props.name}
												</ h4>


							}

							
							<Span />
							
							{ListProfessionisti}
							</Col>
						</ Row>


				)
		}
}
		
class Associati extends Component{
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
		this.handleChangeProfessionisti=this.handleChangeProfessionisti.bind(this);

		
	}
	handleChangeCategoria(index,e){

		console.log("Handle Change categoria "+e.target.value+" "+index );
		
		let tmp=this.state.associati.categorie;
		tmp[index]=e.target.value;

		this.setState({
						associati:{
									categorie:tmp,
									professionisti:this.state.associati.professionisti,
									storia: this.state.associati.storia
						}
			})
		console.log(this.state.categorie);
	}
	handleChangeProfessionisti(nome,professionista){
		
		var tmpProf = update(this.state.associati.professionisti, {
						   [nome]:{ $set: professionista}
						});
	   
	    var tmpAssociati = update(this.state.associati, {
						   professionisti:{ $set: tmpProf}
						});
	    this.setState({associati:tmpAssociati});
		

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
			
			if(this.state.editMode)
				saveProfessionisti(this.state.associati.professionisti);
			this.setState({
					editMode:!this.state.editMode
					

			})
	}
	render(){
		
		
		const ListCategorie=this.state.associati.categorie.map((categoria,index)=>{

			return(
				<Categoria editMode={this.state.editMode} name={categoria} key={index} id={index} handleChangeCategoria={this.handleChangeCategoria.bind(this,index)} handleChangeProfessionisti={this.handleChangeProfessionisti}/>
				

			);
		});
		
		return(
			<div>
				<TitleBanner title="LO STUDIO" adminMode={this.props.adminMode}/>
				

				<Grid>
				<Storia storia={this.state.associati.storia} editMode={this.state.editMode} adminMode={this.props.adminMode}/>
				<section className="sectionProfessionisti">
				<Row>
					{ListCategorie}
				</Row>
				</section>
				</Grid>

				<ButtonGroup editMode={this.state.editMode} adminMode={this.props.adminMode} handleSave={this.handleSave} handleAnnulla={this.handleAnnulla} />
			</div>
		)
	}


}

reactMixin(Associati.prototype, ReactFireMixin)

export default Associati;

export {Categoria,Storia};


