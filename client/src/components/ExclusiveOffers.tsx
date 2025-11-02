import { assets, exclusiveOffers } from "../assets/assets";
import Title from "./Title";

const ExclusiveOffers = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">
      <div className="flex flex-col md:flex-row justify-between w-full items-center">
        <Title
          title="Exclusive Offers"
          subtitle="Take advantage of our limited-time offers and special pakages to
            enhance your stay and ceate unforgettable memories."
          align="left"
        />
        <button className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12">
          View All Offers
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="group-hover:translate-x-1 transition-all"
          />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {exclusiveOffers.map((offer) => (
          <div
            key={offer._id}
            className="group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 rounded-xl text-white bg-no-repeat px-4 bg-cover bg-center"
            style={{ backgroundImage: `url(${offer.image})` }}
          >
            <p className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-gray-800 font-medium text-xs">
              {offer.priceOff}% OFF
            </p>
            <div>
              <p className="text-2xl tonf-medium font-playfair">
                {offer.title}
              </p>
              <p className="text-sm">{offer.description}</p>
              <p className="text-xs text-white/70 mt-2">
                Expires {offer.expiryDate}
              </p>
            </div>
            <button className="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5">
              View Offers
              <img
                src={assets.arrowIcon}
                alt="arrow-icon"
                className="invert group-hover:translate-x-1 transition-all"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
