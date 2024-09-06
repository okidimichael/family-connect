import React from 'react';
import ReactDOM from 'react-dom';

class SignIn extends React.Component{
	
	constructor(props){
		super(props);
		this.state ={
			SigninEmail: '',
			SigninPassword:'',
		
		}
	}
onEmailChange = (event) =>{
	this.setState({SigninEmail: event.target.value})
}

onPasswordChange = (event) =>{
	this.setState({SigninPassword: event.target.value})
}

onSubmitSignin =({onRouteChange}) =>{
	fetch('http://localhost:3003/Signin', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			email: this.state.SigninEmail,
			password: this.state.SigninPassword

		})

	}).then(response =>response.json())
	.then(data => {
		if(data==='Success') {
	this.props.onRouteChange('Home');
	alert('Logged in Successfully')
		}else{
	alert('Incorrect email and password')
		}
	});
	
}
/*onSubmitSignin =({LoadUser}) =>{
fetch('http://localhost:3003/Profile/id',{
method: 'post',
headers: {'Content-Type': 'application/json'},
body: JSON.stringify({
	id: 123
})
}).then(response =>response.json())
.then(Users =>{
	if(Users){
		this.props.LoadUser(Users);
	}
})
}*/
/*componentWillUnmount(){}*/

render(){
	  return(
    <div method='post'>
  <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l shadow-5  mw5 center">
			    <main className="pa4 black-80">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend  className="f2 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="email" 
			        name="email-address" 
			        id="email-address" 
			        onChange = {this.onEmailChange} 
			        />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="password" 
			        name="password"
			        id="password" 
			        onChange = {this.onPasswordChange}
			        />
			      </div>
			      <label className="pa0 ma0 lh-copy sf6 pointer"><input type="checkbox" /> Remember me</label>
			    </fieldset>
			    <div className="">
			      <input 
			      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
			      type="submit" 
			      value="Sign in" 
					onClick ={this.onSubmitSignin}
			      />
			    </div>
			    <div className="lh-copy mt3">
			      <p onClick={() =>this.props.onRouteChange('Register')} className="f6 link dim black db pointer">Register</p>
			      <a onClick={() => {this.props.onRouteChange('ChangePassword')}}href="#0" className="f6 link dim black db">Forgot your password?</a>
			    </div>
			  </div>
			</main>
 </article>
    </div>
  );

	}
	
}
export default SignIn;
