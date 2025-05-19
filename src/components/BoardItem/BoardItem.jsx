import React, { useContext } from 'react'
import { BoardContext } from '../contexts/Board'
import { ListContext } from '../contexts/List'
import { TaskContext } from '../contexts/Task'

const BoardItem = ({board}) => {
  const {dispatchBoardActions}= useContext(BoardContext)
  const {dispatchListActions}= useContext(ListContext)
  const {dispatchTasksActions}= useContext(TaskContext)


  const removeHandler= (e)=>{
    e.preventDefault()
    e.stopPropagation()
    dispatchBoardActions({type: "REMOVE_BOARD", payload: board.id})
    board.lists.forEach((listId)=>{
      dispatchListActions({type: "REMOVE_LIST", payload:listId})
    })
    board.tasks.forEach((taskId)=>{
      dispatchTasksActions({type: "REMOVE_TASK", payload:taskId})

    })

  }
  return (
    <div className='flex w-[200px] h-[200px] p-3 rounded-md bg-blue-300 flex-col'>
      <div className='flex justify-between'>
        <h5>{board.title}</h5>
        <p onClick={removeHandler}>x</p>

      </div>
    </div>
  )
}

export default BoardItem