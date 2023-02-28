import React from "react";
import logo from "../../assets/logo.png";
// import "./css/style.css";
// import "../User/js/script.js";
function Event() {
  return (
    <>
      <header className="fixed-top header">
        <div className="top-header py-2 bg-white">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-4 text-center text-lg-left">
                <a className="text-color mr-3" href="callto:+443003030266">
                  <strong>CALL</strong> +44 300 303 0266
                </a>
                <ul className="list-inline d-inline">
                  <li className="list-inline-item mx-0">
                    <a className="d-inline-block p-2 text-color" href="#">
                      <i className="ti-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mx-0">
                    <a className="d-inline-block p-2 text-color" href="#">
                      <i className="ti-twitter-alt"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mx-0">
                    <a className="d-inline-block p-2 text-color" href="#">
                      <i className="ti-linkedin"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mx-0">
                    <a className="d-inline-block p-2 text-color" href="#">
                      <i className="ti-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-8 text-center text-lg-right">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a
                      className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block"
                      href="notice.html"
                    >
                      notice
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block"
                      href="research.html"
                    >
                      research
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block"
                      href="scholarship.html"
                    >
                      SCHOLARSHIP
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block"
                      href="#"
                      data-toggle="modal"
                      data-target="#loginModal"
                    >
                      login
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block"
                      href="#"
                      data-toggle="modal"
                      data-target="#signupModal"
                    >
                      register
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navigation w-100">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
              <a className="navbar-brand" href="index.html">
                <img src={logo} alt="logo" />
              </a>
              <button
                className="navbar-toggler rounded-0"
                type="button"
                data-toggle="collapse"
                data-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navigation">
                <ul className="navbar-nav ml-auto text-center">
                  <li className="nav-item @@home">
                    <a className="nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="nav-item @@about">
                    <a className="nav-link" href="about.html">
                      About
                    </a>
                  </li>
                  <li className="nav-item @@courses">
                    <a className="nav-link" href="courses.html">
                      COURSES
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="events.html">
                      EVENTS
                    </a>
                  </li>
                  <li className="nav-item @@blog">
                    <a className="nav-link" href="blog.html">
                      BLOG
                    </a>
                  </li>
                  <li className="nav-item dropdown view">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="teacher.html">
                        Teacher
                      </a>
                      <a className="dropdown-item" href="teacher-single.html">
                        Teacher Single
                      </a>
                      <a className="dropdown-item" href="notice.html">
                        Notice
                      </a>
                      <a className="dropdown-item" href="notice-single.html">
                        Notice Details
                      </a>
                      <a className="dropdown-item" href="research.html">
                        Research
                      </a>
                      <a className="dropdown-item" href="scholarship.html">
                        Scholarship
                      </a>
                      <a className="dropdown-item" href="course-single.html">
                        Course Details
                      </a>
                      <a className="dropdown-item" href="event-single.html">
                        Event Details
                      </a>
                      <a className="dropdown-item" href="blog-single.html">
                        Blog Details
                      </a>
                    </div>
                  </li>
                  <li className="nav-item @@contact">
                    <a className="nav-link" href="contact.html">
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <div
        className="modal fade"
        id="signupModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content rounded-0 border-0 p-4">
            <div className="modal-header border-0">
              <h3>Register</h3>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="login">
                <form action="#" className="row">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control mb-3"
                      id="signupPhone"
                      name="signupPhone"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control mb-3"
                      id="signupName"
                      name="signupName"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control mb-3"
                      id="signupEmail"
                      name="signupEmail"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control mb-3"
                      id="signupPassword"
                      name="signupPassword"
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      SIGN UP
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="loginModal"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content rounded-0 border-0 p-4">
            <div className="modal-header border-0">
              <h3>Login</h3>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="#" className="row">
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="loginPhone"
                    name="loginPhone"
                    placeholder="Phone"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control mb-3"
                    id="loginName"
                    name="loginName"
                    placeholder="Name"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="password"
                    className="form-control mb-3"
                    id="loginPassword"
                    name="loginPassword"
                    placeholder="Password"
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <section
        className="page-title-section overlay"
        data-background="images/backgrounds/page-title.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <ul className="list-inline custom-breadcrumb">
                <li className="list-inline-item">
                  <a
                    className="h2 text-primary font-secondary"
                    href="@@page-link"
                  >
                    Upcoming Events
                  </a>
                </li>
                <li className="list-inline-item text-white h3 font-secondary @@nasted"></li>
              </ul>
              <p className="text-lighten">
                Our courses offer a good compromise between the continuous
                assessment favoured by some universities and the emphasis placed
                on final exams by others.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="card border-0 rounded-0 hover-shadow">
                <div className="card-img position-relative">
                  <img
                    className="card-img-top rounded-0"
                    src="images/events/event-1.jpg"
                    alt="event thumb"
                  />
                  <div className="card-date">
                    <span>18</span>
                    <br />
                    December
                  </div>
                </div>
                <div className="card-body">
                  <p>
                    <i className="ti-location-pin text-primary mr-2"></i>
                    Dhanmondi Lake, Dhaka
                  </p>
                  <a href="event-single.html">
                    <h4 className="card-title">
                      Firefly training in trauma-informed yoga
                    </h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="card border-0 rounded-0 hover-shadow">
                <div className="card-img position-relative">
                  <img
                    className="card-img-top rounded-0"
                    src="images/events/event-2.jpg"
                    alt="event thumb"
                  />
                  <div className="card-date">
                    <span>21</span>
                    <br />
                    December
                  </div>
                </div>
                <div className="card-body">
                  <p>
                    <i className="ti-location-pin text-primary mr-2"></i>
                    Dhanmondi Lake, Dhaka
                  </p>
                  <a href="event-single.html">
                    <h4 className="card-title">
                      Research seminar in clinical science.
                    </h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="card border-0 rounded-0 hover-shadow">
                <div className="card-img position-relative">
                  <img
                    className="card-img-top rounded-0"
                    src="images/events/event-3.jpg"
                    alt="event thumb"
                  />
                  <div className="card-date">
                    <span>23</span>
                    <br />
                    December
                  </div>
                </div>
                <div className="card-body">
                  <p>
                    <i className="ti-location-pin text-primary mr-2"></i>
                    Dhanmondi Lake, Dhaka
                  </p>
                  <a href="event-single.html">
                    <h4 className="card-title">
                      Toward a public philosophy of justice
                    </h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="card border-0 rounded-0 hover-shadow">
                <div className="card-img position-relative">
                  <img
                    className="card-img-top rounded-0"
                    src="images/events/event-1.jpg"
                    alt="event thumb"
                  />
                  <div className="card-date">
                    <span>18</span>
                    <br />
                    December
                  </div>
                </div>
                <div className="card-body">
                  <p>
                    <i className="ti-location-pin text-primary mr-2"></i>
                    Dhanmondi Lake, Dhaka
                  </p>
                  <a href="event-single.html">
                    <h4 className="card-title">
                      Lorem ipsum dolor amet, consectetur adipisicing.
                    </h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="card border-0 rounded-0 hover-shadow">
                <div className="card-img position-relative">
                  <img
                    className="card-img-top rounded-0"
                    src="images/events/event-2.jpg"
                    alt="event thumb"
                  />
                  <div className="card-date">
                    <span>21</span>
                    <br />
                    December
                  </div>
                </div>
                <div className="card-body">
                  <p>
                    <i className="ti-location-pin text-primary mr-2"></i>
                    Dhanmondi Lake, Dhaka
                  </p>
                  <a href="event-single.html">
                    <h4 className="card-title">
                      Inequality seminar returns spring term
                    </h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="card border-0 rounded-0 hover-shadow">
                <div className="card-img position-relative">
                  <img
                    className="card-img-top rounded-0"
                    src="images/events/event-3.jpg"
                    alt="event thumb"
                  />
                  <div className="card-date">
                    <span>23</span>
                    <br />
                    December
                  </div>
                </div>
                <div className="card-body">
                  <p>
                    <i className="ti-location-pin text-primary mr-2"></i>
                    Dhanmondi Lake, Dhaka
                  </p>
                  <a href="event-single.html">
                    <h4 className="card-title">
                      Social media and behavior economics conference
                    </h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="newsletter">
          <div className="container">
            <div className="row">
              <div className="col-md-9 ml-auto bg-primary py-5 newsletter-block">
                <h3 className="text-white">Subscribe Now</h3>
                <form action="#">
                  <div className="input-wrapper">
                    <input
                      type="email"
                      className="form-control border-0"
                      id="newsletter"
                      name="newsletter"
                      placeholder="Enter Your Email..."
                    />
                    <button
                      type="submit"
                      value="send"
                      className="btn btn-primary"
                    >
                      Join
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer bg-footer section border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-8 mb-5 mb-lg-0">
                <a className="logo-footer" href="index.html">
                  <img className="img-fluid mb-4" src={logo} alt="logo" />
                </a>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    23621 15 Mile Rd #C104, Clinton MI, 48035, New York, USA
                  </li>
                  <li className="mb-2">+1 (2) 345 6789</li>
                  <li className="mb-2">+1 (2) 345 6789</li>
                  <li className="mb-2">contact@yourdomain.com</li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
                <h4 className="text-white mb-5">COMPANY</h4>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a className="text-color" href="about.html">
                      About Us
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="teacher.html">
                      Our Teacher
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="contact.html">
                      Contact
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="blog.html">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
                <h4 className="text-white mb-5">LINKS</h4>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a className="text-color" href="courses.html">
                      Courses
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="event.html">
                      Events
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="gallary.html">
                      Gallary
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="faqs.html">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
                <h4 className="text-white mb-5">SUPPORT</h4>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a className="text-color" href="#">
                      Forums
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="#">
                      Documentation
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="#">
                      Language
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="#">
                      Release Status
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
                <h4 className="text-white mb-5">RECOMMEND</h4>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a className="text-color" href="#">
                      WordPress
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="#">
                      LearnPress
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="#">
                      WooCommerce
                    </a>
                  </li>
                  <li className="mb-3">
                    <a className="text-color" href="#">
                      bbPress
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Event;
