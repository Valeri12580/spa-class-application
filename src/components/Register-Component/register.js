//react imports

import React from 'react';
import {Redirect} from "react-router-dom"
//end of react imports

// css imports
import "bootstrap/dist/css/bootstrap.min.css"
//end of css imports

//firebase imports
import * as firebase  from "firebase/app";
import "firebase/auth";
//end of firebase imports


export default class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            email:"",
            password:"",
            rePassword:"",
            redirect:false
        }
        this.handleEmailChange=this.handleEmailChange.bind(this)
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.handleRePasswordChange=this.handleRePasswordChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        
    }

    handleEmailChange(e){
        this.setState({email:e.target.value})

    }
    handlePasswordChange(e){
        this.setState({password:e.target.value})

    }
    handleRePasswordChange(e){
        this.setState({rePassword:e.target.value})
    }
    handleSubmit(e){
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(()=>this.setState({redirect:true})).catch(e=>{
            alert(e.message)
        })
        
        
        
        


    }
    render() {
        const redirect=this.state.redirect;
        if(redirect){
            return  <Redirect to="/login"/>
        }else{
            let htmlElement = <form action="/register" method="post" onSubmit={this.handleSubmit} o>
            <h1 className="text-center mb-5 mt-5">Register</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <label htmlFor="email" className="font-weight-bold">Email</label>
                    </div>
                    <div className="col-md-12 text-center">
                        <input id="email" className="form-control-m" type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleEmailChange}></input>
                    </div>

                    <div className="col-md-12 text-center">
                        <label htmlFor="password" className="mt-3  mr-1 font-weight-bold">Password</label>
                        <input id="password" className="form-control-m" placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
                        <label htmlFor="fePassword" className="ml-5  mr-1 font-weight-bold">Re-Password</label>
                        <input id="rePassword" className="form-control-m " placeholder="RePassword" type="password" name="rePassword" value={this.state.rePassword} onChange={this.handleRePasswordChange}></input>
                    </div>


                    <div className="col-md-12 text-center">

                        <button className="btn btn-dark mt-3" type="submit">Register</button>

                    </div>




                </div>
            </div>
        </form>;


        return htmlElement
        }
        
    }

}