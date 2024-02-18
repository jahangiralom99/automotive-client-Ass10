import { useEffect, useState } from "react";
import BrandName from "../BrandName/BrandName";

const AllBrand = () => {
  const [allBrand, setAllBrand] = useState([]);

  useEffect(() => {
    fetch("./AllBooks.json")
      .then((res) => res.json())
      .then((data) => setAllBrand(data));
  }, []);

  return (
    <section>
      <h1 className="text-center  mt-8 mb-8 text-4xl font-semibold border border-t-0 border-b-red-500">
        All Brand Name
      </h1>
      <div className="flex flex-wrap items-center justify-center  gap-5">
        {allBrand.map((brand) => (
          <BrandName key={brand.id} brand={brand}></BrandName>
        ))}
      </div>
    </section>
  );
};

export default AllBrand;
