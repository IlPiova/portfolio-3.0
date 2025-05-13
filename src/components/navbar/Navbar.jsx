import { Link } from "react-router";
import "./navbar.scss";
export default function Navbar() {
  return (
    <div className="navbar">
      {/* <Link className="nav-item" to="/">
        Home
      </Link>
      <Link className="nav-item" to="/me-&-ai">
        ME&AI
      </Link> */}
      <a href="/#about" className="nav-item">
        About
      </a>
      <a href="/#skills" className="nav-item">
        Skills
      </a>
      <a href="/#projects" className="nav-item">
        Projects
      </a>
    </div>
  );
}
