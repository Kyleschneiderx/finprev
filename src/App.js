import React from 'react';
import FacebookLogin from 'react-facebook-login';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      token:'',
      id:'',
      loggedIn: false
    };
  }



  responseFacebook =(response)=> {
    console.log(response);
    this.setState({
      name :response.name,
      email: response.email,
      token:response.token,
      id:response.id,
      loggedIn: true
    });
    console.log(this.state.loggedIn)
  }

  render() {
    if(this.state.loggedIn === false){
      return (
        <FacebookLogin
          appId="671287343745997"
          autoLoad={true}
          fields="name,email,picture"
          scope="ads_read,ads_management"
          callback={this.responseFacebook}
        />
      )
    }
    return(
      <>
        <div>
          hello
        </div>
      </>
    )
  }
}

export default App;
