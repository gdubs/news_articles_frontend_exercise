import React from "react";
require("../../styles/header.scss");

class Header extends React.Component {
  render() {
    return (
      <header>
        <ul className="my-nav">
          <li>
            <a href="#">US News</a>
          </li>
          <li className="float-right">
            <div className="form-inline my-2 my-lg-0">
              <input className="my-search" type="search" placeholder="Search" />
              <button className="my-btn" type="submit">
                Search
              </button>
            </div>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
