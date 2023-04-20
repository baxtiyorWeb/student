import React from "react";
import HtmlLessons from "./htmlLessonsCard";

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
    </>
  );
};

export default HtmlEntry;
