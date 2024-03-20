import {createSlice,nanoid } from '@reduxjs/toolkit'

const initialState={
    todos:[{id:1,text:"Hello world"}]
}

export const todoSlice=createSlice({        //we called the Slice to the features
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{     //* Always we have access state and action in reducers
            const todo={
                id:nanoid(),
                text:action.payload      // by using action we can extract text
            }
            state.todos.push(todo);
        },       
        removeTodo:(state,action)=>{      //state -> current state 
                                          //action-> data passed 
             state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo:(state,action)=>{
            state.todos.map((todo)=>todo.id===action.payload.id ? todo.text=action.payload.text :todo.text)
        }
    }
})


export const {addTodo,removeTodo,updateTodo}=todoSlice.actions

export default todoSlice.reducer          //registering the reducers to the configure storage















/*steps to setup redux 
1.create store
2.create slice
3.

*/