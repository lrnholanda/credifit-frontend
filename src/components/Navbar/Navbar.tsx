// Navbar.tsx
import React from 'react';
import './Navbar.css'; 

interface NavLinkProps {
  href: string;
  label: string;
}

const Navbar: React.FC = () => {
  const navLinks: NavLinkProps[] = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Sobre' },
    { href: '#', label: 'Contato' },
  ];

  return (
    <header className="navbar">
      <img src="logo.png" alt="Logo" className="logo" />
      <nav className="nav">
        <ul className="nav-list">
          {navLinks.map((link) => (
            <li className="nav-item" key={link.href}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
