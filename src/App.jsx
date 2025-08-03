import { useState } from "react";
import ToDo from "./component/ToDo";

export default function App() {
  const [item, setItem] = useState([]);
  const [popup, setPopup] = useState(false);
  const [input, setInput] = useState("");

  const addWork = () => {
    if (!input) {
      return alert("Please Enter Your TODO First");
    }
    setItem((prev) => [...prev, input]);
    setInput("");
    setPopup(true);

    setTimeout(() => setPopup(false), 1500);
  };
  return (
    <>
      <div className="w-100 bg-dark d-flex justify-content-center gap-3 p-5 ">
        <input
          id="input"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          placeholder="Enter Your ToDo Work Here..."
          className="p-2 w-50 bg-dark-subtle text-center fs-5 d-flex flex-wrap text-uppercase rounded-1"
        />
        <button
          id="add"
          className="btn btn-primary text-bolder text-light w-25"
          onClick={addWork}
        >
          ADD
        </button>
      </div>
      <div
        id="content"
        className="bg-secondary d-flex flex-column-reverse align-items-center"
      >
        {item.map((each, idx) => {
          return <ToDo key={idx} work={each} />;
        })}
      </div>
      {popup && <Success />}
    </>
  );
}

function Success() {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1055, // above most content
        backgroundColor: "#d1e7dd", // light green for success
        padding: "1rem 2rem",
        borderRadius: "8px",
        boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.15)",
      }}
    >
      ✅ Successful! Your ToDo was added.
    </div>
  );
}
