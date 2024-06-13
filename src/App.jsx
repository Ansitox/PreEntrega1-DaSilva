import { NavBar } from "./components/NavBar/NavBar";
import { ItemList } from "./pages/ItemListContainer/ItemList";

function App() {
  return (
    <>
      <NavBar />
      <ItemList greeting="Bienvenido a Shay Greenhouse. Más que plantas, comunidad!" />
    </>
  );
}

export default App;
