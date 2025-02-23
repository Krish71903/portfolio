import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-list">
          <li>
            <a href="#home" className="navbar-link">Home</a>
          </li>
          <li>
            <a href="#about" className="navbar-link">About</a>
          </li>
          <li>
            <a href="#projects" className="navbar-link">Projects</a>
          </li>
          <li>
            <a href="#contact" className="navbar-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}