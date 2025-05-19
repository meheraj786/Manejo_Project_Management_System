import React, { useState, useContext } from "react";
import shortid from "shortid";
import { TaskContext } from "./contexts/Task";
import { ListContext } from "./contexts/List";
import { BoardContext } from "./contexts/Board";




function TaskList({ taskList }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [editMode, setEditMode] = useState(false);

  /**
   * {
   *    id,
   *     title,
   *    tasks: ["task-1", "task-2"],
   *     boardId
   * }
   */


  const { title } = taskList;
  const { tasks: allTasks, dispatchTaskAction } = useContext(TaskContext);
  const { dispatchListAction } = useContext(ListContext);
  const { dispatchBoardActions } = useContext(BoardContext)

  const submitHandler = (e) => {
    e.preventDefault();
    const id = shortid.generate();
    const listId = taskList.id;
    const task = {
      id,
      title: taskTitle,
      listId,
      boardId: taskList.boardId,
    };
    dispatchTaskAction({ type: 'CREATE_TASK', payload: task })

    dispatchListAction({ type: 'ADD_TASK_ID_TO_LIST', payload: { id: listId, taskId: task.id } })

    dispatchBoardActions({ type: 'ADD_TASK_ID_TO_BOARD', payload: { id: task.boardId, taskId: task.id } })
    setTaskTitle("");
    setEditMode(false);
  };

  const removeListHandler = () => {
    dispatchListAction({ type: 'DELETE_LIST', payload: { id: taskList.id } });
    dispatchBoardActions({ type: 'REMOVE_LIST_ID_FROM_A_BOARD', payload: { id: taskList.boardId, listId: taskList.id } })
  }


  return (

    <div key = {taskList.id}>
      {(provided) => (
        <div ref = {provided.innerRef} {...provided.droppableProps} >
          <div className="list-container">
            <div className="list-title-container">
              <h5>{title}</h5>
              <img
                onClick={removeListHandler}
                className="add-item-icon"
                alt=""
              />
            </div>
            {
              taskList
                ?.tasks?.map((item) => {
                  return allTasks.find(t => t.id === item)
                })?.map((task, index) => (
                  <TaskCard index={index} id={task.id} taskList={taskList} task={task} key={task.id} />
                ))
            }
            {editMode ? (
              <AddItemForm
                submitHandler={submitHandler}
                title={taskTitle}
                onChangeHandler={(e) => setTaskTitle(e.target.value)}
                setEditMode={setEditMode}
                editMode={editMode}
              />
            ) : (
              <AddItem setEditMode={setEditMode} />
            )}
          </div>
          {provided.placeholder}
        </div>
      )}

    </div>


  );
}

export default TaskList;
