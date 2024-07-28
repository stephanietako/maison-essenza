// components/InstagramRecentPost.jsx
"use client";

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
//         setPost(data); // Assurez-vous que `data` contient le post récent
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
//       <a href={post.permalink} target="_blank" rel="noopener noreferrer">
//         <Image
//           width={500}
//           height={500}
//           src={post.media_url}
//           alt={post.caption}
//           style={{ objectFit: "contain" }}
//         />
//       </a>
//       <p>{post.caption}</p>
//     </div>
//   );
// };

// export default InstagramRecentPost;
// components/InstagramRecentPost.js

import { useState, useEffect } from "react";
import Image from "next/image";
const InstagramRecentPost = () => {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch("/api/instagram");

        if (!response.ok) {
          throw new Error("Failed to fetch Instagram posts");
        }

        const data = await response.json();
        setPost(data.posts[0]); // Récupérer le post le plus récent
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPost();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Instagram Recent Post</h1>
      {post.media_type === "IMAGE" && (
        <a href={post.permalink} target="_blank" rel="noopener noreferrer">
          <Image
            width={500}
            height={500}
            src={post.media_url}
            alt={post.caption}
            style={{ objectFit: "contain" }}
          />
        </a>
      )}
      {post.media_type === "VIDEO" && (
        <a href={post.permalink} target="_blank" rel="noopener noreferrer">
          <video
            width={500}
            height={500}
            controls
            style={{ objectFit: "contain" }}
          >
            <source src={post.media_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </a>
      )}
      <p>{post.caption}</p>
    </div>
  );
};

export default InstagramRecentPost;
