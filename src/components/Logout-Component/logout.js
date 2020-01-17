//react imports
import React,{Component} from 'react';
import {Redirect} from "react-router-dom"
//end of react imports

//css imports
import "bootstrap/dist/css/bootstrap.min.css"
//end of css imports

//firebase imports
import * as firebase  from "firebase/app";
import "firebase/auth";
//end of firebase imports

export default class Logout extends React.Component{
    constructor(props){
        super(props)
         this.state={
            redirect:false,
            timer:5
        }

        this.timer=this.timer.bind(this)

    }
    //pomisli kak da pochistish intervala
    timer(){
        setInterval(()=>{
            this.setState({timer:this.state.timer-=1})
            
        },1000)
    }
    componentDidMount(){
            this.timer()
            console.log("test")
       
    }
    componentDidUpdate(){
        if(this.state.timer===0){
            firebase.auth().signOut().then(()=>{
                this.setState({redirect:true})
            })
        }
    }

    clearTimer(interval){
        clearInterval(interval)
    }


    render(){

        //div-a s alert-success stana responsive
        if(this.state.redirect){
           return <Redirect to="/"/>
        }else{
            return <div className="container">
            <div class="row">

                <div className="alert alert-success   col-12 text-center">
                <p><strong>Logout</strong> and <strong>redirect</strong> after {this.state.timer} seconds</p>
                </div>
            </div>
            
               
        </div>
        }

        
    }
}