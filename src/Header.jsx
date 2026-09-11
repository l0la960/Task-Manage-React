import Button from './components/Button'
import checkBox from './assets/checkbox.png'
import plusIcon from './assets/plus.png'



export default function Header ({onClick}) {
return (
<nav>
<div className='nav-logo-group'>
<img src={checkBox}></img>
<h1>Task Manager</h1>
</div>
<Button text='Add Task' icon={plusIcon} onClick={onClick}/>
</nav>
);
} 
