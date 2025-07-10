import { useState, useEffect } from "react";

export default function EditTask({ taskes, taskId, editPopup, handleEditPopup, handleEditData }) {
  const taskToEdit = taskes.find((e) => e.id === taskId);

  const [editTitle, setEditTitle] = useState("");
  const [editDisc, setEditDisc] = useState("");


  useEffect(() => {
    if (taskToEdit) {
      setEditTitle(taskToEdit.title);
      setEditDisc(taskToEdit.discribtion);
    }
    
  }, [taskToEdit]);

  if (!editPopup || !taskToEdit) return null;

  return (
    <div className="bg-black bg-opacity-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center flex flex-col">
        <h1 className="w-fit ml-auto mb-5 font-bold text-2xl">تعديل المهمه</h1>

        <div className="flex flex-col-reverse mb-4">
          <input
            id="title"
            className="peer border-b border-black focus:border-red-500 outline-0"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <label className="w-fit peer-focus:text-red-500" htmlFor="title">
            العنوان
          </label>
        </div>

        <div className="flex flex-col-reverse mb-4">
          <input
            className="border-b border-black focus:border-red-500 outline-0 peer"
            value={editDisc}
            onChange={(e) => setEditDisc(e.target.value)}
          />
          <label htmlFor="detail" className="w-fit peer-focus:text-red-500">
            التفاصيل
          </label>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => {
              handleEditData(taskId, editTitle, editDisc);
              handleEditPopup(); 
            }}
          >
            تعديل
          </button>
          <button onClick={handleEditPopup}>إلغاء</button>
        </div>
      </div>
    </div>
  );
}