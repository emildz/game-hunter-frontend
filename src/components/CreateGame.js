import { Modal, Form, Button, Input, DatePicker } from "antd";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./common/Navbar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  border: "3px solid #145ff5",
  boxShadow: 24,
  p: 4,
};

const CreateGame = () => {
  const [name, setName] = useState("");
  const [sport, setSport] = useState("");
  const [playerCount, setPlayerCount] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [open, setOpen] = useState(false);
  const [game, setGame] = useState();
  // game and setGame
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isOpen, setIsOPen] = useState(false);

  const newGame = {
    name: name,
    sport: sport,
    location: location,
    date: date,
    time: time,
    playerCount: playerCount,
  };

  const handleForm = (e) => {
    e.preventDefault();
    fetch("https://gamehunter-db.uc.r.appspot.com/newgame", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGame),
    })
      .then((response) => response.json())
      .then(fetch("https://gamehunter-db.uc.r.appspot.com/sports").then())
      .then(handleOpen())
      .then(navigate("/"))
      .catch((err) => console.error(err));
  };

  return (
      <div className="create-game-container">
        <Navbar />
        <form
          onSubmit={handleForm}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "20px",
            maxWidth: 400,
            margin: "0 auto",
          }}
        >
          <label>
            Game Name
            <input
              style={{ display: "flex", flexDirection: "column" }}
              id="outlined-basic"
              variant="outlined"
              name="Game Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          &nbsp;
          <label>
            Type of Sport
            <input
              style={{ display: "flex", flexDirection: "column" }}
              id="outlined-basic"
              variant="outlined"
              required={true}
              value={sport}
              onChange={(e) => setSport(e.target.value)}
            />
          </label>
          &nbsp; <br />
          <label>
            Number Of Players
            <input
              style={{ display: "flex", flexDirection: "column" }}
              id="outlined-basic"
              variant="outlined"
              required={true}
              value={playerCount}
              onChange={(e) => setPlayerCount(e.target.value)}
            />
            &nbsp;
          </label>
          <label>
            Location
            <input
              style={{ display: "flex", flexDirection: "column" }}
              id="outlined-basic"
              variant="outlined"
              value={location}
              required={true}
              onChange={(e) => setLocation(e.target.value)}
            />
            &nbsp; <br />
          </label>
          <label>
            Date
            <input
              type="date"
              id="outlined-basic"
              variant="outlined"
              required={true}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label>
            {" "}
            Time
            <input
              style={{ display: "flex", flexDirection: "column" }}
              id="outlined-basic"
              variant="outlined"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </label>
          &nbsp; <br />
          <button
            type="submit"
            variant="contained"
            onClick={(e) => handleForm()}
          >
            Create Game
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div sx={style}>
              <div style={{ display: "flex", alignContent: "center" }}>
                <button
                  color="primary"
                  variant="contained"
                  style={{
                    color: "white",
                    marginLeft: "50px",
                  }}
                  onClick={() => navigate(`/eventList`)}
                >
                  Game Created!
                </button>
              </div>
            </div>
          </Modal>
        </form>

        <Form
          
          layout="vertical"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 8,
          }}
        ></Form>
      </div>
  );
};

export default CreateGame;
