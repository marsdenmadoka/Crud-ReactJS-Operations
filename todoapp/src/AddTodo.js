import React,{Component} from 'react'

class AddTodo extends Component{
    state={
        content:""

    }

handleChange = (e) =>{
    this.setState({
        content: e.target.value
        
    })
}

handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state)
    this.props.addTodo(this.state);
    this.setState({//empty the field after we submit
content: ""
    })
}

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Add new todo</label>
                <input type="type" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodo