import React from "react";
import BrandImage from "../../resources/appicon/apple-touch-icon-1024x1024.png";
require("../../styles/header.scss");

class Header extends React.Component {
  render() {
    return (
      <header>
        <ul className="my-nav">
          <li>
            <img
              src={BrandImage}
              alt="US news"
              style={{ width: "60px", heigtht: "50px" }}
            />
          </li>
          <li className="my-nav-centered">
            {this.props.is_loading ? <span>Loading articles....</span> : null}
          </li>
          <li className="float-right">
            <div className="my-search-container">
              <i className="fa fa-search" aria-hidden="true"></i>
              <input
                className="my-search-input"
                type="search"
                placeholder="Search"
                onChange={this.props.searchHandler}
              />
            </div>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
