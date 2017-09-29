import React ,{Component} from 'react';

class Search extends Component {
   submitForm(event){
     event.preventDefault();
     let user=this.refs.username.value;
     this.props.searchProfile(user);
     this.refs.username.value='';
   }
  render(){
    return(
      <div className="search-box">
       <form onSubmit={this.submitForm.bind(this)}>
       <label><input type="text" ref="username" placeholder="enter and press enter hard to search"/></label>
       </form>
      </div>
    );
  }
}
export default Search;
