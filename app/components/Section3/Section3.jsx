import InstagramRecentPost from "../InstagramRecentPost/InstagramRecentPost";

export default function Home({ posts }) {
  return (
    <div>
      <main>
        <h1>Instagram Feed</h1>
        <InstagramRecentPost />
      </main>
    </div>
  );
}
