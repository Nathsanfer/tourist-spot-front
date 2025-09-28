"use client";

import { useParams } from "next/navigation";
import Header from "../../../../components/Header/Header.jsx";
import TouristSpotDetail from "../../../../components/TouristSpotDetail/TouristSpotDetail.jsx";

export default function DetalhesPontoTuristico() {
  const params = useParams();

  return (
    <div>
      <Header />
      <TouristSpotDetail spotId={params.id} />
    </div>
  );
}
