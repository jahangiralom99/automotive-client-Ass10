const AboutUs = () => {
  return (
    <div>
      <div className="w-full h-96 bg-[#171b20]">
        <div className="">
          <h1 className="text-5xl font-bold flex items-center justify-center h-96 text-pink-200">
            About Us
          </h1>
        </div>
      </div>
      <div className="mx-auto -mt-24">
        <div data-aos="slide-up" className="text-center">
          <img
            className="w-[300px] md:w-[500px] inline tex"
            src="https://i.postimg.cc/q7TjRb7x/automotive-About.jpg"
            alt="automotive-About"
          />
        </div>
        <div
          data-aos="slide-up"
          className="w-[300px] md:w-[500px] mx-auto mt-6 space-y-6 "
        >
          <h1 className="text-2xl font-bold ">About Us</h1>
          <p className="font-bold ml-6">
            we are passionate about automobiles and dedicated to providing
            exceptional automotive solutions. Whether you re a car enthusiast, a
            seasoned driver, or someone in need of reliable automotive services,
            we ve got you covered
          </p>
          <h2 className="text-2xl font-bold">History</h2>
          <p className="font-bold ml-6">
            Although steam-powered road vehicles were produced earlier, the
            origins of the automotive industry are rooted in the development of
            the gasoline engine in the 1860s and ’70s, principally in France and
            Germany. By the beginning of the 20th century, German and French
            manufacturers had been joined by British, Italian, and American
            makers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
