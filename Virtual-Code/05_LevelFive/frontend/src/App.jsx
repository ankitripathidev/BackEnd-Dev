import { useState } from "react";
import axios from "axios";

const App = () => {
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");

  const getResponse = async () => {
    axios
      .post("http://localhost:3000", {
        username,
        city,
        age,
      })
      .then((e) => {
        console.log(e.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="text"
        placeholder="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <input
        type="text"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={() => getResponse()}>Send</button>
    </div>
  );
};

export default App;
