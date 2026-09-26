import type { Kep } from "../adatok";

interface KisKepProps {
  kep: Kep;
  kattintas: () => void;
}

export default function Kiskep({ kep, kattintas }: KisKepProps) {
  return (
    <img className="kiskep" src={kep.src} alt={kep.cim} onClick={kattintas} />
  );
}
