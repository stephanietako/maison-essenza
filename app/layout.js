import { Courier_Prime, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
export const dynamic = "force-dynamic";

const courier_prime_init = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--courier-prime",
});
const cormorant_garamond = Cormorant_Garamond({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--cormorant_garamond",
});

export const metadata = {
  title: "Maison Essenza ",
  description: "Show Room Boutique Maison Essenza Saint-Tropez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${courier_prime_init.variable} ${cormorant_garamond.variable}`}
      >
        {" "}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
