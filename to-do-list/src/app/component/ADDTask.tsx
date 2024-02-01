import React from 'react'
import { FaPlus } from "react-icons/fa";

const ADDTask = () => {
  return (
    <div>
      <button className="btn btn -primary  bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-8 w-full rounded">
        ADD NEW TASK <FaPlus size={15} />
      </button>
    </div>
  )
}

export default ADDTask