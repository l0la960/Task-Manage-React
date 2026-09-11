
function Button ({text, icon, onClick, type}) {



return (
<button type={type}  onClick={onClick} >
<img src={icon}></img>
{text}</button>
);
}


export default Button