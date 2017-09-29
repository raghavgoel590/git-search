import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Auth0Lock from 'auth0-lock';
import Githhub from './Githhub'
import Header from './components/Header';
class App extends Component {
  static defaultProps={
    clientID:'jHBYQVfIMew7r5p9kKTqEfQ4Xak2OU1M',
    domain:'raghav-goel.auth0.com'
  }
  componentWillMount(){
    this.lock=new Auth0Lock(this.props.clientID,this.props.domain);
    this.lock.on('authenticated',(authResult) => {
      console.log(authResult);
     this.lock.getProfile(authResult.idToken,(error,profile) => {
      if(error){
        console.log(error);
      }
      console.log(profile);
      this.setProfile(authResult.idToken,profile);
     });

    });
    this.getProfile();
  }

  getProfile(){
    if(localStorage.getItem('idToken')!=null){
      this.setState({
        idToken:localStorage.getItem('idToken'),
        profile:JSON.parse(localStorage.getItem('profile'))
      });
      console.log(this.state);
    }
  }
  setProfile(idToken,profile){
    localStorage.setItem('idToken',idToken);
    localStorage.setItem('profile',JSON.stringify(profile));
    this.setState({
      idToken:localStorage.getItem('idToken'),
      profile:JSON.parse(localStorage.getItem('profile'))
    });
  }
Logout(){
  this.setState({
    idToken:'',
    profile:''
  },() => {
    localStorage.removeItem('idToken');
    localStorage.removeItem('profile');
  });
}
  showLock(){
    this.lock.show();
  }
  constructor(props){
    super(props);

    this.state = {
      idToken:'',
      profile:{}
    };
    this.setProfile=this.setProfile.bind(this);
    this.getProfile=this.getProfile.bind(this);
  }
  render() {
    let gitty;
    if(this.state.idToken){
      gitty=<Githhub />;
    }
    else{
      gitty="click login to see the github viewer";
    }
    return (
    <div className="App">
    <Header
    Lock={this.lock}
    idToken={this.state.idToken}
    profile={this.state.profile}
   Logout={this.Logout.bind(this)}
    Login={this.showLock.bind(this)}/>
     {gitty}
    </div>
    );
  }
}

export default App;
