import React,{Component} from 'react';
import {storageCarousel} from '../../database';
import {Row,Col,Button,Grid} from 'react-bootstrap';
import {getCarouselImages,saveCarouselImage,deleteCarouselImage} from '../../remote_storage';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import UploadFile from './UploadFile';
import {removeIndexFromArray} from '../../js/common';
class Carousel extends Component {
  constructor(props){
    super(props);
    this.state={
        carosello:[]
    }
    this.deleteImmagine=this.deleteImmagine.bind(this);
  }
  componentDidMount() {
    this.bindAsArray(getCarouselImages(), "carosello");
  }
  handleUploadStart(e){

    console.log("Upload start: "+e);
    }

    handleUploadError(e){

        console.log("Upload error "+e);
    }

    handleUploadSuccess(data){
        console.log("Upload successfull "+data);
        saveCarouselImage(this.state.carosello,data);
    }
    deleteImmagine(id,fileName){
        var newImmagini=removeIndexFromArray(this.state.carosello,id);
        
        deleteCarouselImage(newImmagini);
        // Delete the file
        storageCarousel.child(fileName).delete().then(function() {      
            console.log("Ok! ");
        }).catch(function(error) {

              console.log("Uh-oh, an error occurred! "+error);
        });
    }

    render() {
        const UploadImmagine=<Row>
            <Col xs={12} sm={12} md={12} lg={12} >
                
                <label>Aggiungi Immagine</label>
                
                <UploadFile 
                    acceptedExtension=".jpg" 
                    storageRef={storageCarousel} 
                    handleUploadStart={this.handleUploadStart} 
                    handleUploadError={this.handleUploadError} 
                    handleUploadSuccess={this.handleUploadSuccess.bind(this)} 
                    name="Aggiungi Immagine"
                />
            
            </Col>
        </Row>;

        return (
        <div>
			<Grid>
                <h4>Immagini Home</h4>
                    <Row>
                            {this.state.carosello.map((img,index) => (
                            <div key={img.id} style={{marginTop: "8px", marginLeft:"16px"}}>
                                 <Row  key={img.id}>
                                    <Col xs={4} sm={4} md={4} lg={4}>
                                        <p>{img.name}</p>
                                    </Col>
                                    <Col xs={4} sm={4} md={4} lg={4} >
                                        <p>{img.id}</p>
                                    </Col>
                                    <Col xs={4} sm={4} md={4} lg={4} >
                                        <Button onClick={(e) => this.deleteImmagine(index, img.name)} bsStyle="danger">Rimuovi</Button>
                                    </Col>
                                </Row>
                            
                            </div>
                            ))}
                    </Row>
                
        
                {UploadImmagine}
            </Grid>
            
        </div>
        );
    }
}

reactMixin(Carousel.prototype, ReactFireMixin)
export default Carousel;