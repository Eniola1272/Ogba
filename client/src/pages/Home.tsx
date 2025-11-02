import type { FC } from "react";
import ExclusiveOffers from "../components/ExclusiveOffers";
import FeaturedDestination from "../components/FeaturedDestination";
import Hero from "../components/Hero";
import NewsLetter from "../components/NewsLetter";
import Testimonials from "../components/Testimonials";

const Home: FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffers />
      <Testimonials />
      <NewsLetter />
    </div>
  );
};

export default Home;
