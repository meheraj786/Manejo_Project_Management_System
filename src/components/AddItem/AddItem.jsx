import React from 'react'

const AddItem = ({listAddItem, setEditMode}) => {
  return (
    <div onClick={()=>setEditMode(true)}>
<p>+</p>
<p>{listAddItem ? 'Add a List': 'Add a task'}</p>
    </div>
  )
}

export default AddItem