import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:5000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          const profileUrl = 'http://localhost:3000/profile/' + user.id;
          window.location.replace(profileUrl);
        } else { 
          const passDiv = document.getElementById('password');
          if(!document.getElementById('errorMsg')){
            const error = document.createElement('p');
            error.id = 'errorMsg';
            error.textContent = 'Invalid User/Password';
            error.className = 'red';
            passDiv.appendChild(error);
          }
        }
      })
  }

  onGoogleClick = () => {
    fetch('http://localhost:5000/googleAuth/login')
    .then(res => res.json())
    .then(data => {
      console.log(data.url);
      window.location.replace(data.url);
    });
  }

  componentDidMount(){
    window.onpopstate = this.props.onBackButtonEvent; 
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="mainBg">
      <form className="br3 ba b--black-10 bg-white mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 required"
                  type="email"
                  name="email-address"
                  id="email-address"
                  required
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3" id="password">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  required
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="pa3">
            <p className="b ma0">OR</p>
              <input
                onClick={this.onGoogleClick}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib mt2"
                type="button"
                value="Sign in with Google"
              />
            </div>
            <div className="lh-copy mt2">
              <h4 className='mb1'> Don't have an account yet?</h4>
              <p  onClick={() => onRouteChange('/register')} className="f5 ma1 w4 link dim black db pointer shadow-4" style={{marginLeft : 'auto', marginRight:'auto'}}>Register Now!</p>
            </div>
          </div>
        </main>
      </form>
      </div>
    );
  }
}

export default SignIn;