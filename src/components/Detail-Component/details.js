import React, {Fragment} from 'react';

import "./details.css"


import "firebase/storage"
import * as firebase from "firebase";


export default class Details extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            author: "",
            likes: 0,
            createdOn: "",

        }


    }


    createElement() {
        let self = this
        getUser(self)

        let link = createImgLink(this.props)
        let storageRef = createRef(this.props)
        setMetadata(storageRef, this)


        //
        let element = <div>
            <img src={link}/>
            <p>Author {this.state.author}</p>
            <p>Likes {this.state.likes}</p>
            <p>Created on {this.state.createdOn}</p>
            {renderButtons(self)}
        </div>;


        return element

    }


    render() {

        let html = this.createElement();

        return html;
    }

}


function createRef(props) {

    let ref = "gs://" + props.history.location.pathname.substr(9);
    ref = ref.replace("%2F", "/")
    ref = ref.replace("o/", "")
    return firebase.storage().refFromURL(ref);

}

function setMetadata(storageRef, self) {
    storageRef.getMetadata().then(function (metadata) {
        self.setState({
            author: metadata.customMetadata.author,
            likes: metadata.customMetadata.likes,
            createdOn: metadata.customMetadata.createdOn
        })

    })
}

function createImgLink(props) {
    let path = props.location.pathname + props.location.search
    path = path.replace("/details/", "https:/firebasestorage.googleapis.com/v0/b/");
    return path
}

function renderButtons(self) {

    if (self.user) {
        if (self.user.email === self.state.author) {

            return <React.Fragment>
                <button>Change</button>
                <button>Edit</button>
            </React.Fragment>
        }else{
            return <button>like</button>
        }
    }

}


function getUser(self) {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {

            self.user = user

        }
    });
}







