import { useCallback, useEffect, useRef, useState } from "react";

const PriceFilter = ({ min, max, setMaxPrice, setMinPrice }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [max, min]
  );

  //set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    setMaxPrice(maxVal);
    setMinPrice(minVal);
  }, [minVal, maxVal]);
  // const dataHandle = useCallback(() => {
  //   setMaxPrice(maxVal);
  //   setMinPrice(minVal);
  // }, [minVal, maxVal]);

  // handle input change
  const handleMinInput = (e) => {
    const value = Math.min(Number(e.target.value), maxVal);
    setMinVal(value);
    // setMinPrice(value);
    minValRef.current = value;
  };

  const handleMaxInput = (e) => {
    const value = Math.max(Number(e.target.value), minVal);
    setMaxVal(value);
    // setMaxPrice(value);
    maxValRef.current = value;
  };

  return (
    <div className="relative w-full h-16 flex pt-5 pb-10">
      <input
        type="range"
        name="min"
        min={min}
        max={max}
        value={minVal}
        onChange={(e) => handleMinInput(e)}
        className="thumb thumb--left pointer-events-none cursor-pointer absolute h-0 outline-none z-[3] "
        style={{ zIndex: minVal > max - 100 && "5" }}
      />

      <input
        type="range"
        name="max"
        min={min}
        max={max}
        value={maxVal}
        onChange={(e) => handleMaxInput(e)}
        className="thumb thumb--right pointer-events-none cursor-pointer absolute h-0 outline-none z-[4]"
      />

      <div className="slider relative ">
        <div className="slider__track absolute rounded h-1 z-[1] w-full bg-slate-300" />

        <div
          ref={range}
          className="slider__range absolute bg-red-500 rounded h-1 z-[2]"
        />

        <div className="slider-value left-0">{minVal}</div>
        <div className="slider-value right-0 ">{maxVal}</div>
      </div>
    </div>
  );
};

export default PriceFilter;
