import logo from './logo.svg';
import './App.css';
import ShowTasksBtn from './ShowTaskesBtn';
import Task from './Tasks'
import AddTask from './AddTask';
import { useState,useEffect,useMemo } from 'react';
import { TaskesContext } from './context/TaskesContext';
import DeletePopup from './popup/DeletPopup';
import EditTask from './editTask'

function App() {

  const taskesIntial = [
    {
      id: 1,
      title: "اول",
      discribtion: "هىهخيىب",
      isCompleted: false,
      isDeleted: false
    },
    {
      id: 2,
      title: "ثاني",
      discribtion: "يسبسيب",
      isCompleted: false,
      isDeleted: false
    },
    {
      id: 3,
      title: "ثالث",
      discribtion: "يبسبسيبيس",
      isCompleted: false,
      isDeleted: false
    }
  ]

  const [taskes, setTaskes] = useState(taskesIntial)
  const [showPopup, setShowPopup] = useState(false)
  const [editPopup,setEditPopup] = useState(false)
  const [taskId, setTaskId] = useState()
  const [displayType,setDisplayType] = useState("all")

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('todos'))
    setTaskes(data ?? [])
  }, [])
  
  // handle event functions 
  function handleAddTask(toDoText) {
    let newTask = {
      id: Date.now(),
      title: toDoText,
      discribtion: "",
      isCompleted: false,
      isDeleted: false
    }
    const updateData = [...taskes, newTask]
    setTaskes(updateData)  

    localStorage.setItem('todos',JSON.stringify(updateData))

  }

  function handleChicked(todoId) {

    const updateCompleted = taskes.map((el) => {
      if (el.id == todoId) {
        el.isCompleted = !el.isCompleted
        return el
      }
      else return el
    })
    setTaskes(updateCompleted)
    localStorage.setItem("todos",JSON.stringify(updateCompleted))
  }
    
  function handleDelete(todoId) {
    
    const updateDelet = taskes.map((el) => {
      if (el.id === todoId) {
        el.isDeleted = true
        return el;
      } else {
        return el;
      }
    });

    setTaskes(updateDelet)
    const taskDelet = taskes.filter((el) => { return el.isDeleted==false ? el : "" })
    setTaskes(taskDelet)
    localStorage.setItem("todos",JSON.stringify(taskDelet))
    
  }

  function handlePopup(taskId= "") {
    setShowPopup(popup => !popup)
    setTaskId(taskId)

  }
  function handleEditPopup(todoid = "") {
    
    setTaskId(todoid)
    setEditPopup(popup => !popup)

   
  }
  function handleEditData(taskId,newTitle,desc) {
    const editTitle = taskes.map((task) => {
      
      if (task.id === taskId) {
      
        return {...task ,title:newTitle,discribtion:desc}
      } else {
        return task
      }
     
      
    })
    setTaskes(editTitle)
    localStorage.setItem("todos",JSON.stringify(editTitle))
  }
  
  function handleDisplayType(e) {
    return setDisplayType(e)
  }
  // the end of handle event functions

  let  todoToRendar = taskes
  const notCompletdTodo = useMemo(()=>{return(taskes.filter(t => !t.isCompleted))},[taskes]);
  const completdTodo = useMemo(() => { return (taskes.filter(t => t.isCompleted)) }, [taskes]);

  if (displayType === "notcompleted") {
    todoToRendar = notCompletdTodo;
  } else if (displayType === "completed") {
    todoToRendar = completdTodo;
  } else {
    todoToRendar = taskes
  }

  function taskList() {

    const value = { taskes, handleChicked, handlePopup, handleEditPopup };
 
    return (

      <TaskesContext.Provider value={value}>
        {todoToRendar.map((task) => (
          <Task key={task.id} taskData={task} />
        ))}
      </TaskesContext.Provider>

    );
  }

  return (
    <div className=' w-screen h-screen  flex justify-center items-center   '>
      <div className='bg-white w-1/3 max-lg:w-[40%]   text-center p-3 max-h-[80vh] overflow-auto ' >
        <h1 className='font-bold text-5xl text-center mt-3 text-2xl'>مهامي</h1>
        <ShowTasksBtn displayType={displayType} handleDisplayType={handleDisplayType} />
        {taskList()}
        <AddTask handleAddTask={handleAddTask} />
        <DeletePopup showPopup={ showPopup}  handlePopup = {handlePopup} taskes = {taskes} handleDelete={handleDelete} taskId={taskId} />
        <EditTask taskes = {taskes} editPopup={editPopup} handleEditPopup={handleEditPopup} taskId = {taskId} handleEditData={handleEditData}  />
      </div>
    </div>
  );
}

export default App;
