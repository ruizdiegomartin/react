// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a React" /> //* La funcion estaba medio de mas! De esta manera podemos
      ahorrar lineas ;)
      <Footer />
    </>
  );
}
