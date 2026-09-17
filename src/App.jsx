import React, { useState } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import CreateTaskForm from "./CreateTaskForm";
import Alert from "./components/AlertBox";
import alertCheck from './assets/check-circle.png'
import alertError from './assets/exclamation.png'

/**
 * when you create a todo item you are passing it an id -> length of todos array
 * each todo item now will have a status -> todo -> doing -> done
 * you are going to have one list
 * 
 */


function App() {
  const [isEmailAlertEnabled, setEmailAlertEnabled] = useState(false);

  // todo categories states
  const [todoList, setTodolist] = useState([]);

  // form states open and close
  const [isFormOpened, setFormOpened] = useState(false);

  const openForm = () => {
    setFormOpened(true);
    console.log(open);
  };

  const closeForm = () => {
    setFormOpened(false);
    setEmailAlertEnabled(false);
    console.log(close);
  };

  //add to to list function and form validation on the button

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email,
    );
  }

  const addTodolist = (taskItem) => {
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
      showAlert();
      hideAlert();
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
    } else if (isEmailAlertEnabled && !isEmail(email)) {
      // document.getElementById('alert-box-id').style.backgroundColor = 'red'
      // document.getElementById('alert-box-message-container').innerHTML = 'Invalid Email'
      // showAlert()
      // hideAlert()
      console.log('invalid email')
    } else {
      setTodolist((t) => [...t, taskItem]);
      closeForm();
      showAlert();
      hideAlert();
    }
  };

  // move function

    const moveTask = (id, status) => {
    const currentTask = todoList.find((task) => task.id === id)
    const updatedCurrentTask = {...currentTask, status:status}

    const updatedTaskLists = todoList.map((todo) => {
      if(todo.id === id) return updatedCurrentTask
      else return todo
    })

    setTodolist(updatedTaskLists)
  }

  // delete functions for each category

  const deleteTodo = (id) => {
    setTodolist(todoList.filter((todo) => todo.id !== id));
  };

  // Display and hide alert

  const showAlert = () => {
     console.log('show')
  document.getElementById('alert-box-container-id').style.display = 'block'
  }

  const hideAlert = () => {
    console.log('hide')
    setTimeout(()=> {
    document.getElementById('alert-box-container-id').style.display = 'none'
    },2000)
  }


  return (
    <>
      <Header onClick={() => openForm()} />
      <MainContent
        tasks={todoList}
        deleteItem={deleteTodo}
        moveTask={moveTask}
        showAlert = {showAlert}
        hideAlert = {hideAlert}
        isEmail = {isEmail}
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
      <Alert icon={alertCheck} message='Task Created Successfully.'/>
    </>
  );
}

export default App;
