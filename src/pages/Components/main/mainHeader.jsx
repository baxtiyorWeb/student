import React from "react";
import { useState } from "react";
const mainHeader = ({
  query,
  searchParams,
  setSearchTitle,
  setSearchParams,
  searchTitle
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    const latest = searchParams.has("latest");

    const param = {};

    if (query.length) param.post = query;
    setSearchParams(param);
  };
  return (
    <header>
      <div className="container">
        <div className="search-box">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <input
              type="search"
              name="search"
              id="search"
              className="search-input"
              placeholder="search lessons ..."
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
            />
            <button className="search-btn">
              <i className="bx bx-search"></i>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default mainHeader;
