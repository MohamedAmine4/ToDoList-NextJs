"use client";
import React, { FormEvent, FormEventHandler, useState } from 'react'
import { FaPlus } from "react-icons/fa";
import Modal from './Modal';
import { addTodo } from '../../../Api';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
const ADDTask = () => {
  const router = useRouter();
  const [modalopen,setmodalopen]=useState<boolean>(false);
  const [newTask,setnewTask]=useState<string>("");
const handleSubmitNewTodo :FormEventHandler<HTMLFormElement>=async (e)=>{
e.preventDefault();
await addTodo({
  id:uuidv4(),
  title:newTask,

})
setnewTask("");
setmodalopen(false);
router.refresh();
}


  return (
    <div>
      <button onClick={()=>setmodalopen(true)} className="btn btn -primary  bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-8 w-full rounded">
        ADD NEW TASK <FaPlus size={15} />
      </button>
      <Modal modalopen={modalopen} setmodalopen={setmodalopen}>
      <form onSubmit={handleSubmitNewTodo}>
        <h3 className="text-center text-2xl font-bold text-white-800 mt-4">
          Add New Task
        </h3>
        <div className="modal-action"> <input 
        value={newTask}  
        onChange={(e)=>setnewTask(e.target.value)}
        type="text" placeholder="Type here" className="input input-bordered w-full w-full" />
        <button type="submit" className="btn">Submit </button>
        </div>
      </form>
        </Modal>
    </div>
  )
}

export default ADDTask




