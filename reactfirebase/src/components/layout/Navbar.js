import React from "react"
import { Link } from 'react-router-dom'
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"
import { connect } from 'react-redux'

const Navbar = (props) => { 
    const { auth }=props;
    console.log(auth)
    const links =auth.uid ? <SignedInLinks/> : <SignedOutLinks/> //if user is signed displayed the signoutlnks if they signout display the signinLink
    return(
     <nav className="nav-wrapper grey darken-3">
     <div className="container">
     <Link to='/' className="brand-logo">Madoka plan</Link>
        {links}   {/* dislpaying the signinLink and SignedInLinks link */}
     </div>
     </nav>
    )
}
const mapStateToProps =(state)=>{
    return{
 auth:state.firebase.auth
    }
}
export default connect(mapStateToProps)(Navbar)