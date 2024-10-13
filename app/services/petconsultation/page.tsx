import React from 'react';
import Link from 'next/link';

const Consultation = () => {
  return (
    <div className="consultationPage">
      <h1>Pet Health Consultation</h1>
      <p>
        Our personalized consultations help address your pet’s health concerns, ensuring their well-being. 
        From tailored diet plans to overall wellness check-ups, our expert veterinarians are here to guide you 
        every step of the way. Whether your pet has specific health issues or you're just looking to optimize 
        their lifestyle, our team is ready to help.
      </p>
      
      <h2>Our Consultation Services Include:</h2>
      <ul>
        <li>
          <strong>Diet and Nutrition Plans:</strong> 
          We help craft a diet that is best suited for your pet’s specific health needs and lifestyle.
        </li>
        <li>
          <strong>General Health Checkups:</strong> 
          Comprehensive checkups to ensure your pet stays healthy and happy throughout their life.
        </li>
        <li>
          <strong>Advice on Exercise and Wellness:</strong> 
          Receive guidance on physical activities to keep your pet fit and mentally stimulated.
        </li>
        <li>
          <strong>Pet Behavioral Consultations:</strong> 
          Understanding your pet’s behavior and resolving any unwanted habits with expert advice.
        </li>
        <li>
          <strong>Preventative Care Recommendations:</strong> 
          Preventive strategies to safeguard your pet from common health issues and maintain long-term wellness.
        </li>
      </ul>

      <p>
        We understand that each pet is unique, and our experts work closely with you to develop a personalized 
        plan that fits your pet's needs. 
      </p>

      <div className="ctaSection">
        <h3>Book a Consultation Today!</h3>
        <p>
          Ready to give your pet the best care possible? Click below to schedule a personalized consultation 
          with our team of experts.
        </p>
        <button className="bookButton"><Link href="/services/book">Book Now</Link></button>
      </div>
    </div>
  );
};

export default Consultation;

