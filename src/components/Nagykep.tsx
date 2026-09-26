import type { Kep } from "../adatok";

interface NagyKepProps {
  kep: Kep;
  elozo: () => void;
  kovetkezo: () => void;
}

export default function Nagykep({ kep, elozo, kovetkezo }: NagyKepProps) {
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
