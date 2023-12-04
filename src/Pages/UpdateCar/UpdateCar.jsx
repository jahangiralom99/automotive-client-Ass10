// import { toast } from "react-toastify";

import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCar = () => {
  const navigate = useNavigate();
  const car = useLoaderData();

  const { name, brandName, price, description, rating, type, photo, _id } =
    car || {};

  // console.log(car);

  const handleUpdateBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const type = form.type.value;
    const photo = form.photo.value;

    const allCarsInfo = {
      name,
      brandName,
      price,
      description,
      rating,
      type,
      photo,
    };
    fetch(`https://automotive-server-asss-m10.vercel.app/cars/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allCarsInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success!",
            text: "coffee Update successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
  };

  const handleGoBAck = () => {
    navigate(-1);
  };

  return (
    <div className="mt-12">
      <div className="bg-[#F4F3F0] p-4">
        <h1 className="text-4xl font-bold text-center">Update Car</h1>
        <form onSubmit={handleUpdateBtn}>
          <div className="mt-12">
            {/* 1st row */}
            <div className="md:flex gap-8">
              <label className="form-control md:w-1/2 ">
                <div className="label">
                  <span className="label-text font-bold">Name {name}</span>
                </div>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  defaultValue={name}
                  className="input input-bordered  w-full "
                />
              </label>
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text font-bold">Brand Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Brand Name"
                  name="brandName"
                  defaultValue={brandName}
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            {/* 2nd row */}
            <div className="md:flex gap-8">
              <label className="form-control md:w-1/2 ">
                <div className="label">
                  <span className="label-text font-bold">Price</span>
                </div>
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  defaultValue={price}
                  className="input input-bordered  w-full "
                />
              </label>
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text font-bold">
                    Short description
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="description"
                  name="description"
                  defaultValue={description}
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            {/* 3rd row */}
            <div className="md:flex gap-8">
              <label className="form-control md:w-1/2 ">
                <div className="label">
                  <span className="label-text font-bold">Rating</span>
                </div>
                <input
                  type="text"
                  placeholder="Rating"
                  name="rating"
                  defaultValue={rating}
                  className="input input-bordered  w-full "
                />
              </label>
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text font-bold">Type</span>
                </div>
                <input
                  type="text"
                  name="type"
                  placeholder="Type"
                  defaultValue={type}
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div className="mb-6">
              <label className="form-control md:w-full ">
                <div className="label">
                  <span className="label-text font-bold">Photo URL</span>
                </div>
                <input
                  type="text"
                  placeholder="photo URL"
                  name="photo"
                  defaultValue={photo}
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update Now"
            className="font-bold text-red-500 btn btn-outline w-full"
          />
        </form>
        <button
          onClick={handleGoBAck}
          className="mt-6 font-bold text-red-500 btn btn-outline w-full"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UpdateCar;
