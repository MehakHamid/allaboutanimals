// pages/animalkingdom.tsx
import React from 'react';

const AnimalKingdom = () => {
  return (
    <div className="animal-kingdom-page">
      <h1>Discover the Animal Kingdom</h1>
      <p>
        The animal kingdom is vast and diverse, filled with incredible creatures that inhabit our planet’s oceans, skies, and land. From the smallest insects to the largest mammals, each species plays a crucial role in the ecosystems that keep our world in balance.
      </p>

      <section className="mammals-section">
        <h2>Mammals</h2>
        <p>
          Mammals are warm-blooded creatures with hair or fur and are known for giving live birth. They are found on every continent and range from tiny mice to massive whales. Humans, lions, elephants, and bats are all examples of mammals.
        </p>
      </section>

      <section className="birds-section">
        <h2>Birds</h2>
        <p>
          Birds are known for their feathers, beaks, and the ability to lay eggs. They inhabit nearly every corner of the planet, from the freezing Arctic to the tropics. Birds like eagles, penguins, and parrots display the incredible diversity of avian life.
        </p>
      </section>

      <section className="reptiles-section">
        <h2>Reptiles</h2>
        <p>
          Reptiles are cold-blooded creatures with scaly skin, and they lay eggs on land. Lizards, snakes, turtles, and crocodiles are common examples of reptiles. These fascinating animals have adapted to live in deserts, rainforests, and even urban environments.
        </p>
      </section>

      <section className="insects-section">
        <h2>Insects</h2>
        <p>
          Insects are the most diverse group of animals on Earth. They include creatures like ants, butterflies, and bees. Though small in size, insects play essential roles in pollination, decomposition, and providing food for other animals.
        </p>
      </section>
    </div>
  );
};

export default AnimalKingdom;
