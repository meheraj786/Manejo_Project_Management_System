import React from 'react'

const AddItemForm = ({
  listForm,
  submitHandler,
  title,
  onChangeHandler,
  setEditMode
}) => {
  return (
    <div>
      <form action="">
        <textarea value={title} onChange={onChangeHandler} cols="30" rows="2" className='form-textarea'></textarea>
      </form>
      <div className="buttons">
        <button onClick={submitHandler}>{listForm ? "Add List": "Add/Update Task"}</button>
        <button onClick={()=>setEditMode(false)}>x</button>
      </div>
    </div>
  )
}

export default AddItemForm