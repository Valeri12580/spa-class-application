//react imports
import React from 'react';
//end of react imports

//css imports
import "bootstrap/dist/css/bootstrap.min.css"
import "./home.css"
//end of css imports

//fonts/icons imports
import sadFace from "../../images/sadFace.png"
import noContent from "../../images/noContent.jpg"
//end of fonts/icons imports

//firebase imports
import * as firebase  from "firebase/app";
import "firebase/auth";
//end of firebase imports

//premesti go drugade
const firebaseConfig = {
    apiKey: "",
    authDomain: "spa-class.firebaseapp.com",
    databaseURL: "https://spa-class.firebaseio.com",
    projectId: "spa-class",
    storageBucket: "gs://spa-class.appspot.com/",
    messagingSenderId: "1038197789716",
    appId: "1:1038197789716:web:c6f83f56b6fcdebf018301",
    measurementId: "G-SF4M2ZHCBZ"
  };

  firebase.initializeApp(firebaseConfig);


export default class Home extends React.Component{
    constructor(props){
        super(props)
    }
        render(){
            let htmlElement;
            htmlElement=AuthRender(this.props)
            
            return htmlElement
        }
}

function AuthRender(props){
    if(props.isLogged){
        let content=false;

        if(content){
            return <h1>We have a content</h1>
        }else{
            return <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                    <img className="img-responsive no-content-img" src={noContent}/>
                    </div>
                    
                </div>
               
            </div>
        }
        
    }else{
        return (
            <div id="main">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                        <img src={sadFace}/>
                    </div>
    
                    <div className="col-md-6 col">
                    
                    <h1>You need to be registered to view the content</h1></div>
                    </div>
    
                    </div>
                    
                </div>
        )
    }
    
  

}