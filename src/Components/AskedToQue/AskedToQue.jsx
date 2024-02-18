import question from "../../assets/undraw_respond.svg";
const AskedToQue = () => {
  return (
    <div
      data-aos="slide-up"
      className="mt-12 md:flex gap-5 items-center justify-center "
    >
      <div className="join join-vertical w-full">
        <h1 className="text-4xl font-bold mb-4">Asked to Questions ?</h1>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked="checked" />
          <div className="collapse-title text-xl font-medium">
          <p>What are the benefits of regular brake system maintenance, and how often should brake fluid be replaced? </p>
          </div>
          <div className="collapse-content">
            <p>Regular brake maintenance ensures optimal performance and safety. Brake fluid should typically be replaced every 2 years or as per the manufacturer s recommendation to prevent brake system issues.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
         <p> How can drivers improve fuel efficiency, and what role does proper tire inflation play in this?</p>
          </div>
          <div className="collapse-content">
            <p>Maintaining proper tire pressure is crucial for fuel efficiency. Drivers can also improve gas mileage by practicing smooth driving habits, regular vehicle maintenance, and using the recommended fuel grade.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
          <p>What are the key features to consider when purchasing an electric vehicle (EV), and what advancements are we seeing in EV technology?</p>
          </div>
          <div className="collapse-content">
            <p>EV buyers should consider factors like range, charging infrastructure, and available incentives. Advancements in EV technology include faster charging, increased range, and innovations in battery technology.</p>
          </div>
        </div>
      </div>
      <div>
        <img src={question} alt="" />
      </div>
    </div>
  );
};

export default AskedToQue;
