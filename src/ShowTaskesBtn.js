export default function showTasksBtn({ displayType,handleDisplayType }) {
    
    return (
        <div className="mt-11 flex justify-center ">
            <button className={`border border-gray-300 p-1 ${displayType==="notcompleted"? "bg-primary text-white": "" }`}  value={displayType} onClick={()=>{ handleDisplayType("notcompleted")}}>غير منجز</button>
            <button className={`border border-gray-300 p-1 ${displayType === "completed" ? "bg-primary text-white" : ""}`} value={displayType} onClick={()=>{handleDisplayType("completed")}}>منجز</button>
            <button className={`border border-gray-300 p-1 ${displayType === "all" ? "bg-primary text-white" : ""}`} value={displayType} onClick={() => { handleDisplayType("all") }}> الكل</button>
        </div>
    ) 
}