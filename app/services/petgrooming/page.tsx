import Link from 'next/link';
import React from 'react';

const Grooming = () => {
  return (
    <div className="groomingPage">
      <h1>Pet Grooming</h1>
      <p>
        At All About Animals, we offer professional grooming services to help keep your pets looking and feeling their best. 
        Our grooming experts provide a range of services tailored to your pet’s specific needs, ensuring they leave refreshed, clean, and happy.
      </p>

      <h2>Our Grooming Services Include:</h2>
      <ul>
        <li>
          <strong>Bathing and Shampooing:</strong> 
          Gentle baths with high-quality products that clean, hydrate, and leave your pet's coat soft and shiny.
        </li>
        <li>
          <strong>Haircuts and Trimming:</strong> 
          Customized haircuts to match your pet's breed, style, and comfort, ensuring they look fabulous.
        </li>
        <li>
          <strong>Nail Clipping:</strong> 
          Safe and painless nail trims to prevent discomfort and ensure healthy paws.
        </li>
        <li>
          <strong>Ear Cleaning:</strong> 
          Professional ear cleaning to prevent infections and maintain overall ear hygiene.
        </li>
        <li>
          <strong>Brushing and Deshedding:</strong> 
          Regular brushing and deshedding to remove loose fur and reduce shedding around your home.
        </li>
      </ul>

      <p>
        Whether your pet needs a full grooming session or just a quick cleanup, our professional groomers 
        are here to provide exceptional care and make the experience enjoyable for your furry friend.
      </p>

      <div className="ctaSection">
        <h3>Book a Grooming Session Today!</h3>
        <p>
          Treat your pet to a pampering grooming experience! Click below to schedule an appointment with our expert groomers.
        </p>
        <button className="bookButton"><Link href={'/services/book'}>Book Now</Link></button>
      </div>
    </div>
  );
};

export default Grooming;

