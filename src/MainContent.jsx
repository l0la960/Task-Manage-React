import { useState } from 'react';
import trashIcon from './assets/trash.png'
import Button from './components/Button';
import calendarIcon from './assets/calendar-day.png'
import DropDown from './components/DropDown';

export default function MainContent({tasks, Quantity, deleteTasks, moveTaskDone}) {

   
   
   const tasksTodo = tasks.map((task,index) => <div key={index} className='task-container'>
   <div className='task-container-title-delete-group'>
   <h3>{task.title}</h3>
   <Button className='task-container-trash-icon' icon={trashIcon} onClick={()=>deleteTasks(index)} />
   </div>
   <div className='task-container-description'>{task.description}</div>

   <div className='task-container-date-time-btns-group'>
   <div className='task-container-date-time'> <div><img src={calendarIcon}></img></div><p>Due: {task.dueDate}, {task.dueTime}</p></div>
   <div className='task-container-btn-group'>
   <DropDown moveTaskDone={() => moveTaskDone(index)} name='Move' link1='To Do' link2='Doing' link3='Done' heading='Change Status'/>
   <Button text='Edit Alert'/>
   </div>
   </div>
   </div>)

   if (tasksTodo.length > 0) {
   document.getElementById("task-category-container-id-col-one").style.flex = '2 1 0'
   }

   


return (
<>
<p className="main-content-heading-text">Organize your tasks by dragging them between columns</p>
<div className="task--category--parent--container">
<TaskCategoryContainer name='To Do' taskList={tasksTodo} Quantity={Quantity} id='task-category-container-id-col-one'/>
<TaskCategoryContainer name='Doing'  Quantity={Quantity} id='task-category-container-id-col-two' />
<TaskCategoryContainer name='Done'Quantity={Quantity} id='task-category-container-id-col-three'/>
</div>
</>
);
}


function TaskCategoryContainer({name, taskList, Quantity, id}) {
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
{/* <p>No tasks yet</p> */}
{taskList}
</div>
</div>

</>
)
}
