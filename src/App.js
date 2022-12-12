

//import { useEffect } from 'react';
import { useState } from 'react';
import Footer from './Components/Footer'
import Header from './Components/Header'
import Main from './Components/Main' 
import taskData from './data.json'
function App() {
  
const [taskdatas,setTaskDatas]=useState(taskData)
console.log(taskdatas)

// const  getTaskDatas=async()=>{
//   const response=await fetch (" http://localhost:4000/taskData")
//   const datas=await response.json()
//   setTaskDatas(datas)
// }

// useEffect(()=>{
//   getTaskDatas();

// },[])
  return (
    <div>
      <Header  />
      <Main taskDatas={taskdatas} setTaskDatas={setTaskDatas}/>
      <Footer/>
    </div>
  )
}

export default App
