import React, { useContext, useState } from 'react'
import { BoardContext } from '../contexts/Board'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/hooks/use-toast"

const BoardCreatingForm = () => {
  const { toast } = useToast()
  const [boardTitle, setBoardTitle]= useState('')
  const {dispatchBoardActions}= useContext(BoardContext)

  const submitHandler=(e)=>{
    e.preventDefault();
    if (boardTitle.trim()==='') {
      return alert("Please Write Something")
    }
    dispatchBoardActions({type: "CREATE_BOARD", payload: boardTitle})
    setBoardTitle("")
    toast({
      description: "Your message has been sent.",
    })



  }
  return (
    <div className='text-center mt-7'>
      <form type="text" onSubmit={submitHandler}>
        <Input type="text" className='w-[30%] mx-auto' value={boardTitle} onChange={(e)=>setBoardTitle(e.target.value)} />
        <Button className="bg-black hover:bg-white hover:border-black hover:border-1 cursor-pointer hover:text-black  text-white mt-3" type='submit'>Add Board</Button>
      </form>
    </div>
  )
}

export default BoardCreatingForm