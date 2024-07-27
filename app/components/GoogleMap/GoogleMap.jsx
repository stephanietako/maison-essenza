// ///////////////debut code final
// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { Loader } from "@googlemaps/js-api-loader";
// import styles from "./styles.module.scss";

// const GoogleMap = () => {
//   const mapRef = useRef(null);
//   const [map, setMap] = useState(null);
//   const [userMarker, setUserMarker] = useState(null);

//   const defaultCenter = {
//     lat: 43.249974209110206,
//     lng: 6.534624448644513,
//   };

//   useEffect(() => {
//     const initializeMap = async () => {
//       const loader = new Loader({
//         apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//         version: "weekly",
//       });

//       const { Map } = await loader.importLibrary("maps");
//       const { AdvancedMarkerElement } = await loader.importLibrary("marker");

//       // Initialize the map
//       const googleMap = new Map(mapRef.current, {
//         center: defaultCenter,
//         zoom: 10,
//         mapId: "YOUR_MAP_ID", // Replace with your actual map ID
//       });

//       // Add default marker for "B&B Italia"
//       new google.maps.marker.AdvancedMarkerElement({
//         position: defaultCenter,
//         map: googleMap,
//         // title: "Maison Essenza",
//         title: property.description,
//       });

//       setMap(googleMap);
//     };

//     initializeMap();
//   }, []);

//   const centerMyLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const userLocation = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };

//           if (userMarker) {
//             userMarker.setPosition(userLocation);
//           } else if (map) {
//             // Create a custom marker for user location
//             const userLocationMarker =
//               new google.maps.marker.AdvancedMarkerElement({
//                 map: map,
//                 position: userLocation,
//                 content: buildUserMarkerContent(),
//                 title: "HELLO WORLD",
//               });

//             setUserMarker(userLocationMarker);
//           }

//           map.setCenter(userLocation);
//         },
//         (error) => {
//           console.error(
//             "Erreur lors de la récupération de la position de l'utilisateur :",
//             error
//           );
//         }
//       );
//     }
//   };

//   // Function to build custom content for user location marker
//   const buildUserMarkerContent = () => {
//     const content = document.createElement("div");
//     content.style.display = "flex";
//     content.style.alignItems = "center";
//     content.style.justifyContent = "center";
//     content.style.width = "30px";
//     content.style.height = "30px";
//     content.style.backgroundColor = "blue";
//     content.style.borderRadius = "50%";
//     content.style.border = "2px solid #ffffff";
// ///////////
//     const icon = document.createElement("div");
//     icon.style.width = "20px";
//     icon.style.height = "20px";
//     icon.style.backgroundImage =
//       "url('https://maps.google.com/mapfiles/ms/icons/blue-dot.png')";
//     icon.style.backgroundSize = "cover";
//     icon.style.cursor = "pointer";
//     content.appendChild(icon);
// /////////////////

//     return content;
//   };

//   return (
//     <div className={styles.map}>
//       <div
//         className={styles.map__container}
//         ref={mapRef}
//         // style={{ height: "400px", width: "100%", border: "4px solid red" }}
//       />
//       <div className={styles.__btn_box}>
//         <button className={styles.__btnPosition} onClick={centerMyLocation}>
//           ME LOCALISER
//         </button>

//         <a
//           href="https://www.google.fr/maps/dir//B%26B+Italia,+20+Av.+Foch,+83990+Saint-Tropez/@43.2691807,6.6441104,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12cec73e4c7ba6b1:0x8d59750a547f25c!2m2!1d6.6441337!2d43.2692179"
//           target="_blank"
//           rel="noreferrer noopener"
//         >
//           <button className={styles.__btn_googlemap}>
//             OUVRIR DANS GOOGLE MAP
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default GoogleMap;
///////////////debut code final
// ///////////////debut code final
"use client";

import React, { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import styles from "./styles.module.scss";

const properties = [
  {
    title: "Maison Essenza",
    description: "Single family house with modern design",
    position: {
      lat: 43.26997027608313,
      lng: 6.644160284509654,
    },
  },
];

const GoogleMap = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [userMarker, setUserMarker] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);

  const defaultCenter = {
    lat: 43.249974209110206,
    lng: 6.534624448644513,
  };

  useEffect(() => {
    const initializeMap = async () => {
      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
          version: "weekly",
        });

        const { Map } = await loader.importLibrary("maps");
        const { Marker } = await loader.importLibrary("marker");

        console.log("Initializing map with center:", defaultCenter);

        // Initialize the map
        const googleMap = new Map(mapRef.current, {
          center: defaultCenter,
          zoom: 10,
          mapId: "YOUR_MAP_ID", // Replace or remove if not using custom styling
        });

        console.log("Map initialized successfully");

        // Initialize InfoWindow
        const infoWindow = new google.maps.InfoWindow();
        setInfoWindow(infoWindow);

        // Add markers for each property
        properties.forEach((property) => {
          console.log("Creating marker for property:", property);
          const marker = new Marker({
            map: googleMap,
            position: property.position,
            title: property.title,
          });

          marker.addListener("click", () => {
            console.log("Marker clicked:", property);
            infoWindow.setContent(`
              <div>
                <h3>${property.title}</h3>
                <p>${property.description}</p>
              </div>
            `);
            infoWindow.open({
              anchor: marker,
              map: googleMap,
              shouldFocus: false,
            });
          });
        });

        setMap(googleMap);
      } catch (error) {
        console.error("Error initializing map:", error);
      }
    };

    initializeMap();
  }, []);

  const centerMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          if (userMarker) {
            userMarker.setPosition(userLocation);
          } else if (map) {
            // Create a default marker for user location
            const userLocationMarker = new google.maps.Marker({
              map: map,
              position: userLocation,
              title: "Vous êtes ici",
            });

            // Add listener to userMarker for infoWindow
            userLocationMarker.addListener("click", () => {
              if (infoWindow) {
                infoWindow.setContent(`
                  <div>
                    <h3>Vous êtes ici</h3>
                    <p>Votre position actuelle.</p>
                  </div>
                `);
                infoWindow.open({
                  anchor: userLocationMarker,
                  map,
                  shouldFocus: false,
                });
              }
            });

            setUserMarker(userLocationMarker);
          }

          map.setCenter(userLocation);

          // Open an info window on user location marker immediately after positioning
          if (infoWindow) {
            infoWindow.setContent(`
              <div>
                <h3>Vous êtes ici</h3>
                <p>Votre position actuelle.</p>
              </div>
            `);
            infoWindow.open({
              anchor: userMarker,
              map,
              shouldFocus: false,
            });
          }
        },
        (error) => {
          console.error(
            "Erreur lors de la récupération de la position de l'utilisateur :",
            error
          );
        }
      );
    } else {
      console.error(
        "La géolocalisation n'est pas prise en charge par ce navigateur."
      );
    }
  };

  return (
    <div className={styles.map}>
      <div className={styles.map__container} ref={mapRef} />
      <div className={styles.__btn_box}>
        <button className={styles.__btnPosition} onClick={centerMyLocation}>
          ME LOCALISER
        </button>

        <a
          href="https://www.google.fr/maps/dir//B%26B+Italia,+20+Av.+Foch,+83990+Saint-Tropez/@43.2691807,6.6441104,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12cec73e4c7ba6b1:0x8d59750a547f25c!2m2!1d6.6441337!2d43.2692179"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button className={styles.__btn_googlemap}>
            OUVRIR DANS GOOGLE MAP
          </button>
        </a>
      </div>
    </div>
  );
};

export default GoogleMap;
