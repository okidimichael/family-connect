import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import CardList from '../Components/CardList';
import { GridData } from '../Components/GridData';
import Header from '../Components/Header';
import Cover from '../Components/Cover';
import Footer from '../Components/Footer';
import SearchBox from '../Components/SearchBox';
import SignIn from '../Components/SignIn';
import Register from '../Components/Register';
import 'tachyons';
import Scroll from '../Components/Scroll';
import ProjectGrid from '../Components/ProjectGrid';

import Ranked from '../Components/Ranked'
import UpdateUser from '../Components/UpdateUser'
/*import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";*/
import './MainGrid.css'


class MainGrid extends Component{
	constructor(props) { 
		super(props)
		this.state = {
		searchfield: "",
		GridData: GridData,
		route: 'SignIn',
			Users:{
			id: '',
			name: '',
			password: '',
			email: '',
			rank: 0,
			Joined: ''
			}
		}
	}
		onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value})
		
		}

		onRouteChange = (route) =>{
			this.setState({route: route})
		}
	LoadUser = (data) =>{
		this.setState({Users:{
			id:data.id,
			name:data.name,
			email:data.email,
			rank: data.rank,
			password:data.password
			}
		})
		
	}
	
	
	/*componentDidMount(){
		fetch('http://localhost:3002/Users')s
		.then(response =>response.json())
		.then(data =>(console.log(data)));
	}*/

render() {

	/*console.log(Users)*/
	const Datafil = this.state.GridData.filter(GridData =>{
	return GridData.name.toLowerCase().includes
	(this.state.searchfield.toLowerCase())})
	/*console.log(Datafil)*/				
return (

		<div className='tc'>

		
		 <Header onRouteChange={this.onRouteChange}/>

		{ this.state.route === 'Home' ?
			<div>
			<Ranked LoadUser={this.LoadUser}/>
		  	<Cover />
			<h1> FAMILY CONNECT..... </h1>
			<SearchBox searchChange={this.onSearchChange} />
			<Scroll>
			<CardList GridData={Datafil}/>
			</Scroll>
			 <Footer />
		</div>
		
		: this.state.route === 'SignIn' ?
		<SignIn  onRouteChange={this.onRouteChange}/>

		:this.state.route==='ChangePassword' ?
		<UpdateUser onRouteChange={this.onRouteChange} />
		: <Register onRouteChange={this.onRouteChange}  LoadUser ={this.LoadUser}/>
		}
		</div>
		);
	}
}
export default MainGrid;