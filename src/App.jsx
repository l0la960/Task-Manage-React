import React, { useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import CreateTaskForm from "./CreateTaskForm";
import UpdateForm from "./UpdateEmailForm";

function App() {
  const [isEmailAlertEnabled, setEmailAlertEnabled] = useState(false);

  // todo categories states
  const [todoList, setTodolist] = useState([]);
  const [doingList, setDoingtList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  // form states open and close
  const [isFormOpened, setFormOpened] = useState(false);

  const openForm = () => {
    setFormOpened(true);
    console.log(open);
  };

  const closeForm = () => {
    setFormOpened(false);
    console.log(close);
  };

  const [isUpdateFormOpened, setUpdateFormOpened] = useState(false);

  const openUpdateForm = () => {
    setUpdateFormOpened(true);
    console.log(open);
  };

  const closeUpdateForm = () => {
    setUpdateFormOpened(false);
    console.log(close);
  };

  //add to to list function and form validation on the button

  const addTodolist = (taskItem) => {
    function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email,
    );
  }
    let title = taskItem.title.trim();
    let dueDate = taskItem.dueDate.trim();
    let email = taskItem.emailAddress.trim();
    let alertDate = taskItem.alertDate.trim();

    if (!isEmailAlertEnabled && (title === "" || dueDate === "")) {
      document.getElementById("task-title").style.outline =
        "5px solid oklch(70.9% 0.00008 271.152 / 0.722)";
      document.getElementById("due-date").style.outline =
        "5px solid oklch(70.9% 0.00008 271.152 / 0.722)";
    } else if (!isEmailAlertEnabled && (title !== "" || dueDate !== "")) {
      setTodolist((t) => [...t, taskItem]);
      closeForm();
    } else if (
      isEmailAlertEnabled &&
      (email === "" || alertDate === "" || title === "" || dueDate === "")
    ) {
      document.getElementById("email-address").style.outline =
        "5px solid oklch(70.9% 0.00008 271.152 / 0.722)";
      document.getElementById("alert-date").style.outline =
        "5px solid oklch(70.9% 0.00008 271.152 / 0.722)";
      document.getElementById("task-title").style.outline =
        "5px solid oklch(70.9% 0.00008 271.152 / 0.722)";
      document.getElementById("due-date").style.outline =
        "5px solid oklch(70.9% 0.00008 271.152 / 0.722)";
    } 
    else if (isEmailAlertEnabled && !isEmail(email)) {
    console.log('invalid email')
    }
    else {
      setTodolist((t) => [...t, taskItem]);
      closeForm();
    }
  };

  // move functions

  const moveTaskDone = (index) => {
    deleteTodo(index);
    const doneTodoItem = {
      name: todoList[index].title,
      description: todoList[index].description,
      dueDate: todoList[index].dueDate,
      dueTime: todoList[index].dueTime,
    };
    setDoneList((d) => [...d, doneTodoItem]);
  };

  const moveTaskDoing = (index) => {
    deleteTodo(index);
    const doingTodoItem = {
      name: todoList[index].title,
      description: todoList[index].description,
      dueDate: todoList[index].dueDate,
      dueTime: todoList[index].dueTime,
    };
    setDoingtList((d) => [...d, doingTodoItem]);
  };

  // Quantity decrement states for doing done todo

  const [todoQuantity, setTodoQuantity] = useState(todoList.length);
  const [doneQuantity, setDoneQuantity] = useState(doneList.length);
  const [doingQuantity, setDoingQuantity] = useState(doingList.length);

  const decrementTodoQuantity = () => {
    setTodoQuantity(todoList.length - 1);
  };

  const decrementDoneQuantity = () => {
    setDoneQuantity(doneList.length - 1);
  };

  const decrementDoingQuantity = () => {
    setDoingQuantity(doingList.length - 1);
  };

  // delete functions for each category

  const deleteTodo = (index) => {
    setTodolist(todoList.filter((_, i) => i !== index));
    decrementTodoQuantity();
  };

  const deleteDoneTodo = (index) => {
    setDoneList(doneList.filter((_, i) => i !== index));
    decrementDoneQuantity();
  };

  const deleteDoingTodo = (index) => {
    setDoingtList(doingList.filter((_, i) => i !== index));
    decrementDoingQuantity();
  };

  return (
    <>
      <Header onClick={() => openForm()} />
      <MainContent
        tasks={todoList}
        doneTasks={doneList}
        doingTasks={doingList}
        deleteDoingTodo={deleteDoingTodo}
        deleteItem={deleteTodo}
        deleteDoneTodo={deleteDoneTodo}
        moveTaskDone={moveTaskDone}
        moveTaskDoing={moveTaskDoing}
        updateForm={() => openUpdateForm()}
      />
      {isFormOpened && (
        <CreateTaskForm
          onClick={() => closeForm()}
          addTasks={addTodolist}
          isEmailAlertEnabled={isEmailAlertEnabled}
          setEmailAlertEnabled={setEmailAlertEnabled}
        />
      )}
      {isUpdateFormOpened && (
        <UpdateForm
          closeUpdateForm={() => closeUpdateForm()}
          taskTitle={todoList.title}
        />
      )}
    </>
  );
}

export default App;
