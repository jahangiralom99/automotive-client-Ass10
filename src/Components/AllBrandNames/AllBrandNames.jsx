import { useNavigate } from "react-router-dom";

const AllBrandNames = () => {

  const navigate = useNavigate()

  const handleBMW = () => {
    navigate('/BMW')
  }

  const handleToyota = () => {
    navigate('/toyota')
  }

  const handleTesla = () => {
    navigate("/tesla")
  }

  const handleFord = () => {
    navigate("/ford")
  }

  const handleMercedes = () => {
    navigate("/mercedes") 
  }

  const handleLamborghini = () => {
    navigate("/lamborghini")
  }

  return (
    <div data-aos="zoom-in">
      <h1 className="text-4xl font-bold">All Brand Name</h1>
      <div className="">
        <div className="grid  md:grid-cols-2 items-center justify-items-center mt-12 gap-10">
          <div onClick={handleBMW} className="card  image-full border rounded-lg transform transition duration-500 hover:scale-110">
            <figure>
              <img
                className="w-[100%] "
                src="https://i.ibb.co/N98wVYv/bmwlogo.jpg"
                alt="bmw"
              />
            </figure>
            <div className="card-body">
              <div className="w-22 mx-auto mt-40">
                <h3 className="text-3xl font-bold">BMW</h3>
              </div>
            </div>
          </div>
          <div onClick={handleToyota} className="card  image-full border rounded-lg transform transition duration-500 hover:scale-110">
            <figure>
              <img
                className="w-[100%]"
                src="https://i.ibb.co/42GqG2V/toyota.jpg"
                alt="toyota"
              />
            </figure>
            <div className="card-body">
              <div className="w-22 mx-auto mt-40">
                <h3 className="text-3xl font-bold">Toyota</h3>
              </div>
            </div>
          </div>
          <div onClick={handleTesla} className="card  image-full border rounded-lg transform transition duration-500 hover:scale-110">
            <figure>
              <img
                className="w-[100%]"
                src="https://i.ibb.co/yYqSKs0/tesla.jpg"
                alt="tesla"
              />
            </figure>
            <div className="card-body">
              <div className="w-22 mx-auto mt-40">
                <h3 className="text-3xl font-bold">Tesla</h3>
              </div>
            </div>
          </div>
          <div onClick={handleFord} className="card  image-full border rounded-lg transform transition duration-500 hover:scale-110">
            <figure>
              <img
                className="w-[100%]"
                src="https://i.ibb.co/jTywgN5/Ford.jpg"
                alt="Ford"
              />
            </figure>
            <div className="card-body">
              <div className="w-22 mx-auto mt-40">
                <h3 className="text-3xl font-bold">Ford</h3>
              </div>
            </div>
          </div>
          <div onClick={handleMercedes} className="card  image-full border rounded-lg transform transition duration-500 hover:scale-110">
            <figure>
              <img
                className="w-[100%]"
                src="https://i.ibb.co/wwgpQ4w/mercedes.jpg"
                alt="mercedes"
              />
            </figure>
            <div className="card-body">
              <div className="w-22 mx-auto mt-40">
                <h3 className="text-3xl font-bold">Mercedes-Benz</h3>
              </div>
            </div>
          </div>
          <div onClick={handleLamborghini} className="card  image-full border rounded-lg transform transition duration-500 hover:scale-110">
            <figure>
              <img
                className="w-[100%]"
                src="https://i.ibb.co/YWFj9BQ/shreesha-bhat-t-UP0h-RN2-Aoo-unsplash.jpg"
                alt="Lamborghini"
              />
            </figure>
            <div className="card-body">
              <div className="w-22 mx-auto mt-40">
                <h3 className="text-3xl font-bold">Lamborghini</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBrandNames;
