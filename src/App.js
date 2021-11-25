import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const postRequest = () => {
    //Change URL here
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        userId: 1,
        title: "Title",
        body: "Body",
      })
      .then((res) => console.log(res.status, "Post request succesfull"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <button className="btn" onClick={postRequest}>
        Buy now
      </button>
    </div>
  );
}

export default App;
