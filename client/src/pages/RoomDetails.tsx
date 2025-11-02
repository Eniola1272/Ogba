import { useEffect, useState, type FC } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
import type { FacilityKey, IRoomData } from "../types";
import StarRating from "../components/StarRating";

const RoomDetails: FC = () => {
  const { id } = useParams();
  const [room, setRoom] = useState<IRoomData | null>(null);
  const [mainImg, setmMainImg] = useState<string | null>(null);

  useEffect(() => {
    const roomDetailsData = roomsDummyData.find((room) => room._id === id);
    roomDetailsData && setRoom(roomDetailsData);
    roomDetailsData && setmMainImg(roomDetailsData?.images[0]);
  }, []);

  return (
    room &&
    mainImg && (
      <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Room Details */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-playfair">
            {room.hotel.name}{" "}
            <span className="font-inter text-sm">{`(${room.roomType})`}</span>
          </h1>
          <p className="bg-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-inter">
            20% OFF
          </p>
        </div>

        {/* Room Rating */}
        <div className="flex items-center gap-1 mt-2">
          <StarRating rating={4} />
          <p className="ml-2">200+ reviews</p>
        </div>

        {/* Room Address */}
        <div className="flex items-center gap-1 mb-7 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="location-icon" />
          <span className="text-sm">{room.hotel.address}</span>
        </div>

        {/* Room Images */}
        <div className="flex flex-col md:flex-row mt-6 gap-6">
          <div className="lg:w-1/2 w-full">
            <img
              src={mainImg}
              alt="main-img"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
            {room.images.length > 1 &&
              room.images.map((img, index) => (
                <img
                  onClick={() => setmMainImg(img)}
                  src={img}
                  key={index}
                  alt="img"
                  className={`rounded-xl shadow-md object-cover cursor-pointer transition-all duration-100 ${
                    mainImg === img && "outline-3 outline-orange-500"
                  }`}
                />
              ))}
          </div>
        </div>

        {/* Room Highlights */}

        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h1 className="font-playfair text-3xl md:text-4xl">
              Exprience luxury Like Never Before
            </h1>
            <div className="flex flex-wrap items-center mb-6 mt-3 gap-3">
              {room.amenities.map((item, index) => {
                const icon = facilityIcons[item as FacilityKey];
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg"
                  >
                    <img src={icon} alt="facility-icon" className="w-5 h-5" />
                    <p className="text-xs">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Room Price */}
          <p className="text-2xl font-medium">$ {room.pricePerNight} /night</p>
        </div>

        {/* CheckIn CheckOut Form */}
        <form className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl">
          <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500">
            <div className="flex flex-col">
              <label htmlFor="checkInDate" className="font-medium">
                Check-In
              </label>
              <input
                type="date"
                id="checkInDate"
                placeholder="Cehck-In"
                className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>

            <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>

            <div className="flex flex-col">
              <label htmlFor="checkOutDate" className="font-medium">
                Check-Out
              </label>
              <input
                type="date"
                id="checkOutDate"
                placeholder="Cehck-Out"
                className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>

            <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>

            <div className="flex flex-col">
              <label htmlFor="geusts" className="font-medium">
                Guests
              </label>
              <input
                type="number"
                id="geusts"
                placeholder="0"
                className="max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-black hover:bg-black/95 active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:my-4 text-base cursor-pointer"
          >
            Check Availibility
          </button>
        </form>

        {/* Common Specifications */}

        <div className="mt-25 space-y-4">
          {roomCommonData.map((spec, index) => (
            <div key={index} className="flex items-start gap-2">
              <img
                src={spec.icon}
                alt={spec.title + "-icon"}
                className="w-6.5"
              />
              <div>
                <p className="text-base">{spec.title}</p>
                <p className="text-gray-500">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500">
          <p>
            Guests will be allocated on the ground floor according to
            availability. You get a comfortable Two bedroom apartment has a true
            city feeling. The price quoted is for two guest, at the guest slot
            please mark the number of guests to get the exact price for groups.
            The Guests will be allocated on the ground floor according to
            availability. You get a comfortable Two bedroom apartment has a true
            city feeling.
          </p>
        </div>

        {/* Hosted by */}

        <div className="flex flex-col items-start gap-4">
          <div className="flex gap-4">
            <img
              src={room.hotel.owner.image}
              alt="host"
              className="w-12 h-12 md:w-18 md:h-18 rounded-full"
            />
            <div>
              <p>Hosted by {room.hotel.owner.username}</p>
              <div className="flex gap-2">
                <StarRating rating={4} />
                <p>200+ reviews</p>
              </div>
            </div>
          </div>
          <button className="px-6 py-2.5 mt-4 rounded text-white bg-black hover:bg-black/90 transition-all cursor-pointer active:scale-95">
            Contact Now
          </button>
        </div>
      </div>
    )
  );
};

export default RoomDetails;
