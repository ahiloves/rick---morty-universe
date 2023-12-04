import axios from "axios";
import { useEffect, useState } from "react";
import { getRandomNumber } from "./helpers/random";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";

function App() {
  const [locationInfo, setLocationInfo] = useState(null);

  useEffect(() => {
    const randomDimension = getRandomNumber(126);
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomDimension}`)
      .then(({ data }) => setLocationInfo(data)) // Actualizar estado con los datos de la respuesta de la API
      .catch((err) => console.log(err));
  }, []);

  return (
    
    <main className="bg-cover bg-right  h-full " style={{ backgroundImage: "url('./public/fondo.jpg')" }}>
    <div className=" esfera-container">
      <img style={{ width: '500px', height: '500px' }} className="esferica-giratoria animate-pulse mx-auto" src="./public/circulo.svg" alt="Esfera Giratoria" />
      <img style={{ width: '600px', height: '100px' }} className="nombre-imagen absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " src="./public/nombre.svg" alt="Imagen Estática" />
    </div>
    <main> 
      <Location locationInfo={locationInfo} setLocationInfo={setLocationInfo} />
      <ResidentList residents={locationInfo?.residents ?? []} /></main>
     
    </main>
  );
}

export default App;