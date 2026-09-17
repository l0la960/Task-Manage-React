import { useState } from "react";
import UpdateForm from "./UpdateEmailForm";
import trashIcon from "./assets/trash.png";
import Button from "./components/Button";
import calendarIcon from "./assets/calendar-day.png";
import DropDown from "./components/DropDown";

export default function MainContent({
  tasks,
  deleteItem,
  moveTask,
  showAlert,
  hideAlert,
  isEmail,
}) {
  const tasksTodo = tasks.filter((task) => task.status === 'todo').map((task) => (
    <div key={task.id} className="task-container">
      <TaskContainer
        task={task}
        deleteItem={deleteItem}
        moveTask={moveTask}
        index={task.id}
        showAlert = {showAlert}
        hideAlert = {hideAlert}
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

function TaskContainer({
  task,
  deleteItem,
  moveTask,
  index, // we are passing id here
  showAlert,
  hideAlert,
  isEmail,
}) {
  const [isEmailAlertEnabled, setEmailAlertEnabled] = useState(false);

  const [isUpdateFormOpened, setUpdateFormOpened] = useState(false);

  const openUpdateForm = () => {
    setUpdateFormOpened(true);
    console.log(open);
  };

  const closeUpdateForm = () => {
    setUpdateFormOpened(false);
    setEmailAlertEnabled(false);
    console.log(close);
  };
  return (
    <>
      <div className="task-container-title-delete-group">
        <h3>{task.title}</h3>
        <Button
          className="task-container-trash-icon"
          icon={trashIcon}
          onClick={() => deleteItem(index)}
        />
      </div>
      <div className="task-container-description">{task.description}</div>

      <div className="task-container-date-time-btns-group">
        <div className="task-container-date-time">
          {" "}
          <div>
            <img src={calendarIcon}></img>
          </div>
          <p>
            Due: {task.dueDate}, {task.dueTime}
          </p>
        </div>
        <div className="task-container-btn-group">
          <DropDown
            index={index}
            moveTask={moveTask}
            name="Move"
            link1="To Do"
            link2="Doing"
            link3="Done"
            heading="Change Status"
          />
          <Button text="Edit Alert" onClick={() => openUpdateForm()} />
        </div>
      </div>
      {isUpdateFormOpened && (
        <UpdateForm
          closeUpdateForm={() => closeUpdateForm()}
          task={task}
          taskTitle={task.title}
          isEmailAlertEnabled={isEmailAlertEnabled}
          setEmailAlertEnabled={setEmailAlertEnabled}
          showAlert = {showAlert}
          hideAlert = {hideAlert}
          isEmail = {isEmail}
        />
      )}
    </>
  );
}
