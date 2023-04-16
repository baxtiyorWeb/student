import { useState } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import Settings from "../settings/Settings";
import "../../Components/Component.css";
import Comments from "./../posts/Components/comments/Comments";
import Videos from "../Videos/Videos";
import History from "../History/History";
import Lessons from "../lessons/lessons";
import Account from "../account/Account";
import NewLessons from "../new-lessons/newLessons";
import NewGroup from "../new-group/newGroup";
import NewContact from "./../new-contact/newContac";
import Home from "./../../Components/home/Home";
import Auth from "../../../setup/auth/auth";
import MainHeader from "./mainHeader";
import VideoDetailPage from "../../video-detail-page/video-detail-page";
import NotFound from "../../Components/notFound/NotFound";
const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTitle, setSearchTitle] = useState("");
  const [query, setQuery] = useState(searchParams.get("query"));
  let startsForm;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    searchParams({ query });
  };
  return (
    <main>
      <div className="container">
        <div className="block">
          <MainHeader
            query={query}
            setQuery={setQuery}
            searchTitle={searchTitle}
            setSearchTitle={setSearchTitle}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  searchTitle={searchTitle}
                  setSearchTitle={setSearchTitle}
                  searchParams={searchParams}
                  setSearchParams={setSearchParams}
                  handleSubmit={handleSubmit}
                  startsForm={startsForm}
                />
              }
            />
            <Route
              path="/home"
              element={
                <Home
                  searchTitle={searchTitle}
                  setSearchTitle={setSearchTitle}
                  searchParams={searchParams}
                  setSearchParams={setSearchParams}
                  handleSubmit={handleSubmit}
                  startsForm={startsForm}
                />
              }
            />
            <Route path="/posts" element={<Comments />} />
            <Route path="/videos" element={<Videos />} />
            <Route
              path="/lessons"
              element={
                <Lessons
                  searchTitle={searchTitle}
                  setSearchTitle={setSearchTitle}
                  searchParams={searchParams}
                  setSearchParams={setSearchParams}
                  handleSubmit={handleSubmit}
                  startsForm={startsForm}
                />
              }
            />
            <Route path="/account" element={<Account />} />
            <Route path="/new-lessons" element={<NewLessons />} />
            <Route path="/new-group" element={<NewGroup />} />
            <Route path="/new-content" element={<NewContact />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/history" element={<History />} />
            <Route path="/auth-register" element={<Auth />} />
            <Route path="/view-lessons" element={<VideoDetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default Main;
