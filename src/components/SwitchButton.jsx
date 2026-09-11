
export default function Switch ({onClick}) {

return (
   <div className="switch-text-group">
 <div>
 <label className="switch">
        <input type="checkbox" />
        <span className="slider" onClick={onClick} />
      </label>
</div>
      <p>Enable Email Alert</p>
      </div>
);
}