import { useKepContext } from "../contexts/KepContext";
import { KEPLISTA } from "../adatok";

export default function Nagykep() {
  const { aktualisIndex, elozo, kovetkezo } = useKepContext();
  const kep = KEPLISTA[aktualisIndex];

  return (
    <div className="nagy-kep">
      <button onClick={elozo}>←</button>
      <div>
        <img src={kep.src} alt={kep.cim} />
        <h2>{kep.cim}</h2>
      </div>
      <button onClick={kovetkezo}>→</button>
    </div>
  );
}
