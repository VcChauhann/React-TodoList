import React from "react";

function TodoItem({todo,onDelete}){
    return(
        <div className="container">
        <h5>{todo.title}</h5>
        <p>{todo.desc}</p>
        <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}

export default TodoItem;