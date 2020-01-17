//react imports
import React from 'react';
//end of react imports

//bootstrap imports
import "bootstrap/dist/css/bootstrap.min.css"
import "./header.css"
//end of bootstrap imports

export default class Header extends React.Component {
    constructor(props) {
        super(props)


    }
        //tova e da budat disable-nati natisnatite linkove
        // componentDidMount() {
        //     Array.from(document.getElementsByClassName("nav-link")).map(e=>{
        //         e.disabled=true;
        //     })
        // }

    checkLogin(props){
        if(props.isLogged){
            return (
                <React.Fragment>
                    <a className="nav-item nav-link  mt-2 mr-2 ml-2" href="/add">Add Video/Picture</a>
                    <a className="nav-item nav-link  mt-2 mr-2 ml-2" href="/profile">Profile</a>
                    <a className="nav-item nav-link  mt-2 mr-2 ml-2" href="/logout">Logout</a>

                </React.Fragment>

            )
        }
        else{
            return ( <React.Fragment>
                <a className="nav-item nav-link  mt-2 mr-2 ml-2 " href="/register">Register</a>
                <a className="nav-item nav-link    mt-2 mr-2 ml-2" href="/login">Login</a>
            </React.Fragment>)


        }
    }


    render() {
        let htmlElements;
        htmlElements = <nav className="site-header ">
            
            <div id="header" className="nav container-fluid">
            <a className="nav-item nav-link mt-2 mr-2" href="/">Home</a>
            {this.checkLogin(this.props)}
            </div>

        </nav>




        return htmlElements
    }
}

