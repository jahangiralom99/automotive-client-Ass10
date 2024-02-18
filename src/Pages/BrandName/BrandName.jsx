import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BrandName = ({ brand }) => {
  return (
    <div>
      <Link
        to={`/brand/${brand.brandName}`}
        className="flex justify-center items-center group"
      >
        <div className="border-[1px] p-8 rounded-lg ">
          <img
            src={brand.image}
            alt="car"
            className="md:w-80  mx-auto rounded-lg mb-4 shadow-lg shadow-teal-50 hover:scale-110 transition duration-500"
          />
          <h2 className="text-xl font-semibold text-center text-white ">
            {brand.category}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default BrandName;
