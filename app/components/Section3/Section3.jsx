import InstagramFeed from "../InstagramFeed/InstagramFeed";

export default function Home({ posts }) {
  return (
    <div>
      <main>
        <h1>Instagram Feed</h1>
        <InstagramFeed posts={posts} />
      </main>
    </div>
  );
}

// Utilisation de getServerSideProps pour la récupération des données côté serveur
export async function getServerSideProps() {
  const accessToken = process.env.INSTAGRAM_KEY; // Utiliser la clé API de l'environnement
  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${accessToken}`
  );

  if (!response.ok) {
    console.error("Failed to fetch data from Instagram");
    return { props: { posts: [] } };
  }

  const data = await response.json();

  return {
    props: {
      posts: data.data || [],
    },
  };
}
