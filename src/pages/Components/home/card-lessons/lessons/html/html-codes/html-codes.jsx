import React from "react";
import { Link } from "react-router-dom";

const HtmlCodes = () => {
  return (
    <>
      <div className="html-tutorial heading">
        <p>
          mana bu ko'rib turgan codlarningiz html dagi headinglar hisoblanadi.
          Bu Headinglar asosan title (ya'ni "sarlavha") uchun ishlatiladi
        </p>
        <code>
          <pre>
            <div className="html-code">
              <div className="opened-tag">
                <span className="r">{"<"}</span>
                <span className="t">h1</span>
                <span className="l">{">"}</span>
              </div>
              <div className="result-t">
                <h1>Item 1</h1>
              </div>
              <div className="closed-tag">
                <span className="r">{"<"}</span>
                <span className="t">/h1</span>
                <span className="l">{">"}</span>
              </div>
            </div>
            <div className="html-code">
              <div className="opened-tag">
                <span className="r">{"<"}</span>
                <span className="t">h2</span>
                <span className="l">{">"}</span>
              </div>
              <div className="result-t">
                <h2>Item 2</h2>
              </div>
              <div className="closed-tag">
                <span className="r">{"<"}</span>
                <span className="t">/h2</span>
                <span className="l">{">"}</span>
              </div>
            </div>
            <div className="html-code">
              <div className="opened-tag">
                <span className="r">{"<"}</span>
                <span className="t">h3</span>
                <span className="l">{">"}</span>
              </div>
              <div className="result-t">
                <h3>Item 3</h3>
              </div>
              <div className="closed-tag">
                <span className="r">{"<"}</span>
                <span className="t">/h3</span>
                <span className="l">{">"}</span>
              </div>
            </div>
            <div className="html-code">
              <div className="opened-tag">
                <span className="r">{"<"}</span>
                <span className="t">h4</span>
                <span className="l">{">"}</span>
              </div>
              <div className="result-t">
                <h4>Item 4</h4>
              </div>
              <div className="closed-tag">
                <span className="r">{"<"}</span>
                <span className="t">/h4</span>
                <span className="l">{">"}</span>
              </div>
            </div>
            <div className="html-code">
              <div className="opened-tag">
                <span className="r">{"<"}</span>
                <span className="t">h5</span>
                <span className="l">{">"}</span>
              </div>
              <div className="result-t">
                <h5>Item 5</h5>
              </div>
              <div className="closed-tag">
                <span className="r">{"<"}</span>
                <span className="t">/h5</span>
                <span className="l">{">"}</span>
              </div>
            </div>
            <div className="html-code">
              <div className="opened-tag">
                <span className="r">{"<"}</span>
                <span className="t">h6</span>
                <span className="l">{">"}</span>
              </div>
              <div className="result-t">
                <h6>Item 6</h6>
              </div>
              <div className="closed-tag">
                <span className="r">{"<"}</span>
                <span className="t">/h6</span>
                <span className="l">{">"}</span>
              </div>
            </div>
          </pre>
        </code>
        <div className="html-code-tools">
          <div className="left-menu menu-video-col-1">
          <span className="bx bx-copy"></span>
          <span className="fas fa-question"></span>
          <span className="fas fa-comments"></span>
          {/* <span className="fas fa-question"></span> */}
          </div>
          <div className="right-menu">
          <div className="view-video-block menu-video-col-1">
          <Link to="#" className="view-video">
            <i className="bx bxl-youtube"></i>
            <span>view Video</span>
          </Link>
          </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default HtmlCodes;
