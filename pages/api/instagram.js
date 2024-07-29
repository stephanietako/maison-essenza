// pages/api/instagram.js
export const dynamic = "force-dynamic";

export default async function handler(req, res) {
  const accessToken = process.env.INSTAGRAM_KEY;
  if (req.method === "GET") {
    try {
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${accessToken}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data from Instagram");
      }

      const data = await response.json();
      const recentPost = data.data[0];

      res.status(200).json(recentPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch data" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
