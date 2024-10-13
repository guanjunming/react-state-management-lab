import { useState } from "react";
import "./App.css";
import Fighter from "./Fighter.jsx";
import { initialFighters } from "./data.js";

function App() {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState(initialFighters);

  const totalStrength = team.reduce((sum, f) => sum + f.strength, 0);
  const totalAgility = team.reduce((sum, f) => sum + f.agility, 0);

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
      setZombieFighters(zombieFighters.filter((f) => f.name != fighter.name));
    } else {
      console.log("Not enough money");
    }
  };

  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter((f) => f.name != fighter.name));
    setMoney(money + fighter.price);
    setZombieFighters([...zombieFighters, fighter]);
  };

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>

      <h2>Team</h2>
      <ul>
        {team.length > 0 ? (
          team.map((fighter) => (
            <Fighter
              key={fighter.name}
              fighter={fighter}
              onSelect={() => handleRemoveFighter(fighter)}
              btnText="Remove"
            />
          ))
        ) : (
          <p>Pick some team members</p>
        )}
      </ul>

      <h2>Fighters</h2>
      <ul>
        {zombieFighters.map((fighter) => (
          <Fighter
            key={fighter.name}
            fighter={fighter}
            onSelect={() => handleAddFighter(fighter)}
            btnText="Add"
          />
        ))}
      </ul>
    </>
  );
}

export default App;
