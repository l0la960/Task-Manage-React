import crossIcon from "./assets/cross-small.png";
import Switch from "./components/SwitchButton";
import { EmailInputContainer } from "./CreateTaskForm";
import Button from "./components/Button";
import Alert from "./components/AlertBox";

export default function UpdateForm({
  task,
  closeUpdateForm,
  taskTitle,
  isEmailAlertEnabled,
  setEmailAlertEnabled,
  showAlertDialogue,
  updateAlert,
  isEmail,
}) {
  const enableEmailAlert = () => {
    setEmailAlertEnabled(!isEmailAlertEnabled);
  };

  const saveChanges = () => {
    let email = task.emailAddress.trim();
    let alertDate = task.alertDate.trim();
    let focus = "0.4rem solid oklch(70.9% 0.00008 271.152 / 0.722)";
    if (isEmailAlertEnabled && (email === "" || alertDate === "")) {
      document.getElementById("email-address").style.outline = focus;
      document.getElementById("alert-date").style.outline = focus;
      closeUpdateForm();
      updateAlert("#509AF8", "Task Updated Successfully");
      showAlertDialogue();
    }

  };

  return (
    <>
      <div className="update-form-background">
        <div className="update-form-container" id="form-container-id">
          <div className="form-exit-container">
            <button className="form-exit-btn" onClick={closeUpdateForm}>
              <img src={crossIcon} alt="exit button"></img>
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
    </>
  );
}
