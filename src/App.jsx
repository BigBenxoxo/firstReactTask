import { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import Logo from "./assets/react.svg"; //Images in react, image has to be in src and assets.

function Greeting({ name }) {
  if (name === "Ben") {
    return <p> Welcome {name}</p>;
  }
  return <p>Please log in</p>; // Conditional rendering.
}

function App() {
  const [persons, setPersons] = useState([
    //Modify state
    { id: 1, name: "Bendik", title: "CEO", age: 31 },
    { id: 2, name: "John", title: "Cleaner", age: 40 },
    { id: 3, name: "Alice", title: "Receptionist", age: 25 },
  ]);
  const [search, setSearch] = useState("");

  const removeHandler = (id) => {
    // Handling event
    const updatedArray = persons.filter((person) => person.id !== id);
    setPersons(updatedArray);
  };

  const searchHandler = (e) => {
    // Why is this = (e)
    setSearch(e.target.value);
  };

  return (
    <div>
      <Header logo="Bendik Pettersen" />
      <main>
        <Greeting name="Someone"></Greeting>
        <img src={Logo} />
        <input type="text" onChange={searchHandler} />

        <h2>This is my application</h2>
        <div className="cards">
          {persons
            .filter((person) =>
              person.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((person) => (
              <Card
                key={person.id}
                {...person}
                click={() => removeHandler(person.id)} //Event function, that we pass to the child in Card.jsx (onClick)
              />
            ))}
        </div>
        <button className="btn">Click me</button>
      </main>
      <Footer copyright="Copyright Bendik Pettersen" />
    </div>
  );
}

export default App;
