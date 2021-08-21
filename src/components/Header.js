import React from "react";
import barcode from "../img/barcode.png";
import AlvinLogo from "../img/AlvinLogo.png";

const Header = () => {
  return (
    <div className="white">
      <div className="row border border-danger border-5 border-bottom-0 border-end-0">
        <div className="col-3 p-2 ps-4">
          <p className="m-0 p-0">D-34, Harijan Basti, Masdoorpur, </p>
          <p className="m-0 p-0">Vasant Kunj, New Delhi - 110070</p>
          <h6 className="m-0 p-0 fw-bolder">Mob: 9311557134</h6>
          <p className="m-0 p-0">E-mail: alvinlimited30@gmail.com</p>
        </div>
        <div className="col-6">
          {/* <img
            src={AlvinLogo}
            alt=""
            className="img-fluid mt-3 shadow p-3 bg-light"
          /> */}
          <h1
            className="text-center display-1 fw-bolder mt-3 "
            style={{ textShadow: "2px 2px 10px 6px rgba(0, 0, 0, 0.4)" }}
          >
            <span className="text-danger" style={{ fontWeight: "900" }}>
              <em>ALVIN</em>
            </span>
            <span className="text-success" style={{ fontWeight: "300" }}>
              MART
            </span>
          </h1>
        </div>
        <div className="row col-3 ">
          <div className="col-6">
            <h6 className="m-0 p-0 mt-4 fw-bolder">Scan to Order</h6>
            <p className="m-0 p-0">Free Home Delivery</p>
            <p className="m-0 p-0">Vasant Kunj Only</p>
          </div>
          <div className="col-6">
            <img src={barcode} alt="barcode" height="120" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
