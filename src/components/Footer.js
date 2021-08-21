import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border border-success border-5 border-start-0 border-end-0 p-2 text-center">
      <h2 className="fw-bolder text-danger ">
        FREE HOME DELIVERY IN VASANT KUNJ
      </h2>
      <h2 className="fw-bolder text-success ">
        BULK SUPPLY FOR FUNCTIONS & EVENTS
      </h2>
      <h2 className="fw-bolder text-danger ">
        <span className="text-success">
          <FaWhatsapp />
        </span>{" "}
        9311557134, 88001984314
      </h2>
    </div>
  );
};

export default Footer;
