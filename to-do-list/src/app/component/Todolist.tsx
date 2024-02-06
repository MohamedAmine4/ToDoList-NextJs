import React from 'react'
import { Task } from '../../../types/task'
import Tasks from './Tasks'

interface TodolistProps {
  tasks: Task[]
}



const Todolist:React.FC<TodolistProps> = ({tasks}) => {
  return (
    <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
        
          <th>Tasks</th>
      
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
        <Tasks key={task.id} task={task}/> 
        ))}
  
        
      
      </tbody>
    </table>
  </div>
  )
}

export default Todolist