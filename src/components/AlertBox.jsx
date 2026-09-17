export default function Alert ({icon, message}) {

const styles = {
display: 'flex',
justifyContent: 'start',
alignItems: 'center',
gap: '0.7rem',
padding: '0.7rem',
width: '20vw',
height: '5vh',
backgroundColor: '#509AF8',
borderRadius: '0.5rem'
  }
    
return (
<div className="alert-box-container" id='alert-box-container-id'>
<div className="alert-box"  id='alert-box-id' style={styles}>
<div className="alert-box-icon-container"><img src={icon}></img></div>
<div className="alert-box-message-container">{message}</div>
</div>
</div>
);
}