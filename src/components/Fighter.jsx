const Fighter = ({ fighter, handleAdd, handleRemove }) => {
  return (
    <li>
      <img src={fighter.img} alt={fighter.name} />
      <p>{fighter.name}</p>
      <p>Price: {fighter.price}</p>
      <p>Strength: {fighter.strength}</p>
      <p>Agility: {fighter.agility}</p>
      {handleAdd ? (
        <button onClick={() => handleAdd(fighter)}>Add</button>
      ) : (
        <button onClick={() => handleRemove(fighter)}>Remove</button>
      )}
    </li>
  );
};

export default Fighter;
