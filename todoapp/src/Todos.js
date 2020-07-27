import React from "react"
{/* accesing our todos refer in app js line 16 */}
const Todos = ({todos,deleteTodo}) =>{
    const todoList=todos.length ? ( //this statement is the same as if else statement
       todos.map(todo=>{
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}> {todo.content}</span> {/* dislpay out the list items */}
                </div>
            )
        })
    ) : (
        <p className="center">you have no todos lefe</p>
    ) 
    return(
        <div className="todos collection">
         {todoList}
        </div>
    )
}


export default Todos