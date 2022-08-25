import React from "react";
import TodoItem from "./TodoItem";
function Todos(props) {
    return (
        <>
            <div className="container">
                <h1 className="text-center my-3">Todo's List :</h1>
                { props.todos.length === 0 ? "No Todo's" :
                    props.todos.map((todo) => {
                        return (
                            <>
                                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Todos;