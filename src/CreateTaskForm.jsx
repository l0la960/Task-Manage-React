import React, {useState} from 'react';
import crossIcon from './assets/cross-small.png';
import Switch from './components/SwitchButton';
import Button from './components/Button';


export default function CreateTaskForm ({onClick, addTasks }) {

const [isEmailAlertEnabled,setEmailAlertEnabled] = useState(false)
const enableEmailAlert = () => {
setEmailAlertEnabled(!isEmailAlertEnabled)
}

if(isEmailAlertEnabled) {
document.getElementById('form-container-id').style.overflowY = 'scroll'
document.getElementById('form-container-id').style.scrollbarColor= ''
document.getElementById('form-container-id').style.scrollbarWidth = 'thin'
}
   
   const [taskTitle, setTaskTitle] = useState('')
   const taskTitleChange = (e) => {
   setTaskTitle(e.target.value)
   }
   
   const [description, setDescription] = useState('')
   const descriptionChange = (e) => {
   setDescription(e.target.value)
   }
   
   const [dueDate, setDueDate] = useState('')
   const dueDateChange = (e) => {
   setDueDate(e.target.value)
   }
   
   const [dueTime, setDueTime] = useState('')
   const dueTimeChange = (e) => {
   setDueTime(e.target.value)
   }


return (
<>
<div className='form-background'>
<div className="form-container" id='form-container-id'>
<div className='form-exit-container'>
<button className='form-exit-btn' onClick={onClick}>
<img src={crossIcon}></img>
</button>
</div>
<form>
<div className="form-container-heading">
<h2>Create New Task</h2>  
<p>Add a new task with a due date and optional email alerts.</p>
</div>

<FormInputContainer autofocus= 'autofocus' label='Task Title*' placeholder='Enter task title' type='text' value={taskTitle} onChange={(e) => taskTitleChange(e)}/>
<FormInputContainer label='Description' placeholder='Enter task description (optional)' type='text' value={description} onChange={(e) => descriptionChange(e)}/>
<FormInputContainer label='Due Date*' type='date' value={dueDate} onChange={(e) => dueDateChange(e)}/>
<FormInputContainer label='Due Time (Optional)' type='time' value={dueTime} onChange={(e) => dueTimeChange(e)}/>

<hr className='form-horizontal-line'></hr>

<Switch onClick={() => enableEmailAlert ()}/>

{isEmailAlertEnabled &&
<div className='form-email-alert-state-container'>
<FormInputContainer label='Email Address*' placeholder='your@email.com' type='email'/>
<FormInputContainer label='Alert Date*'  type='date'/>
<FormInputContainer label='Alert Time (optional)'  type='time'/>
<p>If no time is specified, alert will be set for all-day.</p>
</div>  
}
</form>
<Button text='Create Task' onClick={() => addTasks({title:taskTitle, description:description,dueDate: dueDate,
dueTime: dueTime, category: 'todo'})} />
</div>
</div>
</>
);
}



function FormInputContainer ({label, placeholder, type, value, onChange, style, autofocus}) {

return (
<div className="form-input-container">
<label>
{label}<br></br>
<input autoFocus={autofocus} value={value} type={type} placeholder={placeholder} onChange={onChange} style={style}></input>
</label>
</div>
);
}

