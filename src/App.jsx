import Header from "./components/Header";
import Footer from "./components/Footer";
import MyCard from "./components/MyCard";
import { PerritosAdopcion } from "./data";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        {PerritosAdopcion.map((perrito, index) => (
          <MyCard
            key={index}
            imageUrl={perrito.foto}
            name={perrito.nombre}
            description={perrito.descripcion}
            raza={perrito.raza}
            color_tag={perrito.color_tag}
          />
        ))}{" "}
      </div>
      <hr />
      <Footer />
    </>
  );
}

export default App;
