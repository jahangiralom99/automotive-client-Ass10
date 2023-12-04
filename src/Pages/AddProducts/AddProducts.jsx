import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AddProducts = () => {
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

    fetch("https://automotive-server-asss-m10.vercel.app/cars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allCarsInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Car Brand information added success!!!", {
            position: "top-center",
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
    // console.log(allCarsInfo);
  };

  return (
    <div className="mt-12">
      <div className="bg-[#F4F3F0] p-4">
        <h1 className="text-4xl font-bold text-center">Add Car</h1>
        <form onSubmit={handleUpdateBtn}>
          <div className="mt-12">
            {/* 1st row */}
            <div className="md:flex gap-8">
              <label className="form-control md:w-1/2 ">
                <div className="label">
                  <span className="label-text font-bold">Name</span>
                </div>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered  w-full "
                />
              </label>
              <label className="form-control md:w-1/2">
                <div className="label">
                  <span className="label-text">Brand Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Brand Name"
                  name="brandName"
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
       <Link to="/" className="font-bold mt-3 text-red-500 btn btn-outline w-full">Go Home</Link>
      </div>
    </div>
  );
};

export default AddProducts;
