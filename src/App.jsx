import React, { useRef, useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import CreateTaskForm from "./CreateTaskForm";
import Alert from "./components/AlertBox";
import alertCheck from './assets/check-circle.png'





function App() {
  const [isEmailAlertEnabled, setEmailAlertEnabled] = useState(false);

  // todo categories states
  const [todoList, setTodolist] = useState([]);

  // form states open and close
  const [isFormOpened, setFormOpened] = useState(false);

  const openForm = () => {
    setFormOpened(true);
  };

  const closeForm = () => {
    setFormOpened(false);
    setEmailAlertEnabled(false);
  };

  //add to to list function and form validation on the button

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email,
    );
  }

  function updateAlert (color, message, icon) {
  const firstChild = alertRef.current.firstElementChild
  if(firstChild) {
  firstChild.style.backgroundColor = color
  firstChild.innerHTML = message
  }
  }

  const addTodolist = (taskItem) => {
    let title = taskItem.title.trim();
    let dueDate = taskItem.dueDate.trim();
    let email = taskItem.emailAddress.trim();
    let alertDate = taskItem.alertDate.trim();
    let focus = " 0.4rem solid oklch(70.9% 0.00008 271.152 / 0.722)"

    if (!isEmailAlertEnabled && (title === "" || dueDate === "")) {
      document.getElementById("task-title").style.outline = focus;
      document.getElementById("due-date").style.outline = focus;
    } else if (!isEmailAlertEnabled && (title !== "" || dueDate !== "")) {
      setTodolist((t) => [...t, taskItem]);
      closeForm();
      updateAlert('#509AF8' , 'Task created Successfully')
      showAlertDialogue();
    } else if (
      isEmailAlertEnabled &&
      (email === "" || alertDate === "" || title === "" || dueDate === "")
    ) {
      document.getElementById("email-address").style.outline = focus;
      document.getElementById("alert-date").style.outline = focus;
      document.getElementById("task-title").style.outline = focus;
      document.getElementById("due-date").style.outline = focus;
    } else if (isEmailAlertEnabled && !isEmail(email)) {
      updateAlert('red' , 'Invalid Email' )
      showAlertDialogue();
    } else {
      setTodolist((t) => [...t, taskItem]);
      closeForm();
      updateAlert('#509AF8' , 'Task created Successfully')
      showAlertDialogue()

    }
  };

  // move function

  const moveTask = (id, status) => {
  const currentTask = todoList.find((task) => task.id === id);
  const updatedCurrentTask = { ...currentTask, status: status };

    const updatedTaskLists = todoList.map((todo) => {
      if (todo.id === id) return updatedCurrentTask;
      else return todo;
    });
    setTodolist(updatedTaskLists);
  };

  // delete functions for each category

  const deleteTodo = (id) => {
    setTodolist(todoList.filter((todo) => todo.id !== id));
     updateAlert('#509AF8' , 'Task deleted Successfully')
     showAlertDialogue()
  };

  // Display and hide alert

  const alertRef = useRef(null);

  const showAlertDialogue = () => {
    alertRef.current.style.display = "block";
    setTimeout(() => {
      alertRef.current.style.display = "none";
    }, 2000);
  };


 
  
  return (
    <>
      <Header onClick={() => openForm()} />
      <MainContent
        tasks={todoList}
        deleteItem={deleteTodo}
        moveTask={moveTask}
        isEmailAlertEnabled={isEmailAlertEnabled}
        setEmailAlertEnabled={setEmailAlertEnabled}
        showAlertDialogue={showAlertDialogue}
        updateAlert={updateAlert}
        isEmail={isEmail}
      />
      {isFormOpened && (
        <CreateTaskForm
          onClick={() => closeForm()}
          todoListItemsCount={todoList.length || 0}
          addTasks={addTodolist}
          isEmailAlertEnabled={isEmailAlertEnabled}
          setEmailAlertEnabled={setEmailAlertEnabled}
        />
      )}
      <Alert
        ref={alertRef}
      />
    </>
  );
}

export default App;
