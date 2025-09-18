import styles from "./page.module.css";

import Image from "next/image";

import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";

export default function Home() {
  return (
    <div>

      <Header />

      <Hero />

    </div>
  );
}
