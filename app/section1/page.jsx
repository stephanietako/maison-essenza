import React from "react";
import GoogleMap from "../components/GoogleMap/GoogleMap";

const section1 = () => {
  return (
    <>
      <div
        id="map_section"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "auto",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5rem",
        }}
      >
        <span
          className="google_map_section__title"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "auto",
            justifyContent: "center",
            // border: "4px solid red",
            alignItems: "center",
          }}
        >
          {" "}
          <h1> MAISON ESSENZA</h1>
          <br />
          <h2>Retrouvez-nous</h2>
          <p>33 rue Marceau, 830310 Cogolin</p>
          <br />
        </span>

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
