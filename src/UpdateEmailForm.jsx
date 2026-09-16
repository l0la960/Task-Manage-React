import crossIcon from "./assets/cross-small.png";
import Switch from "./components/SwitchButton";
import { EmailInputContainer } from "./CreateTaskForm";
import Button from "./components/Button";




export default function UpdateForm({ closeUpdateForm, taskTitle, isEmailAlertEnabled, setEmailAlertEnabled }) {

   const enableEmailAlert = () => {
  setEmailAlertEnabled(!isEmailAlertEnabled)
  };
 
  return (
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
        <Switch onClick={()=>enableEmailAlert()}/>
        </div>
        </div> 
        {isEmailAlertEnabled && (
                   <EmailInputContainer
                   />
                 )}
      <div> 
      <Button/>
      </div>
    </div>
    </div>
  );
}
