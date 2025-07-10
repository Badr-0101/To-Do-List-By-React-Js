import { useState } from "react"

export default function AddTask({handleAddTask}) {
    
    const [todo, setTodo] = useState("")
    
    function handleClick(e) {
        handleAddTask(e)
        setTodo("")
      }
      
    
    return (

        <div className="mt-3 flex gap-2 max-md:flex-col-reverse ">

            <button disabled={!todo.length > 0} className={` cursor-pointer  ${todo.length>0? "bg-[#a81c46]": "bg-[#92253c] cursor-not-allowed"}  px-10 py-1 text-white rounded-[4px]`}  onClick={()=>{handleClick(todo)}}>إضافه</button>
            
            <input placeholder="عنوان  المهمه" className="border border-gray-400 flex-grow rounded-[4px] pl-3 " value={todo} onChange={(e) => {
                setTodo(e.target.value)
            }}  />
            
        </div>
    )
}