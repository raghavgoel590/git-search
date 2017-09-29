import React ,{Component} from 'react';
class Profile extends Component {

  render(){
    let userdata=this.props.userData;
    let followers=userdata.homeUrl+"/followers";
    let following=userdata.homeUrl+"/following";
    let repos=userdata.homeUrl+"/respostories";
   console.log(this.props.userData);
    console.log(followers);
    if(userdata.notFound === 'Not Found')
  { return(
      <div className="notfound">
      <h2>heyyyy</h2>
      <p>are you sure whom you are looking for?????</p>
      </div>
    );
  }
  else{
    return(
      <section className="github-profile">
        <div className="github-profile-info">
       <a href={userdata.homeUrl} target="_blank" title={userdata.name || userdata.username}><img src={userdata.avatar}/></a>
       <h3><a href={userdata.homeUrl} title={userdata.username} target="_blank">{userdata.name} || {userdata.username}</a></h3>
       <h4>{userdata.location}</h4>
        </div>
        <div className="github-profile-state">
      <ul>
        <li>
        <a href={followers} target="_blank" title="Number of followers"><i>{userdata.followers}&emsp;</i><span>Followers </span></a>
        <a href={repos} target="_blank" title="Number of repostories"><i>{userdata.repos}</i>&emsp;<span>Repostories </span></a>
        <a href={following} target="_blank" title="Number of following"><i>{userdata.following}</i>&emsp;<span> Following   </span></a>
        </li>
        </ul>
        </div>
        </section>
      );
  }
  }
}
export default Profile;
