import React from 'react';
import { useState } from 'react';

const App = () => {
  const [title,settitle] = useState("");
  const [des, setdes] = useState("");
  const [maintask,setmaintask] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);



  const submitHandler = (e) => {
    if (editIndex === -1) {
      // Add new task if not in edit mode
      setmaintask([...maintask, { title, des }]);
    } else {
      // Edit existing task if in edit mode
      const updatedTasks = [...maintask];
      updatedTasks[editIndex] = { title, des };
      setmaintask(updatedTasks);
      setEditIndex(-1); // Reset edit mode
    }

    e.preventDefault();
    settitle("");
    setdes("");
  };
  
  const deleteHandler=(i)=>{
    let copytask=[...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)
  }
  const editHandler = (i) => {
    const taskToEdit = maintask[i];
    settitle(taskToEdit.title);
    setdes(taskToEdit.des);
    setEditIndex(i);
  };

  let addedtask=<li className='flex justify-center items-center w-full mt-28 '>No Task Available</li>

  // As the data come into in the form of array to we have to use array to print the data in main task and store it in the added task
  if(maintask.length>0){
    addedtask = maintask.map((t, i) => {
      return (
        <li key={i} className='flex md:flex-nowrap sm:flex-nowrap flex-wrap w-95 pl-12 md:gap-16 sm:gap-16 gap-4 rounded-md bg-transparent backdrop-blur-4xl shadow-yellow-500 border-b border-yellow-500 md:ml-4 sm:ml-4 ml-0'>
          <div className='flex justify-between md:w-70 sm:w-70 w-3/4'>
            <h5>{t.title}</h5>
            <h6>{t.des}</h6>
          </div>
          <div className='flex gap-5'>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() =>  editHandler(i)} // Set the index of the task being edited
            >
              Edit
            </button>
            <button
              onClick={() => deleteHandler(i)}
              type="button"
              class="text-white w-24 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
    
};

  return (
    
    <>
      <div class="bg-gradient-to-bl from-slate-800 to-black overflow-hidden relative pt-2 md:pt-40 pb-20 lg:pt-44 min-h-screen flex items-center justify-center">

        <div aria-hidden="true" class="absolute scale-0 top-full right-96 md:scale-110 inset-0 m-auto w-2/4 h-2/4 md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"></div>
        <div  class="absolute scale-0 bottom-full left-96 md:scale-110 inset-0 m-auto w-2/4 h-2/4 md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-violet-100 to-purple-900 blur-3xl"></div>

        <div class="fixed  z-20 md:w-2/4 sm:w-4/5 w-4/5 md:h-4/5 sm:h-4/5 h-full md:mt-0 sm:mt-0 mt-14 rounded-md bg-transparent backdrop-blur-2xl  shadow-2xl shadow-gray-600/5 border-b border-gray-800  items-center md:gap-7 sm:gap-7 gap-3 flex flex-col">
          <div className='flex w-full   mt-8 bg-gradient-to-bl from-slate-800 to-black'>
            <div className=' md:w-1/4 sm:w-1/4 w-1/3 text-base md:text-2xl sm:text-2xl flex justify-center items-center'><span>🔴 🟡 🟢</span></div>
            <div className=' md:w-1/2 sm:w-3/4 flex items-center justify-center border-3 border-red-400 flex-col gap-10'>
              <h1 className=' text-slate-50 md:text-4xl text-lg border-3 sm:text-3xl'>TO-Do List</h1>
            </div>
            <div className=' md:w-1/4 sm:w-1/4 w-1/3 text-base md:text-2xl sm:text-2xl flex justify-center items-center'><span>🟢 🟡 🔴</span></div>
          </div>

          <div className=' w-full flex md:gap-10 sm:gap-10 gap-6 items-center justify-center flex-col'>
            <form className=' md:w-full sm:w-full w-11/12 flex md:flex-row sm:flex-row flex-col  justify-around' onSubmit={submitHandler}>

                <div>
                  <label for="first_name" class="block mb-2 text-sm font-medium text-white dark:text-white">Enter your Work Title</label>
                  <input 
                  type="text" id="title"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="reel dekhte hobe" required
                  value={title}
                  onChange={(e)=>{
                    settitle(e.target.value)
                  }}
                  />
                </div>
                <div>
                  <label for="last_name" class="block mb-2 text-sm font-medium text-white dark:text-white">Enter your work Description</label>
                  <input 
                  type="text" id="des" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Future secure er jonne :)" required
                  value={des}
                  onChange={(e)=>{
                    setdes(e.target.value)
                  }}
                  />
                </div>
                <button type="submit" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 h-10 mt-7">
                {editIndex === -1 ? 'Add Task' : 'Save Changes'}
                  </button>
            </form>


            <div className=' w-full h-auto '>
                 <ul className=' text-lg text-slate-100 flex flex-col gap-9 justify-center items-start'>
                  {addedtask}
                 </ul>

            </div>
          </div>
        </div>

      </div>
    </>
  );
};


export default App;





