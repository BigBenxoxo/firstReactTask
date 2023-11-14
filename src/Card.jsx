const Card = ({ name, title, age, number, click }) => {
  return (
    <div //Styling in react(?)
      style={age > 35 ? { color: "red" } : { backgroundColor: "blue" }}
      className="card"
    >
      <h1>Name: {name}</h1>
      <p>Title: {title}</p>
      <p className={age > 35 ? "pink-age" : "blue-age"}>Age: {age}</p>
      <button onClick={click}>Close</button>
    </div>
  );
};

export default Card;

/*

const Card = ({ name, title, age, number, click }) => {
  if (age > 25) {
    return (
      <div style={{ color: "red", backgroundColor: "blue" }} className="card">
        <h1>Name: {name}</h1>
        <p>Title: {title}</p>
        <p>Age: {age}</p>
        <p>ID: {number}</p>
        <button onClick={click}>Close</button>
      </div>
    );
  }
  return (
    <div className="card">
      <h1>Name: {name}</h1>
      <p>Title: {title}</p>
      <p>Age: {age}</p>
      <p>ID: {number}</p>
      <button onClick={click}>Close</button>
    </div>
  );
};

export default Card;

*/
