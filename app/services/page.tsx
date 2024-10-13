import React from 'react';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Pet Health Consultation',
      description: 'Personalized consultations to help address your pet’s health concerns. From diet plans to general wellness, our experts are here to guide you.',
      pageLink: '/services/petconsultation',
    },
    {
      id: 2,
      title: 'Pet Grooming',
      description: 'Treat your pet to a refreshing grooming session! From baths to haircuts, we provide top-quality care to keep them looking and feeling great.',
      pageLink: '/services/petgrooming',
    },
    {
      id: 3,
      title: 'Pet Products and Accessories',
      description: 'Browse through our range of pet products including grooming tools, toys, and health supplements. Everything your pet needs in one place.',
      pageLink: '/services/petproduct',
    },
  ];

  return (
    <div className="servicesPage">
      <h1>Our Services</h1>
      <p>We offer a range of services to ensure your pet gets the best care possible.</p>

      <div className="serviceList">
        {services.map((service) => (
          <div key={service.id} className="serviceCard">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            
            {/* Link to the individual service page */}
            <Link href={service.pageLink}>
              <button className="serviceButton">Learn More</button>
            </Link>
            <br></br>

            {/* Book Now button, redirects to consultation form */}
            <Link href="/services/book">
              <button className="bookNowButton">Book Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
