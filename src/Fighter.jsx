function Fighter({ fighter, onSelect, btnText }) {
  return (
    <li>
      <img src={fighter.img} alt={fighter.name} />
      <p>{fighter.name}</p>
      <p>Price: {fighter.price}</p>
      <p>Strength: {fighter.strength}</p>
      <p>Agility: {fighter.agility}</p>
      <button onClick={onSelect}>{btnText}</button>
    </li>
  );
}

export default Fighter;
