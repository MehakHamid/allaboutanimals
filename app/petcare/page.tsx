"use client"

import React, { useState } from 'react';

const PetCare = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const tips = [
    {
      id: 1,
      title: 'Regular Exercise',
      shortDescription: 'Ensure your pet gets plenty of exercise for better health and mental stimulation.',
      detailedDescription: 'Regular exercise is crucial for your pet’s overall well-being. It helps with maintaining a healthy weight, improves cardiovascular health, and provides mental stimulation. Activities like walking, running, or playing fetch can prevent boredom, reduce anxiety, and increase your pet’s happiness.',
    },
    {
      id: 2,
      title: 'Balanced Diet',
      shortDescription: 'A well-balanced diet is essential for your pet’s health and longevity.',
      detailedDescription: 'Feeding your pet a nutritious and balanced diet is important for their health. Depending on the breed, age, and size of your pet, the nutritional needs vary. It’s important to consult your veterinarian to understand the best dietary plan for your pet, which includes the right proportion of proteins, fats, and carbohydrates.',
    },
    {
      id: 3,
      title: 'Grooming',
      shortDescription: 'Keep your pet clean and healthy with regular grooming.',
      detailedDescription: 'Regular grooming helps maintain your pet’s hygiene and appearance. This includes brushing their coat, trimming nails, cleaning ears, and checking for fleas or ticks. Grooming not only keeps your pet clean but also strengthens the bond between you and your pet.',
    },
    {
      id: 4,
      title: 'Veterinary Care',
      shortDescription: 'Routine vet visits help catch health issues early and keep your pet vaccinated.',
      detailedDescription: 'Regular check-ups with a veterinarian are essential for keeping your pet healthy. Vaccinations, dental care, and preventive treatments such as flea and tick control are key. Early detection of health issues can prevent more serious problems in the future.',
    },
    // More tips...
  ];

  const toggleReadMore = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="petCarePage">
      <h1>Pet Care Tips</h1>
      <p>We provide expert advice and tips to help you care for your pets. Here are some of the key areas you should focus on:</p>

      <div className="tipsList">
        {tips.map((tip) => (
          <div key={tip.id} className="tipCard">
            <h3>{tip.title}</h3>
            <p>{tip.shortDescription}</p>

            {expanded === tip.id && <p>{tip.detailedDescription}</p>}

            <button onClick={() => toggleReadMore(tip.id)} className="readMoreButton">
              {expanded === tip.id ? 'Show Less' : 'Read More'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetCare;

