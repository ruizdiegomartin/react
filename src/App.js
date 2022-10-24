// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

export default function App() {
  function greetingFunction (){
    let greeting = "Bienvenido a React"
    return greeting;
  }
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={greetingFunction()}/>
      <Footer/>
    </>
  );
};

