import css from "./SearchBox.module.css";
import { useState } from "react";

export default function SearchBox({ value, onSearch }) {
  const handleChange = (evt) => {
    onSearch(evt.target.value);
  };

  return (
    <div className={css.searchBox}>
      <p className={css.searchLable}>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
