// App.js
import { useState } from "react";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState(0);

  const toNumber = (v) => {
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  };

  const onChange = (e) => setInput(e.target.value);

  const withNumber = (fn) => {
    const n = toNumber(input);
    if (n === null) {
      alert("Veuillez saisir un nombre valide.");
      return;
    }
    fn(n);
  };

  const add = () => withNumber((n) => setResult((r) => r + n));
  const subtract = () => withNumber((n) => setResult((r) => r - n));
  const multiply = () => withNumber((n) => setResult((r) => r * n));
  const divide = () =>
    withNumber((n) => {
      if (n === 0) {
        alert("Division par zéro impossible.");
        return;
      }
      setResult((r) => r / n);
    });

  const resetInput = () => setInput("0");
  const resetResult = () => setResult(0);

  // Bonus UX: Enter = addition rapide
  const onKeyDown = (e) => {
    if (e.key === "Enter") add();
  };

  return (
    <div style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ fontSize: 48, marginBottom: 8 }}>Simplest Working Calculator</h1>

      <div style={{ fontSize: 40, margin: "16px 0" }}>{result}</div>

      <input
        value={input}
        onChange={onChange}
        onKeyDown={onKeyDown}
        inputMode="decimal"
        aria-label="number input"
        style={{
          width: 500,
          maxWidth: "90%",
          fontSize: 32,
          padding: "12px 16px",
          border: "2px solid #ccc",
          borderRadius: 12,
          outline: "none",
        }}
      />

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 24 }}>
        <button onClick={add} style={btnStyle}>add</button>
        <button onClick={subtract} style={btnStyle}>subtract</button>
        <button onClick={multiply} style={btnStyle}>multiply</button>
        <button onClick={divide} style={btnStyle}>divide</button>

        <button onClick={resetInput} style={accentStyle}>reset input</button>
        <button onClick={resetResult} style={accentStyle}>reset result</button>
      </div>
    </div>
  );
}

const btnStyle = {
  fontSize: 28,
  padding: "14px 22px",
  borderRadius: 14,
  border: "2px solid #ddd",
  background: "#fff",
  cursor: "pointer",
};

const accentStyle = {
  ...btnStyle,
  background: "#ff6a52",
  color: "#fff",
  border: "none",
};
