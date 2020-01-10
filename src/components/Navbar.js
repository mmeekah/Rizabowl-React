import React, { Component } from "react";
import logo from "../images/logo.jpg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div>
        <div className="topbar">
          <div className="topbar__wrapper">
            <div>
              <div className="topbar__inner">
                <div className="topbar__social ml-5">
                  <div>
                    <Link
                      to="https://www.instagram.com/rizabowl/"
                      className="text-light"
                    >
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link to="#" className="mx-2 text-light">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-pinterest text-light" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <Link to="/">
                <img src={logo} alt="Rizabowl" width="40px" />
              </Link>
              <button
                type="button"
                className="nav-btn"
                onClick={this.handleToggle}
              >
                <FaAlignRight className="nav-icon" />
              </button>
            </div>
            <ul
              className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
            >
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/">PRODUCTS</Link>
              </li>

              <li>
                <Link to="/">ABOUT</Link>
              </li>
              <li>
                <Link to="/">BLOG</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
