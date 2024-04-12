import Brand from "./Brand/Brand";
import Price from "./Price/Price";
import Color from "./Color/Color";
import Gender from "./Gender/Gender";
import { IoFilter } from "react-icons/io5";
import "./Sidebar.css";

const Sidebar = ({ handleBrandChange, handlePriceChange, handleColorChange, handleGenderChange, category }) => {

  return (
    <>
      <section className="filter-sidebar">
        <div className="logo-container">
          <h1 className="bebas-neue-regular"> <IoFilter /> SEARCH FILTER</h1>
        </div>

        {
          category ?
            (category === "brand" ?
              <Gender handleGenderChange={handleGenderChange} /> : <Brand handleBrandChange={handleBrandChange} />) 
            :
            (<>
              <Gender handleGenderChange={handleGenderChange} />
              <Brand handleBrandChange={handleBrandChange} />
            </>)
        }
        <Color handleColorChange={handleColorChange} />

        {/* <Price handlePriceChange={handlePriceChange} /> */}

      </section>
    </>
  );
};

export default Sidebar;