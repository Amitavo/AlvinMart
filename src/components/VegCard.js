import React from "react";
import img1 from "../img/banan.jpg";

const VegCard = ({
  title = "Name",
  img = img1,
  price = "60",
  unit = "per kg",
}) => {
  return (
    <div className="">
      <center className=" border card ">
        <h5 className="text-center mt-2 fw-bolder text-muted">{title}</h5>
        <img className="img-fluid" src={img} alt="Product Image" />
        <p className="bg-light p-0 m-0">
          <span>
            <input
              className="border-0 col-4 text-end fs-5 fw-bolder text-danger bg-light"
              type="text"
              // value={price}
            />
            <span className=" fs-4 fw-bolder text-danger bg-light">/-</span>
          </span>
          <span>
            <input
              className="border-0 col-6 text-end fs-6 fw-bolder bg-light pe-1"
              type="text"
              value={unit}
            />
          </span>
        </p>
      </center>
    </div>
  );
};

export default VegCard;
