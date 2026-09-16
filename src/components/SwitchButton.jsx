
export default function Switch ({onClick, sideText}) {

return (
   <div className="switch-text-group">
 <div>
 <label className="switch">
        <input type="checkbox" />
        <span className="slider" onClick={onClick} />
      </label>
</div>
      <p>{sideText}</p>
      </div>
);
}