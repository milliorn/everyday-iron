import React from "react"
import Scrollspy from "react-scrollspy"
import { Navbar, Nav } from "react-bootstrap"
import Scroller from "./scroller"

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    Scroller.handleAnchorScroll = Scroller.handleAnchorScroll.bind(this)
  }

  render() {
    return (
      <>
        <Navbar
          className="navbar navbar-expand-lg navbar-light fixed-top py-3"
          id="mainNav"
          expand="lg"
          collapseOnSelect={true}
        >
          <div className="container">
            <a
              className="navbar-brand js-scroll-trigger"
              href="#page-top"
              onClick={Scroller.handleAnchorScroll}
            >
              Everyday Iron Workout Warehouse
						</a>
            <Navbar.Toggle aria-controls="navbarResponsive" />
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav ml-auto my-2 my-lg-0">
                <Scrollspy
                  className="navbar-nav"
                  items={["about", "services", "portfolio", "contact"]}
                  currentClassName="active"
                  rootEl={"#mainNav"}
                  offset={-75}
                >
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#about"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      About
										</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#services"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Services
										</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#portfolio"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Portfolio
										</Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className={"js-scroll-trigger"}
                      href="#contact"
                      onClick={Scroller.handleAnchorScroll}
                    >
                      Contact
										</Nav.Link>
                  </li>
                </Scrollspy>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-white font-weight-bold">
                  RHINOS ATHLETIC PERFORMANCE
								</h1>
                <hr className="divider my-4" />
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="text-white-75 font-weight-light mb-5">
                  Personal training? Powerlifting coach?
                  Like minded monsters to train with?
                  You’ll find them all here!
                  Changing your mind set through fitness, improving yourself everyday!
                  Small or big,
                  far or near we’re all about making a difference first in ourselves then in our brothers and sisters.
								</p>
                <a
                  className="btn btn-primary btn-xl js-scroll-trigger"
                  href="#about"
                  onClick={Scroller.handleAnchorScroll}
                >
                  Learn More
								</a>
              </div>
            </div>
          </div>
        </header>
      </>
    )
  }
}
