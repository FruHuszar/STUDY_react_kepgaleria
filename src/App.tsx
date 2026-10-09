import Galeria from "./components/Galeria";
import Nagykep from "./components/Nagykep";

export default function App() {
  return (
    <>
      <header>
        <h1>Képgaléria</h1>
      </header>
      <main>
        <Nagykep />
        <Galeria />
      </main>
      <footer>Huszár Fruzsina Anna</footer>
    </>
  );
}
