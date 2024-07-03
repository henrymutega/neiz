

const Home = () => {
    return(
        <header id="header">
        <div className="container">
    
          <h1><a href="index.html">Neiz | Henry Mutega</a></h1>
          
          {/* <!-- <a href="index.html" class="mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> --> */}
          <h2> UX/UI Designer | <span>Front-End Developer</span> | Web-Icon</h2>
    
          <nav id="navbar" class="navbar">
            <ul>
              <li><a className="nav-link active" href="#">Home</a></li>
              <li><a className="nav-link" href="#">About</a></li>
              <li><a className="nav-link" href="#">Resume</a></li>
              <li><a className="nav-link" href="#">Services</a></li>
              <li><a className="nav-link" href="#">Portfolio</a></li>
              <li><a className="nav-link" href="#">Contact</a></li>
            </ul>
            
          </nav>
    
          <div className="social-links">
            <a href="https://twitter.com/h_mutega" className="twitter"></a>
            <a href="https://web.facebook.com/parkhenry.mutega/" className="facebook"></a>
            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/in/henry-mutega-34a210177/" className="linkedin"></a>
          </div>
    
        </div>
        </header>
    );
};

export default Home;