// pages/api/auth/callback.js

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { code } = req.query;

    try {
      const response = await fetch(
        "https://api.instagram.com/oauth/access_token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            client_id: process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID,
            // client_secret: process.env.INSTAGRAM_CLIENT_SECRET,
            grant_type: "authorization_code",
            redirect_uri:
              "https://maison-essenza-website.vercel.app/auth/callback",
            code: code,
          }),
        }
      );

      if (!response.ok) {
        console.error("Failed to fetch access token");
        return res.status(400).json({ error: "Failed to fetch access token" });
      }

      const data = await response.json();
      // Sauvegarder le token d'accès et d'autres informations utiles
      // Vous pouvez l'enregistrer dans une base de données ou le stocker dans un cookie sécurisé

      res.status(200).json({ access_token: data.access_token });
    } catch (error) {
      console.error("Server error", error);
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
