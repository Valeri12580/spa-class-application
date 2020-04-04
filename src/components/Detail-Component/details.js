import React from 'react';

import "./details.css"




import "firebase/storage"
import * as firebase from "firebase";


export  default class Details extends React.Component{
    constructor(props){
        super(props)
        this.state={
            author:"",
            likes:0,
            createdOn:""
        }



    }

    createImage(){
        let self=this
        //iznesi v otdelen metod
        let refPath="gs://"+this.props.history.location.pathname.substr(9);
        refPath=refPath.replace("%2F","/")
        refPath=refPath.replace("o/","")
        //

        let path =this.props.location.pathname+this.props.location.search
        path=path.replace("/details/","https:/firebasestorage.googleapis.com/v0/b/");

        let storageRef = firebase.storage().refFromURL(refPath)


        storageRef.getMetadata().then(function (metadata) {
            self.setState({author:metadata.customMetadata.author,
            likes:metadata.customMetadata.likes,
            createdOn:metadata.customMetadata.createdOn})

        })



        return <div>
            <img src={path}/>
            <p>Author {this.state.author}</p>
            <p>Likes {this.state.likes}</p>
            <p>Created on {this.state.createdOn}</p>
        </div>;

    }



    render(){

            let html=this.createImage();

        return html;
    }





}

