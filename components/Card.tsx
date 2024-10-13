"use client"; // If you're using interactive elements like buttons

import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  link: string; // Link to the full content
}

const Card: React.FC<CardProps> = ({ title, description, link }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link className="read-more" href={link}>
        Read More
      </Link>
    </div>
  );
};

export default Card;
