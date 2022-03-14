import { Modal, Form, Button, Input, DatePicker } from "antd";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

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
  const [capacity, setCapacity] = useState(0);
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isOpen, setIsOPen] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();
    //   fetch(user).then((post) =>
    //     CreateGame { name, sport, capacity, address, date, description },
    //   );
    //  fetch post
    handleOpen();
  };
  // const toggle = () => {
  //   setIsOPen(!isOpen);
  // };
  // () => {
  //   if(CreateGame.trim() === '') {
  //     return
  //   }
  //   setLoading(true)
  //   const taskObject = {
  //     task: CreateGame,
  //   }
  //   fetch('', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(taskObject),
  //   })
  //     .then(() => {
  //       setNewTask('')

  //       fetch('')
  //         .then(response => response.json())
  //         .then(data => {
  //           setTasks(data)
  //           setLoading(false)
  //         })
  //     })
  //     .catch(err => {
  //       alert(err)
  //       setLoading(false)
  //     })
  // }
  // const handleForm = event => {
  //   setNewTask(event.target.value)
  // }
  return (
    <>
      <div>
        <form onSubmit={handleForm}>
          <input
            style={{ display: "flex", flexDirection: "column", width: 220 }}
            id="outlined-basic"
            label="Name of Event"
            variant="outlined"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          &nbsp;
          <input
            style={{ display: "flex", flexDirection: "column", width: 220 }}
            id="outlined-basic"
            label="Sport"
            variant="outlined"
            required="true"
            value={sport}
            onChange={(e) => setSport(e.target.value)}
          />
          &nbsp; <br />
          <input
            style={{ display: "flex", flexDirection: "column", width: 220 }}
            id="outlined-basic"
            label="Number of Players"
            variant="outlined"
            required="true"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
          &nbsp;
          <input
            style={{ display: "flex", flexDirection: "column", width: 220 }}
            id="outlined-basic"
            label="Location"
            variant="outlined"
            value={address}
            required="true"
            onChange={(e) => setAddress(e.target.value)}
          />
          &nbsp; <br />
          <input
            style={{ display: "flex", flexDirection: "column", width: 220 }}
            type="date"
            id="outlined-basic"
            variant="outlined"
            required="true"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          &nbsp;
          <input
            style={{ display: "flex", flexDirection: "column", width: 220 }}
            id="outlined-basic"
            label="Description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          &nbsp; <br />
          <button variant="contained" onClick={handleForm}>
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
        >
          <Form.Item label="Game Name">
            <Input />
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default CreateGame;
