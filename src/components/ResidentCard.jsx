import axios from "axios";
import { useEffect, useState } from "react";

const ResidentCard = ({ residentURL }) => {
    const [residentInfo, setResidentInfo] = useState(null);

    const bgByStatus = {
        Alive: "bg-green-500",
        Dead: "bg-red-500",
        unknown: "bg-slate-500",
    }

    useEffect(() => {
        axios
        .get(residentURL)
        .then(({ data }) => setResidentInfo(data))
        .catch((err) => console.log(err));
    }, []);

  return (
    <article className="border border-green-500 bg-transparent p-0 -md mb-4">
        <header className="relative border border-green-500">
            <img className="" src={residentInfo?.image} alt="" />
            {/* status */}
            <div className="border border-green-500 flex items-center gap-2 absolute t bottom-8 left-1/2 -translate-x-1/2 bg-black/50 text-white p-1 px-2">
                <div className={`h-6 aspect-square rounded-full ${bgByStatus[residentInfo?.status]}`}></div>
                <span className=" text-white">{residentInfo?.status}</span>
            </div>
        </header>
        <section className="border border-green-500">
            <h5 className="text-white text-md">{residentInfo?.name}</h5>
            <ul className="text-white ">
                
                    <li>
                        <span className="text-green-500">Especies:     </span>{residentInfo?.species}
                    </li>
                    <li>
                        <span className="text-green-500">Origin:        </span>{residentInfo?.origin.name}
                    </li>
                    <li>
                        <span className="text-green-500">Times appear: </span>{residentInfo?.episode.length}
                    </li>
                
            </ul>
        </section>
    </article>
  );
};
export default ResidentCard;