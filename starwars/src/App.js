import React from 'react';
import './App.css';

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
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
