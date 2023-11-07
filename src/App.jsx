import { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import Logo from "./assets/react.svg";
function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: "Bendik", title: "CEO", age: 31 },
    { id: 2, name: "John", title: "Cleaner", age: 40 },
    { id: 3, name: "Alice", title: "Receptionist", age: 25 },
  ]);

  const removeHandler = (id) => {
    const updatedArray = persons.filter((person) => person.id !== id);
    setPersons(updatedArray); //? Explain how it works.
  };

  return (
    <div>
      <Header logo="Bendik Pettersen" />
      <main>
        <img src={Logo} />
        <h2>This is my application</h2>
        <div className="cards">
          {persons.map((person) => (
            <Card
              key={person.id}
              {...person}
              click={() => removeHandler(person.id)}
            /> //Ask to explain this step by step
          ))}
        </div>
        <button className="btn">Click me</button>
      </main>
      <Footer copyright="Copyright Bendik Pettersen" />
    </div>
  );
}

export default App;
