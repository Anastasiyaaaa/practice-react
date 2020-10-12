import React from 'react';
import TodoList from './Todo/TodoList';
import Context from './Context.js'
import AddTodo from "./Todo/AddTodo";
import UseStateHook from "./Hooks/UseState";

//todo 55'
//https://www.youtube.com/watch?v=xJZa2_aldDs&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD
function APP(){
    const [todos, setTodos] = React.useState([
        {id:1, completed: false, title: 'buy hleb'},
        {id:2, completed: true, title: 'buy maslo'},
        {id:3, completed: false, title: 'buy sir'},
        {id:4, completed: false, title: 'buy moloko'}
        ]
    );

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo
            })
        )
    }
    function toggleTodoByContext(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo
            })
        )
    }
    function removeTodo(id) {
        setTodos(todos.filter(todo => {
            if (todo.id !== id) return todo
        }))
    }
    function addTodo(title) {
        setTodos(todos.concat([{
            id: Date.now(),
            completed: false,
            title
        }
        ]))
    }
//TODO
    return(
        <Context.Provider value={{removeTodo: removeTodo, toggleTodoByContext: toggleTodoByContext}}> {/* TODO чё это*/}
            <div className='wrapper'>
                <h1>React tutorial</h1>
                <AddTodo onCreate={addTodo}/>
                {
                    todos.length ? (
                    <TodoList todos={todos} onToggle={toggleTodo}/>
                    ) : (<p>No todos!</p>)
                }
                <UseStateHook />
            </div>
        </Context.Provider>

    )

}


export default APP