import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyCart = () => {
  const carts = useLoaderData();
  const [loadData, setLoadData] = useState(carts);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://automotive-server-asss-m10.vercel.app/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remainingUsers = loadData.filter((load) => load._id !== id);
              setLoadData(remainingUsers);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold mt-8">
        Your Cart {loadData.length}
      </h1>
      <div className="mt-8 flex flex-wrap gap-10 items-center justify-center">
        {loadData.map((cart, idx) => (
          <div key={idx}>
            <div data-aos="slide-up" className="card bg-base-100 shadow-lg">
              <figure>
                <img className="w-96 h-52" src={cart?.car.photo} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{cart?.car.name}</h2>
                <p>Price : {cart?.car.price}$</p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/details/${cart?.car._id}`}
                    className="btn btn-outline btn-error"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => handleDelete(cart?._id)}
                    className="btn btn-outline btn-error"
                  >
                    Delete cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
