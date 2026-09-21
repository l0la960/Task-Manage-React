export default function Alert ({ icon,ref}) {


return (
<div className="alert-box-container" id='alert-box-container-id' ref={ref}>
<div className="alert-box"  id='alert-box-id' >
<div className="alert-box-icon-container"><img className='icon' ></img></div>
<div className="alert-box-message-container"> </div>
</div>
</div>
);
}