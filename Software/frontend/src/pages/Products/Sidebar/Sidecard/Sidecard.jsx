const Sidecard = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input className="sidebar-radios" onChange={handleChange} type="radio" value={value} name={name}/>
      <span className="assistant">{title}</span>
      <span className="checkmark" style={{ backgroundColor: color }}></span>
    </label>
  );
};

export default Sidecard;