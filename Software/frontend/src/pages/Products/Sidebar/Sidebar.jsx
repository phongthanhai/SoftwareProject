import Brand from "./Brand/Brand";
import Price from "./Price/Price";
import Color from "./Color/Color";
import Gender from "./Gender/Gender";
import { IoFilter } from "react-icons/io5";
import "./Sidebar.css";

const Sidebar = ({ handleBrandChange, handlePriceChange, handleColorChange, handleGenderChange }) => {
  
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h2><IoFilter /> SEARCH FILTER</h2>
        </div>
        <Brand handleBrandChange={handleBrandChange} />


        <Color handleColorChange={handleColorChange} />

        <Gender handleGenderChange={handleGenderChange} /> 

        {/* <Price handlePriceChange={handlePriceChange} /> */}

      </section>
    </>
  );
};

export default Sidebar;