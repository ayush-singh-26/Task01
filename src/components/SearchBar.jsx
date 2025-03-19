// /src/components/SearchBar.jsx

import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

export const SearchBar = () => {
    const [hashMap, setHashMap] = useState({});
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [users, setUsers] = useState([]);

    // Fetch users and store them in a HashMap
    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(res.data);
            const map = {};
            res.data.forEach(user => {
                map[user.name.toLowerCase()] = user;
            });
            setHashMap(map);
        };
        fetchUsers();
    }, []);

    // Debounce logic
    const debounce = (func, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(this, args), delay);
        };
    };

    // Handle input change and filtering
    const handleSearch = (text) => {
        setQuery(text);
        if (text.length > 0) {
            const filtered = Object.keys(hashMap).filter(name =>
                name.includes(text.toLowerCase())
            );
            setResults(filtered.map(name => hashMap[name]));
        } else {
            setResults([]);
        }
    };

    const debouncedSearch = useCallback(debounce(handleSearch, 300), [hashMap]);

    return (
        <div className="w-full max-w-md mx-auto my-8">
            <input
                type="text"
                value={query}
                onChange={(e) => debouncedSearch(e.target.value)}
                placeholder="Search user name..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ul className="mt-4 bg-white rounded-lg shadow-md">
                {results.map((user, idx) => (
                    <li key={idx} className="p-2 hover:bg-gray-100">
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};
