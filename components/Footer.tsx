import Link from 'next/link';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
        <Link href="https://www.facebook.com/share/LXA2KWrS8kbsy425/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />Facebook
          </Link>
          <Link href="https://youtube.com/@allaboutanimals16?si=MGRUEVJkTWB8Ywn2" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={24} />Youtube
          </Link>
          <Link href="https://instagram.com/allaboutanimals16?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />Instagram
          </Link>
        </div>

        <div className="footer-links">
          <Link href="/about">
            About Us
          </Link>
          <Link href="/contact">
            Contact
          </Link>
          <Link href="/privacy-policy">
           Privacy Policy
          </Link>
        </div>

        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} All About Animals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
