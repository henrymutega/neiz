

const Home = () => {
    return(
        <header id="header">
        <div className="container">
    
          <h1><a href="index.html">Neiz | Henry Mutega</a></h1>
          
          {/* <!-- <a href="index.html" class="mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> --> */}
          <h2> UX/UI Designer | <span>Front-End Developer</span> | Web-Icon</h2>
    
          <nav id="navbar" class="navbar">
            <ul>
              <li><a className="nav-link active" href="#header">Home</a></li>
              <li><a className="nav-link" href="#about">About</a></li>
              <li><a className="nav-link" href="#resume">Resume</a></li>
              <li><a className="nav-link" href="#services">Services</a></li>
              <li><a className="nav-link" href="#portfolio">Portfolio</a></li>
              <li><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
    
          <div className="social-links">
            <a href="https://twitter.com/h_mutega" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="https://web.facebook.com/parkhenry.mutega/" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/in/henry-mutega-34a210177/" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>
    
        </div>
        </header>
    );
};

export default Home;