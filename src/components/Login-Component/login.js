//react imports
import React, { Component } from 'react';
import {Redirect} from "react-router-dom"
//end of react imports

//css imports
import "bootstrap/dist/css/bootstrap.min.css"
//end of css imports

//firebase imports
import * as firebase  from "firebase/app";
import "firebase/auth";
//end of firebase imports


export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: " ",
            password: " ",
            redirect:false
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value })
    }
    handlePasswordChange(e){
        this.setState({ password: e.target.value })
    
    }
    handleSubmit(e){
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(()=>this.setState({redirect:true})).catch(e=>{
            alert(e.message)
        })
    }

    render(){

        const {redirect}=this.state;
        if(redirect){
            return <Redirect to="/"/>
        }else{
            let htmlElement = <form  method="post" onSubmit={this.handleSubmit}>
            <h1 className="text-center mb-5 mt-5">Login</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-center">
    
                        <label htmlFor="email" className="font-weight-bold">Email</label>
                    </div>
    
                    <div className="col-md-12 text-center">
                        <input id="email" className="form-control-m" type="text" placeholder="email" name="email" value={this.state.email} onChange={this.handleEmailChange}></input>
                    </div>
    
                    <div className="col-md-12 text-center">
                        <label htmlFor="password" className="font-weight-bold">Password</label>
                    </div>
    
                    <div className="col-md-12 text-center">
                        <input id="password" className="form-control-m" placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
    
                    </div>
                    <div className="col-md-12 text-center">
    
                        <button className="btn btn-dark mt-3" type="submit">Login</button>
    
                    </div>
    
                </div>
            </div>
    
        </form>;
    
    
        return htmlElement
        }
        
    }
        

}



