import React, { useState, useEffect } from "react";
import axios from "axios";
import SpeciesDetail from "../component/SpeciesDetail";
import "./style.scss";

export default function Swapi() {
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredName, setFilteredName] = useState([]);

  // Fetch Data from API
  const fetchSpecies = async () => {
    setLoading(true);
    const { data } = await axios.get("https://swapi.dev/api/species/");
    setSpecies(data.results);
    setTimeout(() => setLoading(false), 100); // Loading 100ms
  };

  // Function of Data API Lifecycle
  useEffect(() => {
    fetchSpecies();
  }, []);

  // Search Input Lifecycle
  useEffect(() => {
    setFilteredName(
      species.filter((spec) =>
        spec.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, species]);

  // Loading
  if (loading) {
    return <h2>Loading......</h2>;
  }

  return (
    <div>
      <h1>List of Star Wars Species</h1>
      <input
        type="text"
        placeholder="Search Name"
        onChange={(evt) => setSearch(evt.target.value)}
      />
      {filteredName.map((spec, id) => (
        <SpeciesDetail key={id} {...spec} />
      ))}
    </div>
  );
}
