import React, { useState } from "react";
import "./screens.css";
export default function Cards(props) {
  const [details, setdetails] = useState("details");
  const [height, setheight] = useState("normal");
  const [condition, setcondition] = useState(" View Details");
  const Handle = () => {
    if (condition === "View Details") {
      setheight("extended");
      setdetails("change");
      setcondition("Hide Details");
    } else {
      setcondition("View Details");
      setheight("normal");
      setdetails("details");
    }
  };
  return (
    <>
      <div className={height}>
        <div className="card my-4 mx-4 ">
          <div className="card-body mt-5 d-flex flex-row">
            <div className=" content ">
              <p>{props.name}</p>
            </div>

            <div className=" content  ">
              <h6 className="fw-bold">CONTACT</h6>
              <p>{props.username}</p>
            </div>

            <div className=" content ">
              <h6 className="fw-bold">CITY</h6>
              <p>{props.city}</p>
            </div>

            <div className=" content ">
              <h6 className="fw-bold">STATE</h6>
              <p>U.K</p>
            </div>
            <div className=" content ">
              <button className="btn px-2 py-2 " onClick={Handle}>
                {condition}
              </button>
            </div>
          </div>
          <div className={details}>
            <div className={height}>
              <div className="card my-4 mx-4 "></div>
              <div className="card-body userdetails">
                <div className="mx-5">
                  <h6 className="fw-bold">Description</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="d-flex felx-row">
                  <ul className="mx-2" style={{ listStyle: "none" }}>
                    <li className="mt-2 mb-2">
                      <h6 className="fw-bold">Contact Person</h6>
                      <p>{props.name}</p>
                    </li>
                    <li className="mt-2 mb-2">
                      <h6 className="fw-bold">Designation</h6>
                      <p>Prosprietor</p>
                    </li>
                    <li className="mt-2 mb-2">
                      <h6 className="fw-bold">Emails</h6>
                      <p>{props.email}</p>
                    </li>
                    <li className="mt-2 mb-2">
                      <h6 className="fw-bold">Phones</h6>
                      <p>{props.phone}</p>
                    </li>
                  </ul>
                  <ul className="mx-5" style={{ listStyle: "none" }}>
                    <li className="mt-2 mb-2">
                      <h6 className="fw-bold">Address</h6>
                      <p>
                        {props.street} &nbsp; {props.suite} &nbsp; {props.city}{" "}
                        &nbsp; {props.zipcode}
                      </p>
                    </li>
                    <li className="mt-2 mb-2">
                      <h6 className="fw-bold">City</h6>
                      <p>{props.city}</p>
                    </li>
                    <li className="mt-2 mb-2">
                      <h6 className="fw-bold">State</h6>
                      <p>{props.suite}</p>
                    </li>
                    <li className="mt-2 mb-2">
                      <h6 className="fw-bold">Country</h6>
                      <p>U.K</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
