function DropDown({ name, link1, link2, link3, heading, moveTask, index }) {

  


  return (
    <div className="dropdown">
      <button className="dropbtn">{name}</button>
      <div className="dropdown-content">
        <h3>{heading}</h3>
        <hr></hr>
        <p onClick={() => moveTask(index,'todo')}>{link1}</p>
        <p onClick={() => moveTask(index,'doing')}>{link2}</p>
        <p onClick={() => moveTask(index,'done')}>{link3}</p>
      </div>
    </div>
  );
}

export default DropDown;
