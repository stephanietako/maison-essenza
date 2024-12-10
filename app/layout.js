import { Courier_Prime, Nixie_One } from "next/font/google";
import "./globals.css";

export const dynamic = "force-dynamic";

const courier_prime_init = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--courier_prime",
});

const nixie_one_init = Nixie_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--nixie_one",
});

export const metadata = {
  title: "Maison Essenza",
  description:
    "Showroom Boutique Maison Essenza Saint-Tropez. Transformez votre espace de vie avec nos matériaux et aménagements exceptionnels.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={` ${nixie_one_init.variable} ${courier_prime_init.variable} `} // Appliquez les variables CSS
      >
        {children}
      </body>
    </html>
  );
}
