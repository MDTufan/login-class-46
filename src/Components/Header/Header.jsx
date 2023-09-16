import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info">
  <div className="container">
    <a className="navbar-brand" href="#">TUFAN ALI</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <Link className="nav-link text-black" to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-black" to="/login">Login</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  );
}

export default Header;
