import React from 'react';

import {useParams} from "react-router-dom";


import "firebase/storage"

export  default class Details extends React.Component{
    constructor(props){
        super(props)



    }



    render(){

            let path =this.props.location.pathname+this.props.location.search
        path=path.replace("/details/","https:/firebasestorage.googleapis.com/v0/b/");
        console.log(this.props)

        return <img src={path}></img>
    }





}

