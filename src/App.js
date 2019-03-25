import React, { Component } from 'react';

import './App.css';
//import './css/NavBar.css';

//import Home from './component/Home';
//import Associati from './component/Associati';
import Header from './component/Header';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Content from './component/Content';
import Home from './component/Home';
import AdminConsole from './component/AdminConsole';
import {PrivateRoute} from './component/Content';
import {BrowserRouter as Router,hashHistory,Route,Redirect,withRouter} from 'react-router-dom';
import {getContatti,getNoteLegali,getPrivacy,getDisclaimer, getUserRole } from './remote_storage';
import {database,firebaseAuth} from './database.js';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import {AuthUser,ROLE_ADMIN} from './js/common';
//import Site from './Site';


class App extends Component {
  constructor() {
    super();
    this.state = {
      home: {},
 
      disclaimer:"",
     
      noteLegali:"",
      privacy:"",
      authCircolari:false,
      authAdmin:false,
      user:null
    };

  }
 
  

  componentWillMount() {
    var _this=this; 
    this.listener = firebaseAuth().onAuthStateChanged((user) => {

                            if (user) {
                                    this.setState({ user});
                                    
                                    getUserRole(user.uid).then(user=>{
                                            
                                            var userRole=user.val().role;
                                            AuthUser.authenticate(user.val().role);
                                            if(_this.props.location.state.from.pathname==="/admin" && userRole===ROLE_ADMIN)
                                                _this.props.history.push("/admin");
                                            else
                                                _this.props.history.push("/approfondimenti");

                                    });
                                    
                                    
                                    
                                
                            } else {
                                    console.info('Must be authenticated');
                                    
                            }
                           
                     })
  
                            
    // I don't bind primitive type
    
    getPrivacy().then(privacy=>{

        this.setState({
            privacy

        })

    });
    getNoteLegali().then(noteLegali=>{

        this.setState({
            noteLegali

        })

    });
    getDisclaimer().then(disclaimer=>{

        this.setState({
            disclaimer

        })

    });

   
    
  }
  
  componentWillUnmount () {
                            this.listener()
  }

  
 
  render() {
    return (
            <div>
                <Header />  
                <NavBar />
                <div>
                  <PrivateRoute  exact={true} path="/admin"  component={AdminConsole} authRole={ROLE_ADMIN} />
                  <PrivateRoute  path="/admin/*"  component={AdminConsole} authRole={ROLE_ADMIN} />
                  <Route exact path="/contatti.htm" render={() => (
                   
                      <Redirect to="/contatti"/>
                  
                  )}/>
                  <Route exact path="/link.htm" render={() => (
                   
                      <Redirect to="/link"/>
                  
                  )}/>
                  <Route exact path="/esecuzioni.htm" render={() => (
                   
                      <Redirect to="/esecuzioni"/>
                  
                  )}/>
                  <Route exact path="/studio.htm" render={() => (
                   
                      <Redirect to="/studio"/>
                  
                  )}/>
                   <Route exact path="/attivita.htm" render={() => (
                   
                      <Redirect to="/attivita"/>
                  
                  )}/>
                   <Route exact path="/approfondimenti.htm" render={() => (
                   
                      <Redirect to="/approfondimenti"/>
                  
                  )}/>
                  
                   <Route exact path="/associati.htm" render={() => (
                   
                      <Redirect to="/studio"/>
                  
                  )}/>
                  <Route exact path="/scadenze.htm" render={() => (
                   
                      <Redirect to="/admin/circolari"/>
                  
                  )}/>
                  <Route exact path="/disclaimer.htm" render={() => (
                   
                      <Redirect to="/disclaimer"/>
                  
                  )}/>

               
                  <Route  path="/"   render={(props)=><Content authCircolari={this.state.authCircolari} authAdmin={this.state.authAdmin} {...props}  />}     />
                </div>
                
               
              
                <Footer />
            </div>
    );
  }
}

reactMixin(App.prototype, ReactFireMixin)

export default withRouter(App);
