"use client";

import React from "react";
import { CiSearch } from "react-icons/ci";
import { searchVideos } from "@/utils/fetchData";
import { useState } from "react";
import Image from "next/image";

const SearchBar = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = await searchVideos(`search/?query=${query}`);
    setResult(data.videos);
    console.log(data);
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>
          <CiSearch style={{ height: "20px", width: "20px" }} />
        </button>
      </form>

      {loading ? <p>Loading...</p> : null}

      {
        result.map((a,b) => 
          (
            <div key={b}>
              <img src={a.thumbnails[0].url} alt="" height={200} width={400} />
              <h1 className="font-bold">{a.author}</h1>
              <p>{a.video_length}</p>
              <p>{a.number_of_views}</p>
              </div>
          )
        )
      }

    </div>
  );
};

export default SearchBar;
