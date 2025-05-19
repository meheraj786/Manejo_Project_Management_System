import React from 'react'
import BoardProvider from '../contexts/Board'
import BoardCreatingForm from '../BoardCreatingForm/BoardCreatingForm'
import BoardList from '../BoardList/BoardList'

const Boards = () => {
  return (
    <BoardProvider>
      <div>
        <BoardCreatingForm />
        <BoardList />
      </div>
    </BoardProvider>
  )
}

export default Boards
