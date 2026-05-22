import axios from "axios";

const App = () => {
  // const getResponse = async () => {
  //   const res = await fetch("http://localhost:3000/");
  //   const data = res.json();
  //   data
  //     .then((e) => {
  //       console.log(e);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const getResponse = async () => {
    // const res = await axios.get("http://localhost:3000/");
    // const data = res.data;
    // console.log(data);

    await axios
      .get("http://localhost:3000/")
      .then((e) => {
        console.log(e.data);
        console.log(e.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={() => getResponse()}>Send</button>
    </div>
  );
};

export default App;
