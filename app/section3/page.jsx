// app/section3/InstaDisplay.jsx

"use client"; // Marquer ce composant comme client

import React from "react";
import Image from "next/image";

const InstaDisplay = ({ posts }) => {
  // Vérification des données reçues
  if (!posts || posts.length === 0) {
    return <p>Aucun post à afficher.</p>;
  }

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {posts.map((post) => (
        <div
          key={post.id}
          style={{ margin: "10px", width: "300px", textAlign: "center" }}
        >
          {post.media_type === "IMAGE" && (
            <Image
              src={post.media_url}
              width={500}
              height={500}
              alt={post.caption || "Instagram Post"}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              unoptimized
            />
          )}
          {post.media_type === "VIDEO" && (
            <video controls style={{ width: "100%", borderRadius: "8px" }}>
              <source src={post.media_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <p style={{ marginTop: "10px" }}>{post.caption}</p>
          <a
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#3897f0", textDecoration: "none" }}
          >
            View on Instagram
          </a>
        </div>
      ))}
    </div>
  );
};

export default InstaDisplay;
