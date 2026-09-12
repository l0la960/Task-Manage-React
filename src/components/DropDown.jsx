function DropDown ({name,link1,link2,link3, heading, moveTaskDone}) {
return (
<div className="dropdown">
  <button className="dropbtn">{name}</button>
  <div className="dropdown-content">
    <p>{heading}</p>
     <hr></hr>
    <a href="#" >{link1}</a>
    <a href="#" >{link2}</a>
    <a href="#" onClick={moveTaskDone}>{link3}</a>
  </div>
</div>
);
}

export default DropDown