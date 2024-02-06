import React from 'react'
import { Task } from '../../../types/task'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

interface TaskProps {
  task: Task
}
const Task:React.FC<TaskProps> = ({task}) => {
  return (
    <tr key={task.id}>
    
    <td className='w-full'>{task.title}</td>
  
    <td className='flex gap-5'>
      <FaRegEdit className='text-blue-500' size={25}/>
    <MdDelete className='text-red-500'size={25} />

    </td>
  </tr>
  )
}

export default Task