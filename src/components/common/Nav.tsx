import React from 'react'

function Nav() {
  return (
    <div>

{/* <!-- ======= Header ======= --> */}
  <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center">

      <h1 className="logo me-auto"><a href="index.html">이주영</a></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      {/* <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link   scrollto" href="#portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" href="#team">Team</a></li>
          <li className="dropdown"><a href="#"><span>Project</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="https://github.com/ljy1348">개인 프로젝트</a></li>
              <li><a href="#">팀 프로젝트</a></li>
            </ul>
          </li>
          <li><a className="getstarted" href="https://github.com/ljy1348">get started</a></li>

        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      {/* <!-- .navbar --> */}

    </div>
  </header>
  {/* <!-- End Header --> */}

    </div>
  )
}

export default Nav