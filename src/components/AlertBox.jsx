export default function Alert ({ icon,ref}) {

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

  const textStyles = {
   color:"oklch(100% 0 0)" ,
   fontWeight:" 500",
   fontSize: "1.3rem"
  }
    
return (
<div className="alert-box-container" id='alert-box-container-id' ref={ref}>
<div className="alert-box"  id='alert-box-id' style={styles}>
<div className="alert-box-icon-container"><img className='icon' ></img></div>
<div className="alert-box-message-container" style={textStyles}> hi </div>
</div>
</div>
);
}