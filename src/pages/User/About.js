import React from "react";
// import "./css/style.css";
// import "../User/js/script.js";
import about from "../../assets/about/about-page.jpg";
import logo from "../../assets/logo.png";
import teacher1 from "../../assets/teachers/teacher-1.jpg";
import teacher2 from "../../assets/teachers/teacher-2.jpg";
import teacher3 from "../../assets/teachers/teacher-3.jpg";

function About() {
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
                  <li className="nav-item active">
                    <a className="nav-link" href="/about">
                      About
                    </a>
                  </li>
                  <li className="nav-item @@courses">
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

      <section className="page-title-section overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <ul className="list-inline custom-breadcrumb">
                <li className="list-inline-item">
                  <a
                    className="h2 text-primary font-secondary"
                    href="@@page-link"
                  >
                    About Us
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
            <div className="col-12">
              <img
                className="img-fluid w-100 mb-4"
                src={about}
                alt="about image"
              />
              <h2 className="section-title">ABOUT OUR JOURNY</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et.dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Saepe ipsa illo quod veritatis,
                magni debitis fugiat dolore voluptates! Consequatur, aliquid.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat perferendis sint optio similique. Et amet magni facilis
                vero corporis quos.
              </p>
              <p>
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Ipsum a, facere
                fugit error accusamus est officiis vero in, nostrum laboriosam
                corrupti explicabo, cumque repudiandae deleniti perspiciatis
                quae consectetur enim. Laboriosam!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
              <div className="text-center">
                <h2 className="count text-white" data-count="60">
                  0
                </h2>
                <h5 className="text-white">TEACHERS</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
              <div className="text-center">
                <h2 className="count text-white" data-count="50">
                  0
                </h2>
                <h5 className="text-white">COURSES</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
              <div className="text-center">
                <h2 className="count text-white" data-count="1000">
                  0
                </h2>
                <h5 className="text-white">STUDENTS</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
              <div className="text-center">
                <h2 className="count text-white" data-count="3737">
                  0
                </h2>
                <h5 className="text-white">SATISFIED CLIENT</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cover aboutbg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-4 position-relative success-video">
              <a
                className="play-btn venobox"
                href="https://youtu.be/nA1Aqp0sPQo"
                data-vbtype="video"
              >
                <i className="ti-control-play"></i>
              </a>
            </div>
            <div className="col-lg-6 col-sm-8">
              <div className="bg-white p-5">
                <h2 className="section-title">Success Stories</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <h2 className="section-title">Our Teachers</h2>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
              <div className="card border-0 rounded-0 hover-shadow">
                <img
                  className="card-img-top rounded-0"
                  src={teacher1}
                  alt="teacher"
                />
                <div className="card-body">
                  <a href="teacher-single.html">
                    <h4 className="card-title">Jacke Masito</h4>
                  </a>
                  <div className="d-flex justify-content-between">
                    <span>Teacher</span>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a className="text-color" href="#">
                          <i className="ti-facebook"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="text-color" href="#">
                          <i className="ti-twitter-alt"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="text-color" href="#">
                          <i className="ti-google"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="text-color" href="#">
                          <i className="ti-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
              <div className="card border-0 rounded-0 hover-shadow">
                <img
                  className="card-img-top rounded-0"
                  src={teacher2}
                  alt="teacher"
                />
                <div className="card-body">
                  <a href="teacher-single.html">
                    <h4 className="card-title">Clark Malik</h4>
                  </a>
                  <div className="d-flex justify-content-between">
                    <span>Teacher</span>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a className="text-color" href="#">
                          <i className="ti-facebook"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="text-color" href="#">
                          <i className="ti-twitter-alt"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="text-color" href="#">
                          <i className="ti-google"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="text-color" href="#">
                          <i className="ti-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
              <div className="card border-0 rounded-0 hover-shadow">
                <img
                  className="card-img-top rounded-0"
                  src={teacher3}
                  alt="teacher"
                />
                <div className="card-body">
                  <a href="teacher-single.html">
                    <h4 className="card-title">John Doe</h4>
                  </a>
                  <div className="d-flex justify-content-between">
                    <span>Teacher</span>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a className="text-color" href="#">
                          <i className="ti-facebook"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="text-color" href="#">
                          <i className="ti-twitter-alt"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="text-color" href="#">
                          <i className="ti-google"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="text-color" href="#">
                          <i className="ti-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
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

export default About;
