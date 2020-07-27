import React, { Component } from 'react';
 class AddNinja extends Component{

    state = {
        name:null,
        age:null,
        belt:null
    }
    handlechange = (e) =>{
        this.setState({
           [e.target.id]: e.target.value 
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
        this.props.addNinja(this.state)   //we calling this function from App.js

    }

render(){
    return(
       <div>
           <form onSubmit={this.handleSubmit}>
               <label htmlFor="name">Name:</label>
               <input type="text" id="name" onChange={this.handlechange}/>

               <label htmlFor="name">Age:</label>
               <input type="text" id="age" onChange={this.handlechange}/>

               <label htmlFor="name">Belt:</label>
               <input type="text" id="belt" onChange={this.handlechange}/>

              <button>Submit</button>
           </form>
       </div> 
    )
}

 }

 export default AddNinja;