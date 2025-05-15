import "./navbar.scss";
export default function Navbar() {
  return (
    <div className="navbar">
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
