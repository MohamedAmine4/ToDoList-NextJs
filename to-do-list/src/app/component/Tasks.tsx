"use client";

import React, { FormEventHandler, useState } from 'react'
import { Task } from '../../../types/task'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import { DeleteTodo, EditTodo } from '../../../Api';

interface TaskProps {
  task: Task
}
const Task:React.FC<TaskProps> = ({task}) => {
  const router=useRouter();
  const [openModelEdit, setopenModelEdit] = useState<boolean>(false);
  const [openModelDelete, setopenModelDelete] = useState<boolean>(false);
  const [taskToEdit, settaskToEdit] = useState<string>(task.title); 
  const handleSubmitEditTodo:FormEventHandler<HTMLFormElement>=async (e)=>{
    e.preventDefault();
    await EditTodo({
      id:task.id,
      title:taskToEdit,
    
    })
    setopenModelEdit(false);
    router.refresh();
    }

const handleDeleteTask=async (id:string)=>{
  await DeleteTodo(id);
  setopenModelDelete(false);
  router.refresh();
}



  return (
    <tr key={task.id}>
    
    <td className='w-full'>{task.title}</td>
  
    <td className='flex gap-5'>
      <FaRegEdit onClick={()=>setopenModelEdit(true)} cursor='pointer' className='text-blue-500' size={25}/>
      <Modal modalopen={openModelEdit} setmodalopen={setopenModelEdit}>
      <form onSubmit={handleSubmitEditTodo}>
        <h3 className="text-center text-2xl font-bold text-white-800 mt-4">
          Edit Task
        </h3>
        <div className="modal-action"> <input 
        value={taskToEdit}  
        onChange={(e)=>settaskToEdit(e.target.value)}
        type="text" placeholder="Type here" className="input input-bordered w-full " />
        <button type="submit" className="btn bg-green-800">Edit </button>
        </div>
      </form>
        </Modal>
    <MdDelete onClick={()=>setopenModelDelete(true)} cursor='pointer' className='text-red-500'size={25} />
    <Modal modalopen={openModelDelete} setmodalopen={setopenModelDelete}>
     <h3 className='text-lg'>Are you sure, you want to delete this task</h3>
     <div className='modal-action'>
      <button onClick={()=>handleDeleteTask(task.id)} className='btn bg-red-600'>yes</button>

     </div>
        </Modal>
    </td>
  </tr>
  )
}

export default Task