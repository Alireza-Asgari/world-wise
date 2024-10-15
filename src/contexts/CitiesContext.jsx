import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});
  useEffect(function () {
    async function fetchCities() {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:8000/cities");
        const data = await res.json();
        setCities(data);
        setIsLoading(false);
      } catch {
        setIsLoading(false);
        alert("Fetch failed");
      }
    }
    fetchCities();
  }, []);
  async function getCity(id) {
    setIsLoading(true);
    try {
      const res = await fetch(`http://localhost:8000/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      alert("Fetch failed");
    }
  }
  return (
    <CitiesContext.Provider
      value={{ cities: cities, isLoading: isLoading, getCity, currentCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("Cities context was used outside the CitiesProvider");
  return context;
}
export { CitiesProvider, useCities };
