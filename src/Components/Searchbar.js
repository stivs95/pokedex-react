import React from "react";
import { useState } from "react";

const Searchbar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
    if(e.target.value === 0){
      setSearch(null);
    }
  };

  const onClick = async (e) => {
    onSearch(search);

  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          placeholder="Buscar pokemon..."
          onChange={onChange}
        />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>Buscar</button>
      </div>
    </div>
  );
};

export default Searchbar;