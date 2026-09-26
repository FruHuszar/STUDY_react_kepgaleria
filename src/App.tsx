import { useState } from "react";
import { KEPLISTA } from "./adatok";
import Galeria from "./components/Galeria";
import Nagykep from "./components/Nagykep";

export default function App() {
  const [aktualisIndex, setAktualisIndex] = useState(0); //Webes segítség alapján

  const elozo = () => {
    setAktualisIndex((i) => (i === 0 ? KEPLISTA.length - 1 : i - 1));
  };

  const kovetkezo = () => {
    setAktualisIndex((i) => (i === KEPLISTA.length - 1 ? 0 : i + 1)); //Webes segítség alapján
  };

  return (
    <>
      <header>
        <h1>Képgaléria</h1>
      </header>
      <main>
        <Nagykep
          kep={KEPLISTA[aktualisIndex]}
          elozo={elozo}
          kovetkezo={kovetkezo}
        />
        <Galeria kivalaszt={setAktualisIndex} />
      </main>
      <footer>Huszár Fruzsina Anna</footer>
    </>
  );
}
