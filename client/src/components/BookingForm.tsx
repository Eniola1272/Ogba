import { assets, cities } from "../assets/assets";

const BookingForm = () => {
  return (
    <form className="bg-white text-gray-500 rounded-lg px-6 py-4  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto mt-8">
      <div>
        <div className="flex items-center gap-2">
          <img src={assets.calenderIcon} alt="calendar icon" className="h-4" />
          <label htmlFor="destinationInput">Destination</label>
        </div>
        <input
          list="destinations"
          id="destinationInput"
          type="text"
          className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          placeholder="Type here"
          required
        />
        <datalist id="destinations">
          {cities.map((city, index) => (
            <option key={index} value={city} />
          ))}
        </datalist>
      </div>

      <div>
        <div className="flex items-center gap-2">
          <img src={assets.calenderIcon} alt="calendar icon" className="h-4" />

          <label htmlFor="checkIn">Check in</label>
        </div>
        <input
          id="checkIn"
          type="date"
          className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
        />
      </div>

      <div>
        <div className="flex items-center gap-2">
          <img src={assets.calenderIcon} alt="calendar icon" className="h-4" />
          <label htmlFor="checkOut">Check out</label>
        </div>
        <input
          id="checkOut"
          type="date"
          className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
        />
      </div>

      <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
        <label htmlFor="guests">Guests</label>
        <input
          min={1}
          max={4}
          id="guests"
          type="number"
          className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16"
          placeholder="0"
        />
      </div>

      <button className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1">
        <img src={assets.searchIcon} alt="search icon" className="h-7" />
        <span>Search</span>
      </button>
    </form>
  );
};

export default BookingForm;
