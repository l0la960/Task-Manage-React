import crossIcon from "./assets/cross-small.png";
import Switch from "./components/SwitchButton";
import { EmailInputContainer } from "./CreateTaskForm";
import Button from "./components/Button";
import Alert from "./components/AlertBox";
import alertCheck from './assets/check-circle.png'

export default function UpdateForm({
  task,
  closeUpdateForm,
  taskTitle,
  isEmailAlertEnabled,
  setEmailAlertEnabled,
  showAlertDialogue,
  updateAlert,
  isEmail
}) {
  const enableEmailAlert = () => {
    setEmailAlertEnabled(!isEmailAlertEnabled);
  };

  
  const saveChanges = () => {
    let email = task.emailAddress.trim();
    let alertDate = task.alertDate.trim();
  if (
      isEmailAlertEnabled &&
      (email === "" || alertDate === "" )
    ) {
      document.getElementById("email-address").style.outline =
        "0.4rem solid oklch(70.9% 0.00008 271.152 / 0.722)";
      document.getElementById("alert-date").style.outline =
        "0.4rem solid oklch(70.9% 0.00008 271.152 / 0.722)";
  }
  // else if (isEmailAlertEnabled && !isEmail(email)) {
  // console.log('invalid')
  // }
  else {
  closeUpdateForm()
  updateAlert('#509AF8' , 'Task Updated Successfully')
  showAlertDialogue()
  }
  }

  

  return (
    <>
    <div className="update-form-background">
      <div className="update-form-container" id="form-container-id">
        <div className="form-exit-container">
          <button className="form-exit-btn" onClick={closeUpdateForm}>
            <img src={crossIcon}></img>
          </button>
        </div>
        <div className="form-container-heading">
          <h2>Edit Email Alert</h2>
          <p>Configure email alerts for this task.</p>
        </div>
        <div className="update-form-task-title-container">
          <h3>Task</h3>
          <p>{taskTitle}</p>
        </div>
        <div className="update-form-email-alert-switch-group">
          <div>
            <h3>Email Alert</h3>
            <p>Get notified via email</p>
          </div>
          <div className="update-form-switch-container">
            <Switch onClick={() => enableEmailAlert()} />
          </div>
        </div>
        {isEmailAlertEnabled && <EmailInputContainer />}
        <div className="update-form-save-btn-container">
          <Button text="Save Changes" onClick={() => saveChanges()} />
        </div>
      </div>
    </div>
    <Alert icon={alertCheck} message='Task updated successfully.'/>
    </>
  );
}
