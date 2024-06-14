import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./pages/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Shay Greenhouse. Más que plantas, comunidad!" />
    </>
  );
}

export default App;
