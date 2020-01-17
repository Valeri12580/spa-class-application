//css imports
import "bootstrap/dist/css/bootstrap.min.css"
import "./footer.css"
//end of css imports

//react imports
import React from 'react';
//end of react imports

//fonts/icons import.
import {faFacebookF} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
// end of fonts/icons imports

export default class Footer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        let htmlElement;

        htmlElement=<div id="footer" className="container-fluid">
            <div className="row">

            <div className="col-md-6" >
            <a target="_blank" href="https://www.facebook.com/valeri.stoqnov.587"><FontAwesomeIcon className ="mt-3 ml-3" icon={faFacebookF}  size="2x"/></a>
            <a target="_blank" href="https://www.instagram.com/valeri_stoqnov00/"><FontAwesomeIcon className ="mt-3 ml-3" icon={faInstagram} size="2x"/></a>
            <a  target="_blank" href="https://github.com/Valeri12580"><FontAwesomeIcon className ="mt-3 ml-3" icon={faGithub} size="2x" /> </a>
            
            </div>

            <div className="col-md-6"> 
            <a  className="nav nav-link mt-3 "href="/about" >About Creators</a> </div>

            </div>
            
           
        </div>

        return htmlElement

    }
}
