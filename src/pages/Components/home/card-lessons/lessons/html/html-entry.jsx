import React from "react";
import HtmlLessons from "./htmlLessonsCard";
import HtmlSideBar from './html-codes/html-side-bar/html-side-bar';
const HtmlEntry = ({
  searchTitle,
  setSearchTitle,
  searchParams,
  setSearchParams,
  handleSubmit,
  startsForm,
}) => {
  return (
    <>
      <HtmlLessons
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        handleSubmit={handleSubmit}
        startsForm={startsForm}
      />
      <HtmlSideBar/>
    </>
  );
};

export default HtmlEntry;
