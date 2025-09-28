"use client";

import { useParams } from "next/navigation";

// Importando os componentes necessários
import Header from "../../../../components/Header/Header.jsx";
import TouristSpotDetail from "../../../../components/TouristSpotDetail/TouristSpotDetail.jsx";
import Footer from "../../../../components/Footer/Footer.jsx";

export default function DetalhesPontoTuristico() {
  const params = useParams();

  return (
    <div>
      <Header />
      <TouristSpotDetail spotId={params.id} />
      <Footer />
    </div>
  );
}
