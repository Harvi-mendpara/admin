import React from "react";
import logo from "../../assets/logo.png";
import course1 from "../../assets/courses/course-1.jpg";
import course2 from "../../assets/courses/course-2.jpg";
import course3 from "../../assets/courses/course-3.jpg";
import course4 from "../../assets/courses/course-4.jpg";
import course5 from "../../assets/courses/course-5.jpg";
import course6 from "../../assets/courses/course-6.jpg";

function course() {
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
                      href="/notice"
                    >
                      notice
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block"
                      href="/research"
                    >
                      research
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block"
                      href="/scholarship"
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
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item @@about">
                    <a className="nav-link" href="/about">
                      About
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/course">
                      COURSES
                    </a>
                  </li>
                  <li className="nav-item @@events">
                    <a className="nav-link" href="/events">
                      EVENTS
                    </a>
                  </li>
                  <li className="nav-item @@blog">
                    <a className="nav-link" href="/blog">
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
                      <a className="dropdown-item" href="/teacher">
                        Teacher
                      </a>
                      <a className="dropdown-item" href="/teacher-single">
                        Teacher Single
                      </a>
                      <a className="dropdown-item" href="/notice">
                        Notice
                      </a>
                      <a className="dropdown-item" href="/notice-single">
                        Notice Details
                      </a>
                      <a className="dropdown-item" href="/research">
                        Research
                      </a>
                      <a className="dropdown-item" href="/scholarship">
                        Scholarship
                      </a>
                      <a className="dropdown-item" href="/course-single">
                        Course Details
                      </a>
                      <a className="dropdown-item" href="/event-single">
                        Event Details
                      </a>
                      <a className="dropdown-item" href="/blog-single">
                        Blog Details
                      </a>
                    </div>
                  </li>
                  <li className="nav-item @@contact">
                    <a className="nav-link" href="/contact">
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
                    href="courses.html"
                  >
                    Our Courses
                  </a>
                </li>
                <li className="list-inline-item text-white h3 font-secondary "></li>
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
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="card p-0 border-primary rounded-0 hover-shadow">
                <img
                  className="card-img-top rounded-0"
                  src={course1}
                  alt="course thumb"
                />
                <div className="card-body">
                  <ul className="list-inline mb-2">
                    <li className="list-inline-item">
                      <i className="ti-calendar mr-1 text-color"></i>02-14-2018
                    </li>
                    <li className="list-inline-item">
                      <a className="text-color" href="#">
                        Humanities
                      </a>
                    </li>
                  </ul>
                  <a href="course-single.html">
                    <h4 className="card-title">Photography</h4>
                  </a>
                  <p className="card-text mb-4">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <a
                    href="course-single.html"
                    className="btn btn-primary btn-sm"
                  >
                    Apply now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="card p-0 border-primary rounded-0 hover-shadow">
                <img
                  className="card-img-top rounded-0"
                  src={course2}
                  alt="course thumb"
                />
                <div className="card-body">
                  <ul className="list-inline mb-2">
                    <li className="list-inline-item">
                      <i className="ti-calendar mr-1 text-color"></i>02-14-2018
                    </li>
                    <li className="list-inline-item">
                      <a className="text-color" href="#">
                        Humanities
                      </a>
                    </li>
                  </ul>
                  <a href="course-single.html">
                    <h4 className="card-title">Programming</h4>
                  </a>
                  <p className="card-text mb-4">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <a
                    href="course-single.html"
                    className="btn btn-primary btn-sm"
                  >
                    Apply now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="card p-0 border-primary rounded-0 hover-shadow">
                <img
                  className="card-img-top rounded-0"
                  src={course3}
                  alt="course thumb"
                />
                <div className="card-body">
                  <ul className="list-inline mb-2">
                    <li className="list-inline-item">
                      <i className="ti-calendar mr-1 text-color"></i>02-14-2018
                    </li>
                    <li className="list-inline-item">
                      <a className="text-color" href="#">
                        Humanities
                      </a>
                    </li>
                  </ul>
                  <a href="course-single.html">
                    <h4 className="card-title">Lifestyle Archives</h4>
                  </a>
                  <p className="card-text mb-4">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <a
                    href="course-single.html"
                    className="btn btn-primary btn-sm"
                  >
                    Apply now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="card p-0 border-primary rounded-0 hover-shadow">
                <img
                  className="card-img-top rounded-0"
                  src={course4}
                  alt="course thumb"
                />
                <div className="card-body">
                  <ul className="list-inline mb-2">
                    <li className="list-inline-item">
                      <i className="ti-calendar mr-1 text-color"></i>02-14-2018
                    </li>
                    <li className="list-inline-item">
                      <a className="text-color" href="#">
                        Humanities
                      </a>
                    </li>
                  </ul>
                  <a href="course-single.html">
                    <h4 className="card-title">Complete Freelancing</h4>
                  </a>
                  <p className="card-text mb-4">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <a
                    href="course-single.html"
                    className="btn btn-primary btn-sm"
                  >
                    Apply now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="card p-0 border-primary rounded-0 hover-shadow">
                <img
                  className="card-img-top rounded-0"
                  src={course5}
                  alt="course thumb"
                />
                <div className="card-body">
                  <ul className="list-inline mb-2">
                    <li className="list-inline-item">
                      <i className="ti-calendar mr-1 text-color"></i>02-14-2018
                    </li>
                    <li className="list-inline-item">
                      <a className="text-color" href="#">
                        Humanities
                      </a>
                    </li>
                  </ul>
                  <a href="course-single.html">
                    <h4 className="card-title">Branding Design</h4>
                  </a>
                  <p className="card-text mb-4">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <a
                    href="course-single.html"
                    className="btn btn-primary btn-sm"
                  >
                    Apply now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="card p-0 border-primary rounded-0 hover-shadow">
                <img
                  className="card-img-top rounded-0"
                  src={course6}
                  alt="course thumb"
                />
                <div className="card-body">
                  <ul className="list-inline mb-2">
                    <li className="list-inline-item">
                      <i className="ti-calendar mr-1 text-color"></i>02-14-2018
                    </li>
                    <li className="list-inline-item">
                      <a className="text-color" href="#">
                        Humanities
                      </a>
                    </li>
                  </ul>
                  <a href="course-single.html">
                    <h4 className="card-title">Art Design</h4>
                  </a>
                  <p className="card-text mb-4">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <a
                    href="course-single.html"
                    className="btn btn-primary btn-sm"
                  >
                    Apply now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="card p-0 border-primary rounded-0 hover-shadow">
                <img
                  className="card-img-top rounded-0"
                  src={course1}
                  alt="course thumb"
                />
                <div className="card-body">
                  <ul className="list-inline mb-2">
                    <li className="list-inline-item">
                      <i className="ti-calendar mr-1 text-color"></i>02-14-2018
                    </li>
                    <li className="list-inline-item">
                      <a className="text-color" href="#">
                        Humanities
                      </a>
                    </li>
                  </ul>
                  <a href="course-single.html">
                    <h4 className="card-title">Photography</h4>
                  </a>
                  <p className="card-text mb-4">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <a
                    href="course-single.html"
                    className="btn btn-primary btn-sm"
                  >
                    Apply now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="card p-0 border-primary rounded-0 hover-shadow">
                <img
                  className="card-img-top rounded-0"
                  src={course2}
                  alt="course thumb"
                />
                <div className="card-body">
                  <ul className="list-inline mb-2">
                    <li className="list-inline-item">
                      <i className="ti-calendar mr-1 text-color"></i>02-14-2018
                    </li>
                    <li className="list-inline-item">
                      <a className="text-color" href="#">
                        Humanities
                      </a>
                    </li>
                  </ul>
                  <a href="course-single.html">
                    <h4 className="card-title">Programming</h4>
                  </a>
                  <p className="card-text mb-4">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <a
                    href="course-single.html"
                    className="btn btn-primary btn-sm"
                  >
                    Apply now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="card p-0 border-primary rounded-0 hover-shadow">
                <img
                  className="card-img-top rounded-0"
                  src={course3}
                  alt="course thumb"
                />
                <div className="card-body">
                  <ul className="list-inline mb-2">
                    <li className="list-inline-item">
                      <i className="ti-calendar mr-1 text-color"></i>02-14-2018
                    </li>
                    <li className="list-inline-item">
                      <a className="text-color" href="#">
                        Humanities
                      </a>
                    </li>
                  </ul>
                  <a href="course-single.html">
                    <h4 className="card-title">Lifestyle Archives</h4>
                  </a>
                  <p className="card-text mb-4">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <a
                    href="course-single.html"
                    className="btn btn-primary btn-sm"
                  >
                    Apply now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="card p-0 border-primary rounded-0 hover-shadow">
                <img
                  className="card-img-top rounded-0"
                  src={course4}
                  alt="course thumb"
                />
                <div className="card-body">
                  <ul className="list-inline mb-2">
                    <li className="list-inline-item">
                      <i className="ti-calendar mr-1 text-color"></i>02-14-2018
                    </li>
                    <li className="list-inline-item">
                      <a className="text-color" href="#">
                        Humanities
                      </a>
                    </li>
                  </ul>
                  <a href="course-single.html">
                    <h4 className="card-title">Complete Freelancing</h4>
                  </a>
                  <p className="card-text mb-4">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <a
                    href="course-single.html"
                    className="btn btn-primary btn-sm"
                  >
                    Apply now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="card p-0 border-primary rounded-0 hover-shadow">
                <img
                  className="card-img-top rounded-0"
                  src={course5}
                  alt="course thumb"
                />
                <div className="card-body">
                  <ul className="list-inline mb-2">
                    <li className="list-inline-item">
                      <i className="ti-calendar mr-1 text-color"></i>02-14-2018
                    </li>
                    <li className="list-inline-item">
                      <a className="text-color" href="#">
                        Humanities
                      </a>
                    </li>
                  </ul>
                  <a href="course-single.html">
                    <h4 className="card-title">Branding Design</h4>
                  </a>
                  <p className="card-text mb-4">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <a
                    href="course-single.html"
                    className="btn btn-primary btn-sm"
                  >
                    Apply now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="card p-0 border-primary rounded-0 hover-shadow">
                <img
                  className="card-img-top rounded-0"
                  src={course6}
                  alt="course thumb"
                />
                <div className="card-body">
                  <ul className="list-inline mb-2">
                    <li className="list-inline-item">
                      <i className="ti-calendar mr-1 text-color"></i>02-14-2018
                    </li>
                    <li className="list-inline-item">
                      <a className="text-color" href="#">
                        Humanities
                      </a>
                    </li>
                  </ul>
                  <a href="course-single.html">
                    <h4 className="card-title">Art Design</h4>
                  </a>
                  <p className="card-text mb-4">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                  <a
                    href="course-single.html"
                    className="btn btn-primary btn-sm"
                  >
                    Apply now
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

export default course;
