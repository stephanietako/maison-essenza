"use client";

import React, { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import styles from "./styles.module.scss";
// Importez l'image
import icon from "@/public/assets/essenza-icon.jpeg";

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

const Map = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [userMarker, setUserMarker] = useState(null);
  const [infoWindow, setInfoWindow] = useState(null);

  const toggleHighlight = (marker) => {
    if (marker.content.classList.contains(styles.highlight)) {
      marker.content.classList.remove(styles.highlight);
      marker.zIndex = null;
    } else {
      marker.content.classList.add(styles.highlight);
      marker.zIndex = 1;
    }
  };

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: "weekly",
        libraries: ["places"],
      });

      const { Map } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement } = await google.maps.importLibrary(
        "marker"
      );

      const position = {
        lat: 43.251496859869185,
        lng: 6.532052481579163,
      };

      const mapOptions = {
        center: position,
        zoom: 10,
        mapId: "MY_NEXTJS_APID",
      };
      // setup the map
      const map = new Map(mapRef.current, mapOptions);
      setMap(map);

      // Initialisation de la fenêtre d'information
      const infoWindow = new google.maps.InfoWindow();
      setInfoWindow(infoWindow);

      const buildContent = (property) => {
        const content = document.createElement("div");
        content.classList.add(styles.property); // Utilisation de styles.module.scss

        content.innerHTML = `
          <div>
            <div className="${styles.icon}" dangerouslySetInnerHTML={{ __html: property.icon }} />
            <img src="${icon.src}" alt=" Maison essenza marqueur sur la carte" />
          </div>
          <div class="${styles.details}">
            <span class="${styles.title}" title="${property.title}">${property.title}</span>
            <span>${property.description}</span>
          </div>
        `;
        return content;
      };

      // Ajout des markers pour chaque propriété
      properties.forEach((property) => {
        const content = buildContent(property);

        const marker = new google.maps.marker.AdvancedMarkerElement({
          content: content,
          map: map,
          position: property.position,
          title: property.title,
        });
        marker.addListener("click", () => {
          toggleHighlight(marker);
          infoWindow.setContent(`
            <div>
              <h3>${property.title}</h3>
              <p>${property.description}</p>
            </div>
          `);
        });
      });
      setMap(map);
    };

    initMap();
  }, []);

  const centerMyLocation = () => {
    // A marker with a with a URL pointing to a PNG.
    const user = document.createElement("img");
    user.src =
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    if (navigator.geolocation && map) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          if (userMarker) {
            userMarker.map = map;
            userMarker.position = userLocation;
          } else {
            const userLocationMarker =
              new google.maps.marker.AdvancedMarkerElement({
                map: map,
                position: userLocation,
                content: user,
                title: "Vous êtes ici",
              });

            setUserMarker(userLocationMarker);

            userLocationMarker.addListener("click", () => {
              if (infoWindow) {
                infoWindow.setContent(`
                  <div class="${styles["custom_info_window"]}">
                  <h3>Vous êtes ici</h3>
                </div>
              
                `);
                infoWindow.open(map, userLocationMarker);
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
    <div className={styles.googlemap}>
      <div className={styles.map}>
        <div className={styles.map__container} ref={mapRef} />
        <div className={styles.__btn_box}>
          <button className={styles.__btnPosition} onClick={centerMyLocation}>
            <p>Me localiser sur la carte</p>
          </button>
          <a
            href="https://www.google.fr/maps/place/33+Rue+Marceau,+83310+Cogolin/@43.2492463,6.4909396,13z/data=!4m19!1m12!4m11!1m3!2m2!1d6.5414939!2d43.2494963!1m6!1m2!1s0x12cec91ccd5111f7:0xc657b40441a90cad!2s33+Rue+Marceau,+Cogolin!2m2!1d6.5322249!2d43.2492537!3m5!1s0x12cec91ccd5111f7:0xc657b40441a90cad!8m2!3d43.2492537!4d6.5322249!16s%2Fg%2F11bw4jc0hd?entry=ttu"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button className={styles.__btn_googlemap}>
              <p>Ouvrir un lien vers Google Map</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Map;
