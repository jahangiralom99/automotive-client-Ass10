const Banner = () => {
  return (
    <div data-aos="slide-up">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/3WsZpnV/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Chevrolet Camaro</h1>
                <p className="mb-5">
                  <span className="font-bold">6.2L LT1 V8 ENGINE</span> <br /> With Direct Injection, Variable Valve
                  Timing and, on the 8-speed automatic, Active Fuel
                  ManagementTM, it offers efficiency when you want it, power
                  when you need it.
                </p>
                <button className="btn btn-link btn-outline btn-active">More Info</button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/JBTsTg2/paul-kansonkho-f-Dv-Byj8ms3k-unsplash.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/3FvZWLt/john-matychuk-Fg-Tcok-Jpm9w-unsplash.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/47XYkMR/christian-wiediger-O84-b-Ye3id-Q-unsplash.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/qxH9wWh/alex-mares-HNIykm-IJDzg-unsplash.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
