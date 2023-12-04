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
          {/* 1 number */}
          <div onClick={handleBMW} className="card  image-full border rounded-lg transform transition duration-500 hover:scale-110">
            <figure>
              <img
                className="w-[100%] "
                src="https://i.postimg.cc/50JbmHKK/bmwlogo-500.webp"
                alt="bmw"
              />
            </figure>
            <div className="card-body">
              <div className="w-22 mx-auto mt-40">
                <h3 className="text-3xl font-bold">BMW</h3>
              </div>
            </div>
          </div>
          {/* 2 nd */}
          <div onClick={handleToyota} className="card  image-full border rounded-lg transform transition duration-500 hover:scale-110">
            <figure>
              <img
                className="w-[100%]"
                src="https://i.postimg.cc/kgVb0ZM3/toyota-500.webp"
                alt="toyota"
              />
            </figure>
            <div className="card-body">
              <div className="w-22 mx-auto mt-40">
                <h3 className="text-3xl font-bold">Toyota</h3>
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div onClick={handleTesla} className="card  image-full border rounded-lg transform transition duration-500 hover:scale-110">
            <figure>
              <img
                className="w-[100%]"
                src="https://i.postimg.cc/jj6PcF4H/tesla-500.webp"
                alt="tesla"
              />
            </figure>
            <div className="card-body">
              <div className="w-22 mx-auto mt-40">
                <h3 className="text-3xl font-bold">Tesla</h3>
              </div>
            </div>
          </div>
          {/* 4th */}
          <div onClick={handleFord} className="card  image-full border rounded-lg transform transition duration-500 hover:scale-110">
            <figure>
              <img
                className="w-[100%]"
                src="https://i.postimg.cc/26C3SXY5/Ford-450.webp"
                alt="Ford"
              />
            </figure>
            <div className="card-body">
              <div className="w-22 mx-auto mt-40">
                <h3 className="text-3xl font-bold">Ford</h3>
              </div>
            </div>
          </div>
          {/* 5th */}
          <div onClick={handleMercedes} className="card  image-full border rounded-lg transform transition duration-500 hover:scale-110">
            <figure>
              <img
                className="w-[100%]"
                src="https://i.postimg.cc/K8J0f4cc/mercedes-450.webp"
                alt="mercedes"
              />
            </figure>
            <div className="card-body">
              <div className="w-22 mx-auto mt-40">
                <h3 className="text-3xl font-bold">Mercedes-Benz</h3>
              </div>
            </div>
          </div>
          {/* 6th */}
          <div onClick={handleLamborghini} className="card  image-full border rounded-lg transform transition duration-500 hover:scale-110">
            <figure>
              <img
                className="w-[100%]"
                src="https://i.postimg.cc/ZRhvyxkW/lambor-500.webp"
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
