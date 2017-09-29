import React ,{Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
class Header extends Component {
  Login(){
    this.props.Login();
  }
  Logout(){
    this.props.Logout();
  }
  render(){
    let page;
    if(this.props.idToken){
      page=<NavItem onClick={this.Logout.bind(this)}href="#">Logout </NavItem>;
    }
    else {
      {
        page=<NavItem onClick={this.Login.bind(this)}href="#">Login </NavItem>;

      }
    }
    return(
    <Navbar>
    <Navbar.Header>
    <Navbar.Brand>
    Github Searcher
    </Navbar.Brand>
    </Navbar.Header>
    {page}
    </Navbar>
    );
  }
}
export default Header;
