import {
  Courier_Prime,
  Cormorant_Garamond,
  Nixie_One,
  Mulish,
} from "next/font/google";
import "./globals.css";

export const dynamic = "force-dynamic";

const courier_prime_init = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--courier_prime",
});
const mulish_init = Mulish({
  weight: ["200", "300", "400", "700", "800", "900", "1000"],
  subsets: ["latin"],
  variable: "--mulish",
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
        className={`${mulish_init.variable} ${nixie_one_init.variable} ${courier_prime_init.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
