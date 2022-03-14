import { Card } from "antd";
import { useState, useEffect } from "react";
import "./main.css";

export default function Main() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://gamehunter-db.uc.r.appspot.com/sports")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="main">
      {!games ? (
        <h2>Loading... Please wait</h2>
      ) : (
        <>
          <h2 className="section-heading">Upcoming Games</h2>
          <div className="games-container">
            {games.map((game) => {
              return (
                <Card
                  className="card"
                  title={game.name}
                  bordered={false}
                  style={{ width: 300 }}
                >
                  <p>Location: {game.location}</p>
                  <p>Date: {game.date}</p>
                  <p>Time: {game.time}</p>
                  <p>Number of Players: {game.playerCount}</p>
                </Card>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
