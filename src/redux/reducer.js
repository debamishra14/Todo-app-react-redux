import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    FILTER_TODOS,
    MARK_COMPLETED,
    MARK_INCOMPLETE,
    MARK_ALL_COMPLETED,
    UPDATE_SEARCH_TERM,
} from "./actionTypes";

const initialState = {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    filter: "ALL",
    searchTerm: "",
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length,
                        text: action.payload.text,
                        completed: false,
                    },
                ],
                filter: state.filter,
                searchTerm: state.searchTerm,
            };
        case REMOVE_TODO:
            return {
                todos: state.todos.filter(
                    (todo) => todo.id !== action.payload.id
                ),
                filter: state.filter,
                searchTerm: state.searchTerm,
            };
        case TOGGLE_TODO:
            return {
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
                filter: state.filter,
                searchTerm: state.searchTerm,
            };
        case MARK_COMPLETED:
            return {
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id
                        ? { ...todo, completed: true }
                        : todo
                ),
                filter: state.filter,
                searchTerm: state.searchTerm,
            };
        case MARK_INCOMPLETE:
            return {
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id
                        ? { ...todo, completed: false }
                        : todo
                ),
                filter: state.filter,
                searchTerm: state.searchTerm,
            };
        case MARK_ALL_COMPLETED:
            return {
                todos: state.todos.map((todo) => ({
                    ...todo,
                    completed: true,
                })),
                filter: state.filter,
                searchTerm: state.searchTerm,
            };
        case UPDATE_SEARCH_TERM:
            return {
                todos: state.todos,
                filter: state.filter,
                searchTerm: action.payload.searchTerm,
            };
        case FILTER_TODOS:
            return {
                todos: state.todos,
                filter: action.payload.filter,
                searchTerm: state.searchTerm,
            };
        default:
            return state;
    }
};

export default todoReducer;
