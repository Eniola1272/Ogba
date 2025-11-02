import { testimonials } from "../assets/assets";
import StarRating from "./StarRating";
import Title from "./Title";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center bg-slate-50 pt-20 pb-30 px-16 md:px-16 lg:px-24">
      <Title
        title="What Our Geusts Say"
        subtitle="Discover why discerning travelers choose QuickStay for their luxury accommodations around the world."
      />
      <div className="flex flex-wrap items-center justify-center gap-6 mt-20 mb-15">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-xl px-7 py-10 shadow-lg"
          >
            <div className="flex gap-3 items-center">
              <img
                src={testimonial.image}
                alt="user-image"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h1 className="text-xl font-playfair">{testimonial.name}</h1>
                <p className="text-sm text-gray-500">{testimonial.address}</p>
              </div>
            </div>
            <div className="mt-5">
              <StarRating rating={testimonial.rating} />
            </div>
            <p className="text-sm text-gray-500 max-w-80 mt-4">
              {testimonial.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
