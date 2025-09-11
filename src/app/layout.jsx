import { Amaranth, EB_Garamond } from "next/font/google";

import "./globals.css";

const amaranth = Amaranth({
  subsets: ["latin"],
  variable: "--font-amaranth",
  display: "swap",
  weight: ["400", "700"],
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-ebgaramond",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Blog de Pontos Turísticos",
  description:
    "Projeto de um blog de pontos turísticos, consumindo uma API externa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${amaranth.variable} ${ebGaramond.variable}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
