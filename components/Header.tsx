// components/Header.tsx
import Link from 'next/link';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';


const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Left: Social Media Links */}
        <div className="social-media-links">
          <Link href="https://www.facebook.com/share/LXA2KWrS8kbsy425/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </Link>
          <Link href="https://youtube.com/@allaboutanimals16?si=MGRUEVJkTWB8Ywn2" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={24} />
          </Link>
          <Link href="https://instagram.com/allaboutanimals16?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </Link>
        </div>

        {/* Center: Logo */}
        <div className="logo">
         <h1>All About Animals</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
