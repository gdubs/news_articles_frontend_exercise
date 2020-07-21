import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-light custom">
          <a href="#" className="navbar-brand">
            US News
          </a>
          <div className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
