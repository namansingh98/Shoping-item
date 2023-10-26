import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";
import { useState } from "react";

const Sidebar = ({ handleChange }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [mobileVIew, setMobileView] = useState(false);

  const toggleFilters = () => {
    setShowFilter(!showFilter);
    setMobileView(!mobileVIew);
  };

  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <button
          className={ !mobileVIew ? 'filter_btn' : "btnstyle"}
  
          onClick={toggleFilters}
        >
          {showFilter ? "Reset " : "Filter"}
        </button>
        {showFilter && (
          <>
            <Category handleChange={handleChange} />
            <Price handleChange={handleChange} />
            <Colors handleChange={handleChange} />
          </>
        )}
      </section>
    </>
  );
};

export default Sidebar;
