import Brand from "./Brand/Brand";
import Price from "./Price/Price";
import Color from "./Color/Color";
import Gender from "./Gender/Gender";
// import "./Sidebar.css";

const Sidebar = ({ handleBrandChange, handlePriceChange, handleColorChange, handleGenderChange }) => {
  
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Brand handleBrandChange={handleBrandChange} />

        <Price handlePriceChange={handlePriceChange} />

        <Color handleColorChange={handleColorChange} />

        <Gender handleGenderChange={handleGenderChange} /> 
      </section>
    </>
  );
};

export default Sidebar;