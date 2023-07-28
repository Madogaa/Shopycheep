import React, { useContext, useEffect, useState } from "react";
import ProductsView from "../ProductsView/ProductsView";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import MyDataContext from "../../Context/MyDataContext";

function SearchView() {
    const[sliderValue, setSliderValue] = useState(5)
  const { valor, updateValor } = useContext(MyDataContext)
  const handleSliderRelease = () => {
    updateValor(sliderValue)
  };


  return (
    <div className="p-10">
      <div className="p-5 mb-10 rounded-lg bg-gradient-to-tr from-blue-600 via-blue-800 to-gray-700 shadow-lg shadow-slate-900">
        <div className="flex p-2 justify-center">
          <p className="font-medium pr-5 self-center">Cantidad:</p>
          <div className="w-2/3 sm:w-1/2 md:w-1/3">
            <RangeSlider
              value={sliderValue}
              onChange={(changeEvent) => setSliderValue(changeEvent.target.value)}
              onMouseUp={handleSliderRelease}
                min={5}
                max={50}
            />
          </div>
        </div>
      </div>
      <ProductsView />
    </div>
  );
}

export default SearchView;
