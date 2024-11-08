"use client";

import React, { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import styles from "./styles.module.scss";

const properties = [
  {
    title: "Maison Essenza",
    description: "Show Room Boutique",
    position: {
      lat: 43.251496859869185,
      lng: 6.532052481579163,
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

  // Initialisation de la carte et des markers
  useEffect(() => {
    const initializeMap = async () => {
      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
          version: "weekly",
        });

        const { Map } = await loader.importLibrary("maps");
        const { Marker } = await loader.importLibrary("marker");

        // Initialisation de la carte
        const googleMap = new Map(mapRef.current, {
          center: defaultCenter,
          zoom: 10,
          mapId: "YOUR_MAP_ID",
        });

        // Initialisation de la fenêtre d'information
        const infoWindow = new google.maps.InfoWindow();
        setInfoWindow(infoWindow);

        // Ajout des markers pour chaque propriété
        properties.forEach((property) => {
          const marker = new google.maps.marker.AdvancedMarkerElement({
            map: googleMap,
            position: property.position,
            title: property.title,
          });

          marker.addListener("click", () => {
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
    /* eslint-disable-next-line */
  }, []);

  // Fonction appelée lors du clic sur le bouton "ME LOCALISER"
  const centerMyLocation = () => {
    if (navigator.geolocation && map) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          // Mettre à jour la position du userMarker
          if (userMarker) {
            userMarker.setPosition(userLocation);
          } else {
            const userLocationMarker =
              new google.maps.marker.AdvancedMarkerElement({
                map: map,
                position: userLocation,
                title: "Vous êtes ici",
              });

            setUserMarker(userLocationMarker);

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
          }

          map.setCenter(userLocation);
        },
        (error) => {
          console.error(
            "Erreur lors de la récupération de la position de l'utilisateur :",
            error
          );
        }
      );
    }
  };

  return (
    <div className={styles.map}>
      <div className={styles.map__container} ref={mapRef} />
      <div className={styles.__btn_box}>
        <button className={styles.__btnPosition} onClick={centerMyLocation}>
          {" "}
          <p>Me localiser sur la carte</p>
        </button>

        <a
          href="https://www.google.fr/maps/place/33+Rue+Marceau,+83310+Cogolin/@43.2492463,6.4909396,13z/data=!4m19!1m12!4m11!1m3!2m2!1d6.5414939!2d43.2494963!1m6!1m2!1s0x12cec91ccd5111f7:0xc657b40441a90cad!2s33+Rue+Marceau,+Cogolin!2m2!1d6.5322249!2d43.2492537!3m5!1s0x12cec91ccd5111f7:0xc657b40441a90cad!8m2!3d43.2492537!4d6.5322249!16s%2Fg%2F11bw4jc0hd?entry=ttu"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button className={styles.__btn_googlemap}>
            <p> Ouvrir un lien vers google Map</p>
          </button>
        </a>
      </div>
    </div>
  );
};

export default GoogleMap;
