import axios from "axios";

const Location = ({ locationInfo, setLocationInfo }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const newLocationId = e.target.newLocation.value;
        axios
        .get(`https://rickandmortyapi.com/api/location/${newLocationId}`)
        .then(({ data }) => setLocationInfo(data))
        .catch((err) => console.log(err));
    };
  return (
    <section className="flex flex-col items-center justify-center max-w-[1000px] mx-auto w-full h-80 gap-2">
        <form onSubmit={handleSubmit} className = "bg-green-1000 p-0  shadow-md border border-green-700 mt-0 mb-3" >
            <div className="flex items-center justify-center space-x-0">
                <input 
                type="number" 
                name="newLocation"
                placeholder="   type a Location ID ... " 
                required
                className="p-2 max-w-full border  border-green-700 text-green-900 "
                />
                <button type="submit" className="bg-green-700 text-white p-2 ">search</button>
            </div>
        </form>
        <article className="mt-8 p-4 border border-green-500  bg-green-200 bg-opacity-0">
            <h2 className="text-xl font-bold text-green-600 mb-4 text-center">Welcome to [{locationInfo?.name}!]</h2>
            <ul className="flex items-center justify-between">
                <li className="text-green-700">Type: {locationInfo?.type}</li>
                <li className="text-green-700 ml-4">Dimension:{locationInfo?.dimension}</li>
                <li className="text-green-700 ml-4">Population:{locationInfo?.residents.length}</li>
            </ul>
        </article>
    </section>
  );
};
export default Location;