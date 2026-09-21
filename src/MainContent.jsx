import { useState } from "react";
import TaskContainer from "./TaskContainer";

export default function MainContent({
  tasks,
  isEmailAlertEnabled,
  setEmailAlertEnabled,
  deleteItem,
  moveTask,
  showAlertDialogue,
  updateAlert,
  isEmail
}) {
  const tasksTodo = tasks.filter((task) => task.status === 'todo').map((task) => (
    <div key={task.id} className="task-container">
      <TaskContainer
        isEmailAlertEnabled={isEmailAlertEnabled}
        setEmailAlertEnabled={setEmailAlertEnabled}
        task={task}
        deleteItem={deleteItem}
        moveTask={moveTask}
        index={task.id}
        showAlertDialogue={showAlertDialogue}
        updateAlert={updateAlert}
        isEmail = {isEmail}
      />{" "}
    </div>
  ));

  const tasksDoing = tasks.filter((task) => task.status === 'doing').map((task) => (
    <div key={task.id} className="task-container">
      <TaskContainer
        task={task}
        index={task.id}
        moveTask={moveTask}
        deleteItem={deleteItem}
      />
    </div>
  ));

  const tasksDone = tasks.filter((task) => task.status === 'done').map((task) =>  (
    <div key={task.id} className="task-container">
      <TaskContainer
        task={task}
        index={task.id}
        moveTask={moveTask}
        deleteItem={deleteItem}
      />
    </div>
  ));

  let todoQuantity = tasksTodo.length;

  let doingQuantity = tasksDoing.length;

  let doneQuantity = tasksDone.length;

  return (
    <>
      <p className="main-content-heading-text">
        Organize your tasks by dragging them between columns
      </p>
      <div className="task--category--parent--container">
        <TaskCategoryContainer
          name="To Do"
          taskList={tasksTodo}
          Quantity={todoQuantity}
          id="task-category-container-id-col-one"
        />
        <TaskCategoryContainer
          name="Doing"
          taskList={tasksDoing}
          Quantity={doingQuantity}
          id="task-category-container-id-col-two"
        />
        <TaskCategoryContainer
          name="Done"
          Quantity={doneQuantity}
          taskList={tasksDone}
          id="task-category-container-id-col-three"
        />
      </div>
    </>
  );
}

function TaskCategoryContainer({ name, taskList, Quantity, id }) {
  return (
    <>
      <div className="task-category-container" id={id}>
        <div className="task-category-name-quantity-group">
          <h2>{name}</h2>
          <div className="task-category-quantity-tracker-container">
            {Quantity}
          </div>
        </div>
        <div className="task-category-empty-state-text">
          {taskList.length === 0 ? <p>No tasks yet</p> :  <div>{taskList}</div>}        
        </div>
      </div>
    </>
  );
}

