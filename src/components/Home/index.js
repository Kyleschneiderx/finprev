import React from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios'
import UserList from './userList'
import {Link} from 'react-router-dom'



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      token:'',
      id:'',
      loggedIn: false,
      users: []
    };
  }

  
//   loadFbLoginApi() {

//     window.fbAsyncInit = function() {
//       window.FB.init({
//         appId            : '671287343745997',
//         autoLogAppEvents : true,
//         xfbml            : true,
//         version          : 'v8.0'
//       });
//     };

//     console.log("Loading fb api");
//       // Load the SDK asynchronously
//     (function(d, s, id) {
//         var js, fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) return;
//         js = d.createElement(s); js.id = id;
//         js.src = "//connect.facebook.net/en_US/sdk.js";
//         fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'facebook-jssdk'));
// }

// componentDidMount() {
//     this.loadFbLoginApi();
// }



  responseFacebook =(response)=> {

    
    this.setState({
      name :response.name,
      email: response.email,
      token:response.accessToken,
      id:response.id,
      loggedIn: true,
      users: []
    });
    if(this.state.loggedIn === true){
      axios.get(`https://graph.facebook.com/v8.0/me/adaccounts?fields=name&access_token=${response.accessToken}`)
      .then(res => {
      this.setState({users: res.data.data}, () => console.log(this.state.users)) 
      })
    }
    ///https://graph.facebook.com/v8.0/me/adaccounts?access_token=EAAJiiEOqi80BAEPc8vvEtWD4gsUPFPz7oj8xUKxNAH7KconOqioejHzpVZAaZADNkpkNo0WmJ05gDEJZCm3QWd04id041mI5HXzNdbXGzBlv26bh46R5qCZBNEkVCG5K0VdzFqJhKyXH0U9jOTa4IDujIqleJUzv5wDDPAxXCJubhLoZAm5lZAST0mxdmWkN0ZD"
  
  }

  






  render() {
    if(this.state.loggedIn === false){
      return (
          <FacebookLogin
            appId="671287343745997"
            autoLoad={true}
            fields="name,email,picture"
            scope="ads_read,ads_management,public_profile"
            callback={this.responseFacebook}
          />
      )
    }
    if(this.state.users.length < 1 || this.state.users === undefined){
      return(
        <>
              <div>
                  Hello
              </div>
        </>
      )
      
    }
    return(
      <>
            <>
            <UserList allUsers={this.state.users} access={this.state.token}/>
            </>
      </>
    )
  }
}

export default Home;