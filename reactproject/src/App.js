import React, { Component } from 'react';
import Ninjas from './components/Ninjas';
import AddNinja from './components/AddNinja';


class App extends Component{
  state = {
    ninjas:[
      {name:"madoka", age:"22" ,belt:"green",id:"1"},
      {name:"joan", age:"30" ,belt:"red",id:"2"},
      {name:"jeeff", age:"24" ,belt:"black",id:"3"},
      {name:"roba", age:"18" ,belt:"red",id:"4"}
    ]
  }

  addNinja = (ninja) =>{ //pushing our new created ninja to our array
    console.log(ninja)
    ninja.id=Math.random();
    let ninjas=[...this.state.ninjas,ninja] //coppiny the array taking the array and spreading it
    this.setState({
      ninjas:ninjas
    })
  }

deleteNinja = (id) =>{
console.log(id)
let ninjas=this.state.ninjas.filter(ninja => {
  return ninja.id !== id 
});
this.setState({
  ninjas:ninjas
})
}


  render(){
    return (
      <div className="App">
        <h1>my first react app</h1>
        <p>welcome</p>
        {/* <Ninjas/>
        <Ninjas name="madoka" age="22" belt="green"/>
        <Ninjas name="jeff" age="23" belt="red"/> */}


        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>
        
      </div>
    );
  }
}
  


export default App;
