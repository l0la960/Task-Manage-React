import React, { useState } from 'react'
import Header from "./Header"
import MainContent from "./MainContent"
import CreateTaskForm from "./CreateTaskForm"



function App() {



  const [isFormOpened, setFormOpened] = useState(false)

  const openForm = () => {
    setFormOpened(true)
    console.log(open)
  }

  const closeForm = () => {
    setFormOpened(false)
    console.log(close)
  }

  const [todoList, setTodolist] = useState([])
  const [doingList, setDoingtList] = useState([])
  const [doneList, setDonetList] = useState([])

  const addTodolist = (taskItem) => {
    setTodolist(t => [...t, taskItem])
    incrementQuantity()
    closeForm()
  }

  const moveTaskDone = (index) => {
    deleteTodo(index)
    const completeTodoItem = {
      name: todoList[index].title,
      complete: todoList[index].complete = 'true'
    }
    setDoneList(c => [...c, completeTodoItem])
  }

  const deleteTodo = (index) => {
    setTodolist(todoList.filter((_, i) => i !== index))
    decrementQuantity()
  }

  const [Quantity, setQuantity] = useState(todoList.length)

  const incrementQuantity = () => {
    setQuantity(todoList.length + 1)
  }

  const decrementQuantity = () => {
    setQuantity(todoList.length - 1)
  }


  return (
    <>
      <Header onClick={() => openForm()} />
      <MainContent tasks={todoList} Quantity={Quantity} deleteTasks={deleteTodo} moveTaskDone={moveTaskDone} />
      {isFormOpened && <CreateTaskForm onClick={() => closeForm()} addTasks={addTodolist} />}
    </>
  );
}

export default App
