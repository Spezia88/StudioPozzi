import React,{ Component } from 'react';
//import  '../css/Associati.css';
import TitleBanner from './TitleBanner';
import Professionista from './Professionisti';
import {getKeys} from '../js/common.js';
import {getProfessionistiFromCategoria,saveStoria,getAssociati,deleteProfessionista} from '../remote_storage';
import '../css/Associati.css';
import Span from './Span.js';
//import database from '../database.js';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import {Grid,Row,Col} from 'react-bootstrap';
import TinyMCE from 'react-tinymce';
import ButtonGroup from './Admin/ButtonGroup.js';
import update from 'immutability-helper';
import Aggiungi from './Admin/Aggiungi.js';
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
					<ButtonGroup editMode={editMode} adminMode={adminMode} handleSave={handleSave} handleAnnulla={handleAnnulla} scrollToTop={false} />
				<Row>
				</Row>
			</section>

	)


}
const ListProfessionisti=(props)=>{
				
				
				console.log(props);
				
				let ListaProfessionisti=[];
				for (var property in props.professionisti) {
								
						let professionista=props.professionisti[property];
					
						ListaProfessionisti.push(<Professionista adminMode={props.adminMode} editMode={props.editMode} key={property} idProfessionista={property} professionista={professionista}  idCategoria={props.idCategoria}/>);
						
				}
				
				return (<div>{ListaProfessionisti}</div>);


			/*	props.professionisti.map((professionista,index)=>{

					return(
					
							<Professionisti editMode={props.editMode} key={professionista[".key"]} professionista={professionista} handleChangeCV={this.handleChangeProfCV.bind(this,index)} handleChangeContatti={this.handleChangeProfContatti.bind(this,index)} handleChangeNome={this.handleChangeProfNome.bind(this,index)} handleElimina={this.handleEliminaProfessionista.bind(this,professionista[".key"])} />
						
					);
				});*/

};


const Categoria=(props)=>{
	const {editMode,name,handleChangeCategoria,professionisti,adminMode,id}=props;

	
	return(

		      			<Row>
		      				<Col lg={12}>
							{
								editMode ?
											(


												  <div>
												    
												  	<input type="text" value={name} onChange={handleChangeCategoria} />
												  </div>
												 
												
											)

											:

											(<h4>
												{name}
											 </h4>
											)


							}

							
							<Span />
							
								<ListProfessionisti professionisti={professionisti} editMode={editMode} adminMode={adminMode} idCategoria={id}/>

							</Col>
						</Row>


	)

}



/*
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
		 				
		 				let professionista=data.val();
		 				professionista[".key"]=data.key;
		 				
		 				this.setState({
		 					professionisti:this.state.professionisti.concat(professionista)
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
		handleChangeProfNome(index,e){

			
			
			let tmp=this.state.professionisti;
			tmp[index].nomeCompleto=e;
			this.setState({
							professionisti:tmp
			})
			this.props.handleChangeProfessionisti(this.state.professionisti[index].nomeCompleto,tmp[index]);
		}
		handleEliminaProfessionista(key){

			
			deleteProfessionista(this.props.id,key);
		}

		render(){
			const {handleChangeCategoria}=this.props;
			const ListProfessionisti=this.state.professionisti.map((professionista,index)=>{
				
				return(
				
						<Professionisti editMode={this.props.editMode} key={professionista[".key"]} professionista={professionista} handleChangeCV={this.handleChangeProfCV.bind(this,index)} handleChangeContatti={this.handleChangeProfContatti.bind(this,index)} handleChangeNome={this.handleChangeProfNome.bind(this,index)} handleElimina={this.handleEliminaProfessionista.bind(this,professionista[".key"])} />
					

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
}*/
		
class Associati extends Component{
	constructor(props) {
		super(props);
		this.state={
			 associati: {
                  categorie:[],
                  categorieProfessionisti:[],
                  professionisti:{} ,
                  storia:"",
                  
                
      		  },
      		  editMode:false
		}
		this.handleAnnulla=this.handleAnnulla.bind(this);
		this.handleSave=this.handleSave.bind(this);
		//this.handleChangeProfessionisti=this.handleChangeProfessionisti.bind(this);
		this.handleChangeStoria=this.handleChangeStoria.bind(this);
		//this.handleEliminaProfessionista=this.handleEliminaProfessionista.bind(this);
		
		
	}
	handleChangeCategoria(index,e){

		console.log("Handle Change categoria "+e.target.value+" "+index );
		
		let tmp=this.state.associati.categorie;
		tmp[index]=e.target.value;

		this.setState({
						associati:{
									categorie:tmp,
									professionisti:this.state.associati.professionisti,
									storia: this.state.associati.storia,
									categorieProfessionisti:this.state.categorieProfessionisti
						}
			})
		console.log(this.state.categorie);
	}
	
	handleChangeStoria(e){
		
		
	    	this.setState({
						associati:{
									categorie:this.state.associati.categorie,
									professionisti:this.state.associati.professionisti,
									storia: e.target.getContent(),
									categorieProfessionisti:this.state.categorieProfessionisti
						}
			})
		

	}
	componentWillMount() {
		
		 this.bindAsObject(getAssociati(), "associati");
	}
	componentDidMount() {
		
		 console.log(this.state);
	}
	
	handleAnnulla(){
			
			this.setState({
					editMode:!this.state.editMode
					

			})
	}
	handleSave(){
			
			if(this.state.editMode){
				saveStoria(this.state.associati.storia);
			}
			this.setState({
					editMode:!this.state.editMode
					

			})
	}
	render(){
		
		const ListCategorie=this.state.associati.categorie.map((categoria,index)=>{


			return(
				<Categoria professionisti={this.state.associati.categorieProfessionisti[index]} adminMode={this.props.adminMode} editMode={this.state.editMode} name={categoria} key={index} id={index} handleChangeCategoria={this.handleChangeCategoria.bind(this,index)} />
				

			);
		});
		
		return(
			<div>
				<TitleBanner title="LO STUDIO" adminMode={this.props.adminMode}/>
				

				<Grid>
				<Storia storia={this.state.associati.storia} editMode={this.state.editMode} adminMode={this.props.adminMode} handleChange={this.handleChangeStoria} handleAnnulla={this.handleAnnulla} handleSave={this.handleSave}/>
				<section className="sectionProfessionisti">
				<Row>
					{ListCategorie}
				</Row>
				</section>
				</Grid>

				
				<Aggiungi  editMode={true} adminMode={this.props.adminMode} link='/admin/nuovoprofessionista' />
			</div>
		)
	}


}

reactMixin(Associati.prototype, ReactFireMixin)

export default Associati;

export {Categoria,Storia};


