import React, { useEffect, useState } from "react";
import Image from "next/image";
const InstagramFeed = () => {
  const [posts, setPosts] = useState([]); // État pour stocker les posts
  const [error, setError] = useState(null); // État pour gérer les erreurs
  const [loading, setLoading] = useState(true); // État pour le chargement

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN; // Clé d'accès

      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${accessToken}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data from Instagram");
        }

        const data = await response.json();
        setPosts(data.data || []); // Mettre à jour l'état des posts
      } catch (error) {
        setError(error.message); // Mettre à jour l'état d'erreur
      } finally {
        setLoading(false); // Fin du chargement
      }
    };

    fetchInstagramFeed(); // Appel de la fonction pour récupérer les données
  }, []); // Le tableau de dépendances vide garantit que useEffect s'exécute une fois

  if (loading) {
    return <p>Loading...</p>; // Message de chargement
  }

  if (error) {
    return <p>Error: {error}</p>; // Afficher l'erreur si elle existe
  }

  if (!posts.length) {
    return <p>No posts available.</p>; // Message si pas de données
  }

  return (
    <div
      id="instagram-feed"
      style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
    >
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {post.media_type === "IMAGE" && (
            <Image
              width={200}
              height={200}
              src={post.media_url}
              alt={post.caption || "Instagram post"}
              style={{
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          )}
        </a>
      ))}
    </div>
  );
};

export default InstagramFeed;
