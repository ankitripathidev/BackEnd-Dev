import axios from "axios";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  // fetch-method
  // const getResponse = async () => {
  //   const response = await fetch("http://localhost:3000");
  //   const data = await response.json();
  //   console.log(data);
  // };

  // axios-method
  const getResponse = async () => {
    // const res = await axios.get("http://localhost:3000");
    // console.log(res.data);

    // axios
    //   .get("http://localhost:3000")
    //   .then((e) => {
    //     console.log(e.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    /* Notes:
     In axios.post(), the second argument is the data (request body) you want to send to the server.
    axios.post(URL, DATA) 
    */
    axios
      .post("http://localhost:3000", {
        // If the key& value are same we can write username:username = username
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
    <div className="main">
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
