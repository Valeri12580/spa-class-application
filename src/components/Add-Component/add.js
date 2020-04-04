//css imports
import "bootstrap/dist/css/bootstrap.min.css"

import "./add.css"
//end of css imports

//react imports
import React, {Component} from 'react';
//end of react imports

//firebase imports
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage"
//end of firebase imports


export default class Add extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            percents: 15
        }


    }




    //napravi taka che progress bara da raboti i sled kato prikluchi stranicata da se reloadne
    //TODO da e vuzmojno da se dobavqt poveche ot edin element
    handleSubmit(e) {

        e.preventDefault()

        let inputFile = document.getElementById("file").files[0];
        let storageRef = firebase.storage().ref("resources/" + inputFile.name);
        try {

            let task = storageRef.put(inputFile, {
                customMetadata: {
                    "author": firebase.auth().currentUser.email,
                    "createdOn": getCreationTime(),
                    "likes": 0
                }
            })

            let progressBar = document.getElementById("progress-bar")
            task.on("state_changed", function progress(snapshot) {
                let percents = parseInt(snapshot.bytesTransferred / snapshot.totalBytes * 100) + "%"
                progressBar.textContent = percents;
                progressBar.style.width = percents


            }, function error(error) {
                alert(error.message)

            }, function complete(complete) {


                let alert = document.getElementById("alert-success");
                alert.style.display = "inline";


                document.getElementById("removeSuccessAlertBtn").addEventListener("click", function (e) {
                    alert.style.display = "none";
                    window.location.reload()
                })


            })


        } catch (error) {
            let alert = document.getElementById("alert-warning");
            alert.style.display = "inline";
            document.getElementById("removeWarningAlertBtn").addEventListener("click", function (e) {
                alert.style.display = "none"
            })
        }


    }


    render() {
        //napravi errora kato komponent s prop i da priema message.
        return <form onSubmit={this.handleSubmit}>

            {/*warning*/}
            <div id="alert-warning" className="container" style={{display: "none"}}>
                <div className="alert alert-danger alert-dismissible fade show  text-center">
                    You must upload at least one file.
                    <button id="removeWarningAlertBtn" type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>

            {/*success*/}
            <div id="alert-success" className="container" style={{display: "none"}}>
                <div className="alert alert-success alert-dismissible fade show  text-center">
                    File/files are uploaded successful.
                    <button id="removeSuccessAlertBtn" type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>


            <div className="container w-25">
                <div className="row">
                    <div className="col-12 text-center">

                        <ProgressBar/>
                        <input id="file" className="mt-3" type="file"/>
                        <input className="btn btn-info mt-4" style={{background: "purple"}} type="submit"/>


                    </div>
                </div>
            </div>
        </form>
    }
}

function ProgressBar(props) {
    return <div className="progress mt-5">
        <div id="progress-bar" className="progress-bar progress-bar-striped" role="progressbar"
             style={{width: "0%"}} aria-valuenow="25"
             aria-valuemin="0" aria-valuemax="100">0%
        </div>

    </div>
}

function getCreationTime() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime
}
