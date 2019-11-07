import React from "react";

const searchBar = props => {
  return (
    <div>
      <input
        id="table-search-bar"
        className="form-control form-control-sm"
        style={{ marginTop: "15px", width: "89%" }}
        type="text"
        placeholder="Search"
        onChange={props.onSearch}
      />
      {props.children}
    </div>
  );
};

export default searchBar;
