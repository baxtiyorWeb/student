import React from 'react'
import { Link } from 'react-router-dom';

const HtmlSideBar = () => {
  return (
    <div className="html-side-bar">
      <div className="container">
        <div className="navigation">
          <Link className="side-bar-link" to="/html">
            <span>Headinglar</span>
          </Link>
          <Link className="side-bar-link" to="/paragraph">
            <span>Paragrap</span>
          </Link>
          <Link className="side-bar-link" to="/live-stream">
            <span>Inline elements</span>
          </Link>
          <Link className="side-bar-link" to="/lessons">
            <span>Block elements</span>
          </Link>
          <Link className="side-bar-link" to="/account">
            <span>Attributes</span>
          </Link>
          <Link className="side-bar-link" to="/new-lessons">
            <span>html style</span>
          </Link>
          <Link className="side-bar-link" to="/new-group">
            <span>inputs</span>
          </Link>
          <Link className="side-bar-link" to="/new-content">
            <span>form</span>
          </Link>
          <Link className="side-bar-link" to="/settings">
            <span>img</span>
          </Link>
          <Link className="side-bar-link" to="/history">
            <span>video</span>
          </Link>
          <Link className="side-bar-link" to="/register">
            <span>questions</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HtmlSideBar
