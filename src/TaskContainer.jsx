import react, {useState} from 'react'
import {format} from "date-fns";
import { eo } from "date-fns/locale";
import Button from './components/Button';
import DropDown from "./components/DropDown";
import calendarIcon from "./assets/calendar-day.png";
import trashIcon from "./assets/trash.png";
import UpdateForm from "./UpdateEmailForm";
import { endOfMonth } from 'date-fns';


export default function TaskContainer({
  task,
  deleteItem,
  moveTask,
  index, 
  // we are passing id here
  showAlertDialogue,
  updateAlert,
  isEmailAlertEnabled,
  setEmailAlertEnabled,
  isEmail,
}) {
  

  const [isUpdateFormOpened, setUpdateFormOpened] = useState(false);

  const openUpdateForm = () => {
    setUpdateFormOpened(true);
  };

  const closeUpdateForm = () => {
    setUpdateFormOpened(false);
    setEmailAlertEnabled(false);
  
  };



const dueDateString = format(task.dueDate, 'do MMMM yyyy')
  
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
          <div>
            {/* <img src={calendarIcon}></img> */}
          </div>
        Due:{task.dueTime === '' ? <p>{dueDateString}</p> : <p>{dueDateString}, {task.dueTime}</p>} 
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
          showAlertDialogue={showAlertDialogue}
          updateAlert={updateAlert}
          isEmail = {isEmail}
        />
      )}
    </>
  );
}
