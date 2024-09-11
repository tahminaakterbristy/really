import { useLoaderData } from "react-router-dom";
import FeatureCard from "../FeatureCard/FeatureCard";
import { useEffect, useState } from "react";

const Residential = () => {
  const [realStates, setRealEstate] = useState([]);

  useEffect(() => {
    fetch("/realstate.json")
      .then((res) => res.json())
      .then((data) => setRealEstate(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-blue-800 font-bold text-center mt-8">
        Residential
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {realStates &&
          realStates.map((realEstate) => (
            <FeatureCard
              key={realEstate.id}
              realEstate={realEstate}
            ></FeatureCard>
          ))}
      </div>
    </div>
  );
};

export default Residential;
