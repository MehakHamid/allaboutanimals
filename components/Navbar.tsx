// components/Navbar.tsx
"use client"; // Mark the component as a Client Component

import Link from 'next/link';



const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Navigation Links */}
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/petcare">Pet Care</Link>
          <Link href="/contact">Contact</Link>          
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;

