import Link from "next/link";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div>
      <div className="home-text">
        <button>
          <Link href="https://youtube.com/@allaboutanimals16?si=MyXKLsmICeh5Q3Ln">
            Subscribe Youtube channel
          </Link>
        </button>
      </div>

      {/* Flexbox Container for Cards */}
      <div className="card-container">
        <Card
          title="Discover the Animal Kingdom"
          description="Step into the wild and explore the incredible diversity of animals. From the deepest oceans to the highest mountains, uncover how each creature plays a role in our planet's ecosystem."
          link="animalkingdom"
        />

        <Card
          title="Learn about the History of Animals"
          description="From the earliest humans to the modern era, learn about the evolution of animals and how they've shaped our world."
          link="/history"
        />

        <Card
          title="Animal Adoption"
          description="Find your perfect furry friend! Explore our adoptable animals, learn about the adoption process, and discover the joy of giving a loving home to a pet in need."
          link="/contact"
        />
      </div>
    </div>
  );
}







