import React from 'react'

function TaskHeader({heading,count}) {
  
  return (
    <div className="taskHeader">
      <h2>{heading}</h2>
      <div className="taskCount pending">{count}</div>
    </div>
  )
}

export default TaskHeader
