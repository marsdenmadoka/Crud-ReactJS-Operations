import React from 'react'

const Contact = (props) => {
    setTimeout(()=>{//programatic redirect
     props.history.push('/about')
    },2000);

    return(
        <div className="container">
        <h4 className="center">Contact</h4>
        <p>this is my contact page!! </p>
    </div> 
    )
   
}

export default Contact