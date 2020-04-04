//react imports
import React from 'react';
//end of react imports

//css imports
import "bootstrap/dist/css/bootstrap.min.css"
import "./home.css"
import "./gallery.css"
//end of css imports

//fonts/icons imports
import sadFace from "../../images/sadFace.png"
import noContent from "../../images/noContent.jpg"
//end of fonts/icons imports

//firebase imports
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage"
import {Link} from "react-router-dom";
//end of firebase imports

//premesti go drugade
const firebaseConfig = {
   
};

firebase.initializeApp(firebaseConfig);


export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            arr:[]
        }

    }
    componentDidMount(){
        let self=this
        let ref =  firebase.storage().ref("resources");
        let imagesUrls=[]
        ref.listAll().then(function (result) {
            result.items.forEach((e) => {

                e.getDownloadURL().then((url) => {
                    url=url.substr(url.indexOf("/",42)+1)
                    imagesUrls.push(url)
                }).then(()=>self.setState({arr:imagesUrls}))
            })
        });




    }

    AuthRender() {
        if (this.props.isLogged) {

            if (this.state.arr.length!==0) {

                //raboti.opravi go i vij bibliotekata

                return (
                    <React.Fragment>
                       <div className="gallery">
                           {this.state.arr.map(id=>{

                               return <Link to ={`/details/${id}`}> <img src={"https:/firebasestorage.googleapis.com/v0/b/"+id}></img></Link>

                           })}


                       </div>
                    </React.Fragment>
                )
            } else {

                return <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">

                            <img className="img-responsive no-content-img" src={noContent}/>
                        </div>

                    </div>

                </div>
            }

        } else {
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


    render() {
        let htmlElement;
        htmlElement = this.AuthRender();

        return htmlElement
    }
}





