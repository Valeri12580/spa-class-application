//react imports
import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
// end of react imports

//component imports
import Header from "../components/common components/Header-Component/header.js"
import Footer from "../components/common components/Footer-Component/footer.js"
import Home from "../components/Home-Component/home.js"
import Register from "../components/Register-Component/register.js"
import Login from "../components/Login-Component/login.js"
import Logout from "../components/Logout-Component/logout.js"
import Add from "../components/Add-Component/add.js"
import Details from "../components/Detail-Component/details.js"
//end of component imports

//firebase imports
import * as firebase  from "firebase/app";
import "firebase/auth";
//end of firebase imports



export default class App extends Component{
    constructor(props){
     super(props)
        this.state={
            isLogged:false
        }
    //eto zashto renderva dva puti
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.setState({isLogged:true})
                console.log(user)

            }else{
               this.setState({isLogged:false})
               console.log(user)
            }
        })
    } 
   
    render(){
        
      
    
        return( 
            <BrowserRouter>
            <Switch>
                <Route exact path="/">
                <Header isLogged={this.state.isLogged}/>
                <Home isLogged={this.state.isLogged}/>
                <Footer/>
                </Route>
                
                <Route path="/register">
                <Header isLogged={this.state.isLogged}/>
                <Register/>
                <Footer/>
                </Route>

                <Route path="/login">
                <Header isLogged={this.state.isLogged}/>
                <Login/>
                <Footer/>
                    
                </Route>

                <Route path="/logout">
                    <Header isLogged={this.state.isLogged}></Header>
                    <Logout/>
                    <Footer/>
                </Route>

                <Route path="/add">
                    <Header isLogged={this.state.isLogged}></Header>
                    <Add/>
                    <Footer/>
                </Route>

                <Route path="/details/:id" component={<Details/>} >
                    <Header isLogged={this.state.isLogged}></Header>

                    <Footer/>
                </Route>

                
            </Switch>
            
            </BrowserRouter>
            
            
           )
    }
}