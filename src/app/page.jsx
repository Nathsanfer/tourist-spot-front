import styles from "./page.module.css";

import Image from "next/image";

import Header from "../components/header/page.jsx";
import Hero from "../components/hero/page.jsx";

export default function Home() {
  return (
    <div>

      <Header />

      <Hero />

    </div>
  );
}
