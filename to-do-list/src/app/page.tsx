import { getTodos } from "../../Api";
import ADDTask from "./component/ADDTask";
import Todolist from "./component/Todolist"; 


export default async function Home() {
  
  const task = await getTodos();
  console.log(task);
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">To do List App</h1>
      <ADDTask/>
      </div>
      <Todolist tasks={task}/>
    </main>
  );
}
