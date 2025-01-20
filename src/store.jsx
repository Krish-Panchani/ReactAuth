import { createStore } from "redux";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const initialState = {
    task: [],
    isLoading: false,
}
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task: [...state.task, action.payload],
            }
        case DELETE_TASK:
            const updatedTask = state.task.filter((curTask, index) => {
                return index !== action.payload;
            })
            return {
                ...state,
                task: updatedTask,
            }


        default: return state;
    }

}


const store = createStore(taskReducer);
export const addTask = (data) => {
    return { type: ADD_TASK, payload: data }
}

export const deleteTask = (id) => {
    return { type: DELETE_TASK, payload: id }
}
console.log(store);


console.log("initialState:", store.getState());

store.dispatch(addTask("Task 1"));
store.dispatch(addTask("Task 2"));
store.dispatch(addTask("Task 3"));

console.log("After ADD_TASK:", store.getState());

export default store;