export default function DeletePopup({ showPopup,handlePopup ,handleDelete,taskId }) {
  if (!showPopup) return null;

  return (
    
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center   " onClick={() => { handlePopup() }} >
      
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center"    onClick={(e) => e.stopPropagation()} // امنع انتشار الكليك هنا
      >

        <div className="mb-4">
          <p className="text-lg font-semibold">هل انت متأكد من رغبتك في حذف المهمة؟</p>
          <p className="text-sm text-gray-600">لا يمكنك التراجع عن الحذف بعد اتمامه</p>
        </div>

        <div className="flex justify-around">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={()=>{handlePopup()}}>إغلاق</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => { handleDelete(taskId); handlePopup()}}>حذف</button>
        </div>

      </div>
    </div>
  );
}

