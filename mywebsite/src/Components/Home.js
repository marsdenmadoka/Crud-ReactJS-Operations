import React,{ Component} from 'react'
import axios from 'axios' //used to fetch data in react from an API you can also use fetch

class Home extends Component{
state = {
    posts: [ ] //we will update this state with the data from api
}
  componentDidMount(){//here will use axias to grab the data
   axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(res => {
         console.log(res)
         this.setState({ //insert the data in our posts:[] array
             posts:res.data.slice(0,10) //get the first ten
         })
     })
    }

    render(){
        
        const { posts } = this.state;
        const postList = posts.length ? ( 
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                    <div className="card-content">
                   <span className="card-title">{post.title}</span>
                    <p>{post.body}</p>
                    </div>
                    </div>
                )
            })
        ) : ( 
          <div className="center">No posts yet</div>
            )

        return(
            <div className="container">
            <h4 className="center">Home</h4>
              {postList}   
        </div>
    
        )
    }
}
//functional components cannot use life cycle hooks
//class components can use life cycle hooks
export default Home