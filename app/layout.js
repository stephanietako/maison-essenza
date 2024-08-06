import { Courier_Prime, Cormorant_Garamond, Nixie_One } from "next/font/google";
import "./globals.css";
//import { motion } from "framer-motion";
export const dynamic = "force-dynamic";

const courier_prime_init = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--courier-prime",
});
const cormorant_garamond_init = Cormorant_Garamond({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--cormorant_garamond",
});
const nixie_one_init = Nixie_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--nixie_one",
});
export const metadata = {
  title: "Maison Essenza ",
  description: "Show Room Boutique Maison Essenza Saint-Tropez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${courier_prime_init.variable} ${nixie_one_init.variable} ${courier_prime_init.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
