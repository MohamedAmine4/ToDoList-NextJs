import { Task } from "./types/task";

const baseUrl="http://localhost:3001";

export const getTodos = async (): Promise<Task[]> => {
  try {
    const res = await fetch(`${baseUrl}/todos`, { cache: "no-store" });
    const todos = await res.json();
    return todos;
  } catch (error) {
    console.error("Erreur lors de la requête fetch :", error);
    throw error; // Vous pouvez choisir de gérer l'erreur d'une manière spécifique ici
  }
};

export const addTodo =async (todo:Task): Promise<Task>=>{
  const res= await fetch(`${baseUrl}/todos`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(todo)
})
const newTodo=await res.json();
return newTodo;
}
export const EditTodo =async (todo:Task): Promise<Task>=>{
  const res= await fetch(`${baseUrl}/todos/${todo.id}`,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(todo)
})
const updatedToDo=await res.json();
return updatedToDo;
}
export const DeleteTodo =async (id:string): Promise<void>=>{
   await fetch(`${baseUrl}/todos/${id}`,{
    method:"DELETE",
})
}