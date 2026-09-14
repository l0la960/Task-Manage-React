import crossIcon from './assets/cross-small.png'

export default function UpdateForm ({closeUpdateForm, taskTitle}) {

return (
<div className='update-form-background'>
<div className="update-form-container" id='form-container-id'>
<div className='form-exit-container'>
<button className='form-exit-btn' onClick={closeUpdateForm}>
<img src={crossIcon}></img>
</button>
</div>
<div className="form-container-heading">
<h2>Edit Email Alert</h2>  
<p>Configure email alerts for this task.</p>
</div>
<div className='update-form-task-title-container'>
<p>Task</p>
</div>


</div>
</div>
);
}