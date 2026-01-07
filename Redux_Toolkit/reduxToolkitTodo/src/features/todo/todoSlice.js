import { createSlice, nanoid } from "@reduxjs/toolkit"; //nano id generate unique id 
import { } from "react";


// Redux toolkit ki notes
// 1. Create Store - single source of truth
// it has configureStore
// introduce reducer

// 2. Create Slice(functions) method(createSlice)
// Slice has name, initialState, reducers :{key: function}
// Access of two things (State, action)
// state = state value in the store
// action = action.payload 
// export individual functionality 
// export main source export

// 3. Add Todo - Give values to State i.e Dispatch Courier  = use method useDispatch()
//  dispatch(addTodo())

// 4. Take Values - useSelector((state) =>state.todos) state ka access chaiye
// variable me values lelo ek baar aagaie uske baad pure JS concept hai 

// it is used to initiliaze the state it can used with array or object
// const initialState = [], { }

const initialState = {
    todos: [{ id: 1, text: 'Hello WOrld' }]
}



//now we have too make reducer / slicer it is also known as function

export const todoSlice = createSlice({
    //there are name for slices carefully suggest the name:
    name: 'todo',
    initialState,
    //now here we make our reducer which have properties and function
    // reducers: {
    //     addtodo: sayHello
    // }
    //Method 2:Always reducer returns (state, action)
    //state: it access the values to our initial state live 
    //action:it get some value like 

    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }

            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.
                id !== action.payload)
        },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer