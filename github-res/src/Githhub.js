import React ,{Component} from 'react';
import Search from './components/Search';
import Profile from './components/Profile';
const API='https://api.github.com/users'
class Githhub extends Component {
constructor(props){
  super(props);

  this.state = {
    username:'facebook',
    name:'',
    avatar:'',
    repos: '',
    followers:'',
    following:'',
    homeUrl:'',
    notFound:''
  };
}
getProfile(username){
  let finalUrl=API+"/"+username;
  console.log(finalUrl);
  fetch(finalUrl)
  .then((res) => res.json())
  .then((data) => {
    this.setState({
      username:data.login,
      name:data.name,
      avatar:data.avatar_url,
      repos: data.public_repos,
      followers:data.followers,
      following:data.following,
      homeUrl:data.html_url,
      notFound:data.notFound
    })
    console.log(this.state);
  })
    .catch((error) =>console.log("there is problem in fetching data"))
}
componentDidMount(){
  this.getProfile(this.state.username);
}
  render(){
    return(
      <div>
      <section id="card">
      <Search searchProfile={this.getProfile.bind(this)}/>
      <Profile userData={this.state}/>
      </section>
      </div>
    );
  }
}
export default Githhub;
