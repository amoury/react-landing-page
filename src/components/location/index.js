import React, { Fragment } from "react";

const Location = () => {
  return (
    <Fragment>
      <div className="location_wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.568981891951!2d55.279660415015925!3d25.217754037054547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4292f9132cbd%3A0x653a96f2ced0a490!2sJumeirah+Emirates+Towers+Hotel!5e0!3m2!1sen!2sae!4v1537342545653"
          width="100%"
          height="500"
          frameBorder="0"
          allowFullScreen
        />

        <div className="location_tag">
          <div>Location</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Location;
