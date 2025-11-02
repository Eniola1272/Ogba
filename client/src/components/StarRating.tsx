import { assets } from "../assets/assets";

interface IStarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: IStarRatingProps) => {
  return (
    <div className="flex items-center gap-1">
      {Array(5)
        .fill("")
        .map((_, index) => (
          <img
            key={index}
            src={
              rating > index ? assets.starIconFilled : assets.starIconOutlined
            }
            alt="star-icon"
          />
        ))}
    </div>
  );
};

export default StarRating;
