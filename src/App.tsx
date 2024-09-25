import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setDisplay(String(eval(display)));
      } catch {
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay("");
    } else {
      setDisplay(display + value);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          width: "260px",
          margin: "50px auto",
          boxShadow: "0 0 10px 0 #000",
          borderRadius: "20px",
          overflow: "hidden",
          backgroundColor: "#000",
          padding: "10px",

        }}
      >
        <div
          style={{
            backgroundColor: "#333",
            color: "#fff",
            fontSize: "2em",
            textAlign: "right",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          {display || "0"}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              style={{
                width: "calc(25% - 8px)",
                padding: "20px",
                fontSize: "1.2em",
                backgroundColor: "#3e3e3e",
                cursor: "pointer",
                margin: "4px",
              }}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
     <div style={{
        color: "#5d00ff",
        fontSize: "2.2em",
        textAlign: "center",
        fontFamily: "cursive",
        fontWeight: "bold",
      }}>
     Moaz's calculator / حاسبة معاذ
     </div>
    </div>
  );
}

export default App;
