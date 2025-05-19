import React from 'react'

const BoardItem = ({board}) => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between'>
        <h5>{board.title}</h5>
        <p >x</p>

      </div>
    </div>
  )
}

export default BoardItem