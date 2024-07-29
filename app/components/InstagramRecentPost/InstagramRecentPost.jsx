// // components/InstagramRecentPost.jsx
// "use client";
// export const dynamic = "force-dynamic";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// const InstagramRecentPost = () => {
//   const [post, setPost] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         const response = await fetch("/api/instagram");

//         if (!response.ok) {
//           throw new Error("Failed to fetch Instagram posts");
//         }

//         const data = await response.json();
//         setPost(data.posts[0]); // Récupérer le post le plus récent
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchPost();
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!post) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Instagram Recent Post</h1>
//       {post.media_type === "IMAGE" && (
//         <a href={post.permalink} target="_blank" rel="noopener noreferrer">
//           <Image
//             width={500}
//             height={500}
//             src={post.media_url}
//             alt={post.caption}
//             style={{ objectFit: "contain" }}
//           />
//         </a>
//       )}
//       {post.media_type === "VIDEO" && (
//         <a href={post.permalink} target="_blank" rel="noopener noreferrer">
//           <video
//             width={500}
//             height={500}
//             controls
//             style={{ objectFit: "contain" }}
//           >
//             <source src={post.media_url} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </a>
//       )}
//       <p>{post.caption}</p>
//     </div>
//   );
// };

// export default InstagramRecentPost;
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const InstagramRecentPost = () => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch("/api/instagram", {
          method: "GET",
          // headers: {
          //   "Cache-Control": "no-cache", // Empêche le cache du navigateur
          // },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch Instagram posts");
        }

        const data = await response.json();
        console.log("Fetched post data:", data); // Log the data to ensure it's correct
        setPost(data); // Utiliser la réponse directe de l'API
      } catch (error) {
        console.error("Error fetching Instagram post:", error);
        setError(error.message);
      }
    };

    fetchPost();

    // Mettre à jour toutes les 30 minutes
    const intervalId = setInterval(fetchPost, 1800000); // 30 minutes

    return () => clearInterval(intervalId); // Nettoyer l'intervalle lorsque le composant est démonté
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="instagram_recent_post_media"
      style={{
        display: "flex",
        width: "auto",
        height: "auto",
        //border: "2px solid pink",
        alignItems: "center",
        flexDirection: "column",
        padding: "1rem",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          display: "block",
          marginBottom: "1rem",
        }}
      >
        Notre dernière publication instagram
      </h2>
      <a href={post.permalink} target="_blank" rel="noopener noreferrer">
        {post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM" ? (
          <Image
            width={500}
            height={500}
            src={post.media_url}
            alt={post.caption}
            style={{ objectFit: "contain" }}
          />
        ) : post.media_type === "VIDEO" ? (
          <video width={500} height={500} controls>
            <source src={post.media_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : null}
      </a>
      <span
        className="instagram_recent_post_media__caption"
        style={{
          color: "gray",
          textAlign: "center",
        }}
      >
        {" "}
        <p
          style={{
            fontSize: "18px",
            padding: "3rem",
          }}
        >
          {post.caption}
        </p>
      </span>
    </div>
  );
};

export default InstagramRecentPost;
