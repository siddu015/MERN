
import React, { useState } from "react";

export default function TodoList() {
    let [todos, setTodos] = useState([
        { id: 1, task: "Sample Task", done: false },
    ]);

    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        if (newTodo.trim() === "") return; // Prevent adding empty task
        let newTask = {
            id: todos.length + 1,
            task: newTodo,
            done: false,
        };
        setTodos([...todos, newTask]);
        setNewTodo(""); // Clear input after adding task
    };

    let deleteTask = (id) => {
        let updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let markTaskAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        done: !todo.done,
                    };
                } else {
                    return todo;
                }
            })
        );
    };

    let UpperCaseAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            })
        );
    };

    let upperCaseOne = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    };
                } else {
                    return todo;
                }
            })
        );
    };

    return (
        <div>
            <input
                placeholder="Add a task"
                value={newTodo}
                onChange={updateTodoValue}
            />
            &nbsp;
            &nbsp;
            <button onClick={addNewTask}>Add Task</button>
            <hr />
            <h4>Tasks To Do</h4>
            <button onClick={UpperCaseAll}>Convert All to Uppercase</button>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>{todo.task}</span>
                        &nbsp;
                        &nbsp;
                        <button onClick={() => deleteTask(todo.id)}>Delete</button>
                        &nbsp;
                        &nbsp;
                        <button onClick={() => upperCaseOne(todo.id)}>Convert to Uppercase</button>
                        &nbsp;
                        &nbsp;
                        <button onClick={() => markTaskAsDone(todo.id)}>{todo.done ? "Undo" : "Done"}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
