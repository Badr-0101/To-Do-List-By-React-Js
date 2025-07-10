import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useContext } from 'react';
import { TaskesContext } from './context/TaskesContext';
import DeletPopup from './popup/DeletPopup'

export default function Task({ taskData }) {
    
    const { handleChicked, handlePopup,handleEditPopup } = useContext(TaskesContext)
 
    const [taskId,setTaskId] = useState(taskData.id)
  
    return (

        <div className="bg-primary rounded-md  "  >
           
            <div className='flex  justify-between items-center flex-row-reverse p-3 mt-3'>
                <div>
                    <h1 className="taksName text-white text-2xl float-right">{ taskData.title}</h1>
                    <p className="taskDetails text-white">{ taskData.discribtion}</p>
                </div>

                <div className='flex gap-2'>

                    <button className='border border-red-400 rounded-[50%] p-2 bg-white ' onClick={() => { handlePopup(taskData.id) }}>
                    <FontAwesomeIcon icon={faTrash} className='text-red-500' />
                    </button>
                    


                    <button className='border border-sky-500 rounded-[50%] p-2 bg-white' onClick={()=>{handleEditPopup(taskData.id)}}>
                    <FontAwesomeIcon icon={faPencil} className='text-sky-500' />
                    </button>
                    <button className= {`border border-green-500 rounded-[50%] p-2  ${taskData.isCompleted? "bg-green-500":"bg-white"}  `} onClick={()=>{handleChicked(taskData.id)}}>
                    <FontAwesomeIcon  icon={faCheck} className={taskData.isCompleted? "text-white":"text-green-500"  } />
                    </button>
                    </div>
            </div>
          
        </div>
        
    )
}