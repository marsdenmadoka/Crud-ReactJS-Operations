import React, { Component } from 'react'
import {connect} from "react-redux"
import { createProject } from '../../store/actions/projectActions' //action creator
class CreateProject extends Component {
    state={
        title:'',
        content:''
    }
    handleChange =(e)=>{
        console.log(e)
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        //console.log(this.state)
        this.props.createProject(this.state) //pass the project into the action
    }
    render() {
        return (
            <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
     <h5 className="grey-text text-darken-3">CreateProject</h5>

     <div className="input-field">
    <label htmlFor="title">Title</label>
    <input type="text" id="title" onChange={this.handleChange}/>
        </div>

     <div className="input-field">
    <label htmlFor="content">Content</label>
    <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
                </form>  
            </div>
        )
    }
}
const mapDispatchToprops = (dispatch) => {
    return{
        createProject:(project)=> dispatch(createProject(project))
    }
}
export default connect(null,mapDispatchToprops)(CreateProject)
