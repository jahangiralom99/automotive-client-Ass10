import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DetailsCar = () => {
  const navigation = useNavigate();
  const car = useLoaderData();
  const [ds, setDs] = useState(true);

  const { name, brandName, price, description, rating, type, photo } =
    car || {};

  const handleGoBack = () => {
    navigation(-1);
  };

  const cart = { car };

  const addToCard = () => {
    fetch(`https://automotive-server-asss-m10.vercel.app/carts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setDs(false);
          toast("This Product added to Cart!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
    console.log(car);
  };

  return (
    <div className="">
      <div className="card bg-base-100 shadow-xl px-3">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{name}</h2>
          <p> {description}</p>
          <p>
            <span className="font-bold">Brand Name: </span>
            {brandName}
          </p>
          <p>
            <span className="font-bold">Type: </span>
            {type}
          </p>
          <p>
            <span className="font-bold">Price : </span> {price} $
          </p>
          <p>
            <span className="font-bold">Rating : </span>
            {rating}
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={addToCard}
              className={`${ds ? "" : "btn-disabled"}  btn btn-outline`}
            >
              Add to Cart
            </button>
            <button onClick={handleGoBack} className={`btn btn-outline`}>
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCar;
