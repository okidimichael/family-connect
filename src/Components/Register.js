import React from 'react';
import ReactDOM from 'react-dom';

class Register extends React.Component{
	constructor(props){
		super(props);
		this.state ={
		name: "",
		email: "",
		password: ""

		}
	}
onNameChange = (event) =>{
	this.setState({name: event.target.value})
}

onEmailChange =(event) =>{
	this.setState({email: event.target.value})
}
onPasswordChange =(event) =>{
	this.setState({password: event.target.value})
}

onButtonRegister =({LoadUser}) =>{
	fetch('http://localhost:3003/register',{
method: 'post',
headers: {'Content-Type': 'application/json'},
body: JSON.stringify({
	name: this.state.name,
	email: this.state.email,
	password: this.state.password
})
}).then(response =>response.json())
.then(Users =>{
	if(Users){
		this.props.LoadUser(Users)
		this.props.onRouteChange('Home')
	}
})
}
render(){ 
		
  return (
    <div method='post'>
  <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l shadow-5  mw5 center">
			    <main className="pa4 black-80">
			  <form className="measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend  className="f2 fw6 ph0 mh0">Register</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="text" 
			        name="name"  
			        id="name" 
			        onChange={this.onNameChange}
			        />
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" 
			        name="email-address"  
			        id="email-address" 
			        onChange={this.onEmailChange}
			        />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="password" 
			        name="password"  
			        id="password" 
			        onChange={this.onPasswordChange}
			        />
			      </div>
			    </fieldset>
			     <div className="lh-copy mt3">
			      <p onClick={this.onButtonRegister} className="f6 link dim black db pointer">Register</p>
			    
			    </div>
			  </form>
			</main>
 </article>
    </div>
      );
  		}

	}
export default Register;
