import React, { useState, useEffect } from "react";
import FilterData from "./Component/FilterData";

const App = () => {
  const [dogUrl, setDogUrl] = useState("");

  const fetchDogImage = async () => {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setDogUrl(data.message); // data.message = image URL
    } catch (err) {
      console.error("Failed to fetch dog image", err);
    }
  };

  useEffect(() => {
    fetchDogImage(); // Load once on mount
  }, []);

  return (
    <div className="text-center p-10">
      <h1 className="text-2xl font-bold mb-6">🐕 Random Dog Generator</h1>
      <FilterData imageUrl={dogUrl} />
      <button
        onClick={fetchDogImage}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Fetch Another Dog
      </button>

      <div className="w-full h-40 border-2">
        
      </div>
    </div>
  );
};

export default App;
