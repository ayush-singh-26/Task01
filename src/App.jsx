import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { Contact } from './components/Contact';
import { SearchBar } from './components/SearchBar';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
      setFilteredUsers(res.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-opacity-50 z-0">
      </div>
      <div className="relative z-10">
        <Navbar />
        <SearchBar users={users} setFilteredUsers={setFilteredUsers} />
        <Card userData={filteredUsers} />
        <Contact />
      </div>
    </div>
  );
}

export default App;
