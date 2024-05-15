import { useState } from "react";

export default function SearchBox({ value, onSearch }) {
  const handleChange = (evt) => {
    onSearch(evt.target.value);
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={handleChange} />
      {/* <p>{value}</p> */}
    </div>
  );
}
