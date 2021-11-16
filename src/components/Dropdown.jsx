import React from "react";
import Select from "react-select";
const colourStyles = {
  placeholder: (styles) => ({
    ...styles,
    color: "white",
    fontWeight: 800,
    textTransform: "uppercase",
    lineHeight: 1,
  }),
  dropdownIndicator: (styles) => ({ ...styles, color: "white" }),
  singleValue: (styles, { isDisabled }) => ({
    ...styles,
    color: isDisabled ? "lightGrey" : "white",
  }),
  menu: (styles) => ({
    ...styles,
    marginTop: "20px",
    background: "white",
    border: "1px solid lightgrey",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
  }),
  control: (styles) => ({
    ...styles,
    outline: "none",
    borderColor: "transparent",
    // border: "none",
    display: "flex",
    alignItems: "center",
    background: "transparent",
    color: "white",
    border: "none",
  }),
  indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      background: "transparent",
      color: isSelected ? "#e8b72c" : "black",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
};

export default function Dropdown({
  options,
  heading,
  disabled,
  icon,
  setStateFunc = () => {},
  value,
}) {
  const icons = {
    character: "assets/character-icon.svg",
    background: "assets/background-icon.svg",
    rarity: "assets/rarity-icon.svg",
    sort: "assets/sort-by-icon.svg",
  };

  return (
    <div className="w-full relative flex items-center text-white  z-10 p-2 border-2 border-white rounded-md font-extrabold">
      <div className={`flex items-center gap-1 uppercase font-extrabold min-w-max pr-1`}>
        <img className="w-5" src={icons[icon]} alt={heading} />
      </div>
      <div className="w-full">
        <Select
          placeholder={heading}
          value={value.value !== null && value}
          isDisabled={disabled}
          styles={colourStyles}
          isSearchable={false}
          options={options}
          onChange={(e) => setStateFunc(e.value)}
        />
      </div>
    </div>
  );
}
