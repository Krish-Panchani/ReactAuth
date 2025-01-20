import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import store, { addTask, deleteTask } from "../store";

const Todo = () => {
    const tasks = useSelector((state) => state.task);
    const [taskname, setTaskname] = useState("");
    const dispatch = useDispatch();

    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(addTask(taskname));
        return setTaskname("");
    }
    const handleDelete = (index) => {
        console.log("index", index);
        return dispatch(deleteTask(index));
    }
    return (
        <div className="container">
            <div className="todo-app">
                <h1>
                    <i className="fa-regular fa-pen-to-square">To-do List:</i>
                </h1>
                <div className="row">
                    <form onSubmit={handleAdd}>
                        <input type="text" id="input-box" placeholder="Add a Task" value={taskname} onChange={(e) => setTaskname(e.target.value)} />
                        <button>Add Task</button>
                    </form>
                </div>
                <ul id="list-container">
                    {tasks.map((curTask, index) => {
                        return <li key={index}>{curTask}
                            <div onClick={() => handleDelete(index)}>delete</div></li>
                    })}
                </ul>
            </div>
        </div>
    )
}
export default Todo;