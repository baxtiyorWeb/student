import { useState } from "react";
import { Routes, Route, useSearchParams} from "react-router-dom";
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
import Login from "../../../setup/auth/SignIn";
import HtmlEntry from "../home/card-lessons/lessons/html/html-entry";
import HtmlLessons from "../home/card-lessons/lessons/html/htmlLessonsCard";
import Register from "../Register/Register";
const Main = ({toggle, setToggle}) => {
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
        <MainHeader
            query={query}
            setQuery={setQuery}
            searchTitle={searchTitle}
            setSearchTitle={setSearchTitle}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            toggle={toggle}
            setToggle={setToggle}
          />
      <div className="container">
        <div className={!toggle ? "block": "hide-block"}>
        
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
            <Route path="/live-stream" element={<Videos />} />
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
            <Route
              path="/history"
              element={
                <History
                  searchTitle={searchTitle}
                  setSearchTitle={setSearchTitle}
                  searchParams={searchParams}
                  setSearchParams={setSearchParams}
                  handleSubmit={handleSubmit}
                  startsForm={startsForm}
                />
              }
            />
            <Route path="/register" element={<Auth />} />
            <Route exact path="/view-lessons/:videoUrlId" element={<VideoDetailPage /> }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/html"
              element={
                <HtmlEntry
                  searchTitle={searchTitle}
                  setSearchTitle={setSearchTitle}
                  searchParams={searchParams}
                  setSearchParams={setSearchParams}
                  handleSubmit={handleSubmit}
                  startsForm={startsForm}
                />
              }
            />
            <Route path="/html-lessons" element={<HtmlLessons searchTitle={searchTitle}
                  setSearchTitle={setSearchTitle}
                  searchParams={searchParams}
                  setSearchParams={setSearchParams}
                  handleSubmit={handleSubmit}
                  startsForm={startsForm}/>}/>
            <Route path="*" element={<NotFound />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default Main;
