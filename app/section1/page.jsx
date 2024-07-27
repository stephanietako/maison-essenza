import React from "react";
import GoogleMap from "../components/GoogleMap/GoogleMap";

const section1 = () => {
  return (
    <>
      <div
        id="map_section"
        style={{
          display: "flex",
          /* flex-direction: column; */
          width: "100%",
          height: "100%",
          justifyContent: "center",
          border: "4px solid red",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "80%",
            height: "auto",
          }}
        >
          <GoogleMap />
        </div>
      </div>
    </>
  );
};

export default section1;
