import { KEPLISTA } from "../adatok";
import { useKepContext } from "../contexts/KepContext";
import KisKep from "./Kiskep";

export default function Galeria() {
  const { kivalaszt } = useKepContext();

  return (
    <div className="galeria">
      {KEPLISTA.map((kep, index) => (
        <KisKep key={kep.id} kep={kep} kattintas={() => kivalaszt(index)} />
      ))}
    </div>
  );
}
