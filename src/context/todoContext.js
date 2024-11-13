import { createContext, useContext } from "react"


export const TodoContext = createContext({
    todos:[
        {
            id:1,
            title:"todo1",
            completed:false
        },
    ],
    addtodo:()=>{},
    deletetodo:()=>{},
    updatetodo:()=>{},
    toggletodo:()=>{}
})

// export const TodoProvider 
export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext)
}