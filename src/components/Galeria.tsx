import { KEPLISTA } from "../adatok";
import KisKep from "./Kiskep";
interface GaleriaProps {
  kivalaszt: (index: number) => void;
}

export default function Galeria({ kivalaszt }: GaleriaProps) {
  return (
    <div className="galeria">
      {KEPLISTA.map((kep, index) => (
        <KisKep key={kep.id} kep={kep} kattintas={() => kivalaszt(index)} />
      ))}
    </div>
  );
}
