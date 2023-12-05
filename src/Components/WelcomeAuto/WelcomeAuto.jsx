const WelcomeAuto = () => {
  return (
    <div data-aos="slide-up" className="mt-12">
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/bJLgnpZn/image-banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-[#FFF] bg-opacity-80 "></div>
        <div className="hero-content text-neutral-content ">
          <div className="md:flex gap-5 items-center justify-center">
                      <div className="text-black md:w-[50%] space-y-5">
                          <h1 className="text-4xl font-bold">WELCOME TO <br /> <span className="text-red-500">Auto-Motive</span></h1>
                          <p className="font-bold text-[#706F6F]">
                          Hello! It looks like you re interested in automotive topics. How can I assist you with automotive-related questions or information? Whether you re curious about car maintenance, the latest vehicle technologies, or any other automotive-related topic, feel free to ask!
                          </p>
                      </div>
                      <div className="md:w-[50%]">
                          <img className="" src="https://i.postimg.cc/V6vydYgS/toyota-corolla.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeAuto;
