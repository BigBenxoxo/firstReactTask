import { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import Logo from "./assets/react.svg"; //Images in react

function Greeting({ name }) {
  if (name === "Ben") {
    return <p> Welcome {name}</p>;
  }
  return <p>Please log in</p>; // Conditional rendering.
}

function App() {
  //Destructuring(?)
  const [persons, setPersons] = useState([
    //Handling event + modify state
    { id: 1, name: "Bendik", title: "CEO", age: 31 },
    { id: 2, name: "John", title: "Cleaner", age: 40 },
    { id: 3, name: "Alice", title: "Receptionist", age: 25 },
  ]);

  const removeHandler = (id) => {
    // Handling event
    const updatedArray = persons.filter((person) => person.id !== id);
    setPersons(updatedArray);
  };

  return (
    <div>
      <Header logo="Bendik Pettersen" />
      <main>
        <Greeting name="Someone"></Greeting>
        <img src={Logo} />
        <h2>This is my application</h2>
        <div className="cards">
          {persons.map(
            (
              person //Sending to child (Card) and passing parameter to event handler.
            ) => (
              <Card
                key={person.id}
                {...person}
                click={() => removeHandler(person.id)} //Handling event
              />
            )
          )}
        </div>
        <button className="btn">Click me</button>
      </main>
      <Footer copyright="Copyright Bendik Pettersen" />
    </div>
  );
}

export default App;
