import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try{
      const response = await fetch("https://anapioficeandfire.com/api/characters/1")
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const data = await response.json();
      console.log(data);
      setAllCharacters(data);
      } catch (err) {
        console.log(err);
        setErrorMsg("Data Not Found");
      }
    }
    fetchData();

  }, [])


  return (
    <div className="App">
      <h1>Fetching data</h1>
      {errorMsg && <h3>{errorMsg}</h3>}
      {allCharacters.map((character, index) => {
        return <p key={index}>{character.name}, {character.species}</p>
      })}
    </div>
  );
}

export default App;
