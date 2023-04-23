import React from "react";
import { Link } from 'react-router-dom';
const mainHeader = ({
  query,
  searchParams,
  setSearchTitle,
  setSearchParams,
  searchTitle,
  setToggle,
  toggle
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;

    const param = {};

    if (query.length) param.post = query;
    setSearchParams(param);
  };
  return (
    <header>
      <div className="container">
        <div className="search-box">
          <div className="btn" onClick={(e)=> setToggle(!toggle)}>
            <i className="detailsMe   nuItem bx bx-menu"></i>
          </div>
          <Link className="upragade" to="#" >Upragade</Link>
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
