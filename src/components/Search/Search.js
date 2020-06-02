import React, { useState } from "react";
import styles from './Search.module.css'

export const Search = ({setSearchTerm}) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    if(e.key === 'Enter') {
      setSearchTerm(query)
      setQuery('')
    }
    
   }

  return (
    <div className={styles.Search}>
      <input
        type="text"
        placeholder="Type your location"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleSearch}
      />
    </div>
  );
};
