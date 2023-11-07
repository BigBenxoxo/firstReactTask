const Card = ({ name, title, age, number, click }) => {
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
