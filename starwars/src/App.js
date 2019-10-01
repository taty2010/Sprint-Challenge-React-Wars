import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import StarWarsblock from "./Components/StarWarsBlock";
import Nav from "./Components/Nav";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [people, setPeople] = useState([]);
  const [page, setPage] = useState("https://swapi.co/api/people/");
  const [pageData, setPageData] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const people = await axios.get(`${page}`);
        setPeople(people.data.results);
        setPageData(people.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [page]);

  function nextPage() {
    if (page) {
      return setPage(pageData.next);
    }
  }

  function backPage() {
    if (pageData.previous) {
      return setPage(pageData.previous);
    }
  }

  return (
    <div className="App">
      <Nav next={nextPage} back={backPage} />
      <h1 className="Header">React Wars</h1>
      <div className="blockWrap">
        {Object.values(people).map((list, i) => (
          <StarWarsblock
            key={i}
            name={list.name}
            height={list.height}
            birth={list.birth_year}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
