import React, { useState } from "react";
import { data } from "./data";

function Search() {
  const [search, setSearch] = useState("");
  const filteredData = data.filter((item) =>
    item.head.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div className="cari">
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <ul>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <li className="mb-12" key={item.id}>
                <p className="text-xl font-semibold mb-2">{item.head}</p>
                <div className="flex flex-row items-center gap-12">
                  <img
                    src={item.pic}
                    alt={item.head}
                  />
                  <div className="garis flex w-1 h-80 bg-black"></div>
                  <p className="text-xl">{item.capt}</p>
                </div>
              </li>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>
      </div>
    </>
  );
}

export default Search;
