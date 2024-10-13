import React from 'react';
import Link from 'next/link';


const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About All About Animals</h1>
        <p>Discover the amazing world of animals, learn, and engage with nature's incredible creatures!</p>
      </div>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At All About Animals, we are passionate about educating people on the diverse species that inhabit our planet.
          Our goal is to create a resource where anyone can learn more about their favorite animals, uncover unknown
          species, and find tips on how to care for pets.
        </p>
      </section>

      <section className="why-animals-section">
        <h2>Why Animals Matter</h2>
        <p>
          Animals play an essential role in maintaining our planet’s ecosystem. They inspire curiosity, teach responsibility,
          and even improve our well-being. We believe that everyone should have access to information about these beautiful
          creatures and the ecosystems they support.
        </p>
      </section>

      <section className="get-involved-section">
        <h2>Get Involved</h2>
        <p>
          Whether you’re an animal lover, a pet owner, or someone who simply wants to learn more about the world around you,
          All About Animals is the perfect place to explore. Follow us on our social media channels and become part of our
          growing community.
        </p>
        <Link className="contact-link" href="/contact">
         Contact Us
        </Link>
      </section>
    </div>
  );
};

export default About;
   