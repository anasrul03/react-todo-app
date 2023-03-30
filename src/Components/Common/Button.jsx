import { useState, useEffect, useRef } from "react";
import { useToggle } from "./useToggle";

export default function Button() {
  const [button, setButton] = useState(0);
  const [button2, setButton2] = useState(0);
  // const [intervalID, setIntervalID] = useState();
  const intervalRef = useRef();
  const inputEl = useRef(null);
  const [open, toggle] = useToggle(true);

  useEffect(() => {
    // contentS
    const id = setInterval(() => {
      console.log("a second has passed");
    }, 1000);

    document.title = `You clicked ${button} times`;
    intervalRef.current = id;

    return () => clearInterval(intervalRef.current);
  });

  return (
    <>
      <input ref={inputEl} />
      <button onClick={() => inputEl.current.focus()} className="hooksButton">
        focus on input field
      </button>
      <button onClick={() => setButton(button + 1)} className="hooksButton">
        You have clicked buton {button} times
      </button>
      <button onClick={() => setButton2(button2 + 1)} className="hooksButton">
        You have clicked buton {button2} times
      </button>
      {open && <input />}
      <button onClick={toggle}>Pop the text field (useToggle)</button>
    </>
  );
}
