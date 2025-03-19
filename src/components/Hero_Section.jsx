import { useEffect, useState, Suspense, lazy } from "react";
import { SearchBar } from "./SearchBar";

// const PricingTable = lazy(() => import("./PricingTable"));

export default function Hero_Section() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <SearchBar/>
  );
}