import React from 'react';

const PetFoodAccessories = () => {
  return (
    <div className="petFoodAccessoriesPage">
      <h1>Pet Food & Accessories</h1>
      <p>Your pets deserve the best care, and providing the right food and accessories is crucial for their health and happiness.</p>

      <section className="foodSection">
        <h2>Pet Food</h2>
        <p>Feeding your pet a balanced diet is essential to their overall well-being. Pet-specific food is formulated to meet their unique nutritional needs, ensuring they receive all the vitamins, proteins, and minerals they need.</p>
        <p><strong>Importance of Pet Food:</strong> Proper nutrition helps maintain a healthy weight, boosts immunity, and ensures a longer and happier life for your pet.</p>
      </section>

      <section className="accessoriesSection">
        <h2>Pet Accessories</h2>
        <p>Accessories like collars, toys, and grooming tools are not only functional but also contribute to your pet's physical and mental health. Interactive toys keep them engaged, while grooming tools ensure they stay clean and comfortable.</p>
        <p><strong>Importance of Pet Accessories:</strong> Keeping your pet entertained and well-groomed promotes mental stimulation, prevents boredom, and strengthens the bond between you and your pet.</p>
      </section>
    </div>
  );
};

export default PetFoodAccessories;
