"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [selectedForm, setSelectedForm] = useState("adoption");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    animal: "",
    petName: "",
    petAge: "",
    message: "",
    adoptionType: "", // For adoption form
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      animal: formData.animal,
      petName: formData.petName,
      petAge: formData.petAge,
      message: formData.message,
      adoptionType: formData.adoptionType || "N/A", // Use N/A if it's not an adoption form
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_m63nitd", // Replace with your EmailJS service ID
        "template_vrono6g", // Replace with your EmailJS template ID
        templateParams,
        "8Rh1NjDZBC5ZgppVa" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Thank you for reaching out! We will get back to you shortly.");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send the message. Please try again.");
        }
      );

    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      animal: "",
      petName: "",
      petAge: "",
      message: "",
      adoptionType: "",
    });
  };

  return (
    <div className="contactUsPage">
      <h1>Contact Us</h1>
      <div className="formCategory">
        <button onClick={() => setSelectedForm("adoption")}>Adoption</button>
        <button onClick={() => setSelectedForm("petStory")}>Pet Story</button>
        <button onClick={() => setSelectedForm("general")}>Other Queries</button>
      </div>

      <form onSubmit={handleSubmit} className="contactForm">
        <div className="formGroup">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="animal">Animal</label>
          <input
            type="text"
            id="animal"
            name="animal"
            value={formData.animal}
            onChange={handleChange}
            placeholder="Animal Type"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="petName">Pet Name</label>
          <input
            type="text"
            id="petName"
            name="petName"
            value={formData.petName}
            onChange={handleChange}
            placeholder="Pet Name"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="petAge">Pet Age</label>
          <input
            type="text"
            id="petAge"
            name="petAge"
            value={formData.petAge}
            onChange={handleChange}
            placeholder="Pet Age"
            required
          />
        </div>

        {selectedForm === "adoption" && (
          <div className="formGroup">
            <label htmlFor="adoptionType">Adoption Type</label>
            <select
              id="adoptionType"
              name="adoptionType"
              value={formData.adoptionType}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="adopt">Want to adopt an animal</option>
              <option value="giveForAdoption">Give your pet for adoption</option>
            </select>
          </div>
        )}

        <div className="formGroup">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={6}
            required
          ></textarea>
        </div>

        <button type="submit" className="submitButton">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
