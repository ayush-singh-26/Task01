import React, { useCallback, useState } from 'react';

export const SearchBar = ({ users, setFilteredUsers }) => {
  const [query, setQuery] = useState('');

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const handleSearch = (text) => {
    setQuery(text);
    const searchText = text.toLowerCase();
    if (searchText.length > 0) {
      const filtered = users.filter(user =>
        user.name.toLowerCase().includes(searchText)
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  };

  const debouncedSearch = useCallback(debounce(handleSearch, 300), [users]);

  return (
    <div className="w-full max-w-md mx-auto my-8 bg-transparent">
      <input
        type="text"
        value={query}
        onChange={(e) => debouncedSearch(e.target.value)}
        placeholder="Search user name..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
