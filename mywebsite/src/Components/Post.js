import React, {Component} from 'react'
import axios from 'axios'
import {connect } from 'react-redux' //for redux

//route parameters
// //here we displaying one post data when the post tiitle is clicked alos linked to hme.js titile code
// //for fetching to the API 
// class Post extends Component{
//     state = {
//         post:null
//     }
//     componentDidMount(){
//         console.log(this.props);
//         let id = this.props.match.params.post_id;
//         axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
//         .then(res=>{
//             this.setState({
//              post:res.data
//             })
//             console.log(res)
//         })
       
//     }

// render(){

//     const post = this.state.post ? (

//      <div className="post">
//       <h4 className="center">{this.state.post.title}</h4>
//          <p>{this.state.post.body}</p>
//    </div>

//     ) : (
//         <div className="center">loading post... </div>
//     )
//     return(
//         <div className="container">
//             <h4>{post}</h4>
//         </div>
//     )
// }

// }

// export default Post






//For REDUX
class Post extends Component{
render(){

    const post = this.props.post ? (

     <div className="post">
      <h4 className="center">{this.props.post.title}</h4>
         <p>{this.props.post.body}</p>
   </div>

    ) : (
        <div className="center">loading post... </div>
    )
    return(
        <div className="container">
            <h4>{post}</h4>
        </div>
    )
}

}
const mapStateToProps =(state,ownProps) =>{
    let id = ownProps.match.params.post_id;
    return{
        post: state.posts.find(post => post.id == id)
    }

}

export default connect(mapStateToProps)(Post)