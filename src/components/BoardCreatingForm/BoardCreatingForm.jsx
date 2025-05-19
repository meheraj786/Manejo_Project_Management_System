import React, { useContext, useState } from 'react'
import { BoardContext } from '../contexts/Board'

const BoardCreatingForm = () => {
  const [boardTitle, setBoardTitle]= useState('')
  const {dispatchBoardActions}= useContext(BoardContext)

  const submitHandler=(e)=>{
    e.preventDefault();
    if (boardTitle.trim()==='') {
      return alert("Please Write Something")
    }
    dispatchBoardActions({type: "CREATE_BOARD", payload: boardTitle})
    setBoardTitle("")



  }
  return (
    <div className='text-center mt-7 bg-amber-200'>
      <form type="text" onSubmit={submitHandler}>
        <input type="text" value={boardTitle} onChange={(e)=>setBoardTitle(e.target.value)} />
        <button type='submit'>Add Board</button>
      </form>
    </div>
  )
}

export default BoardCreatingForm