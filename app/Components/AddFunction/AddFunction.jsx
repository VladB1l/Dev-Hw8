import { useEffect, useRef, useState } from "react";
import styles from "./AddFunction.module.css";

function AddFunction(props) {
  const [isOpen, setToggle] = useState(false);
  const [inputValue, setInput] = useState("");
  const inputref = useRef(0);
  const buttonref = useRef(0);

  useEffect(() => {
    {
      isOpen ? inputref.current.focus() : buttonref.current.focus();
    }
  }, [isOpen]);

  function AddNote() {
    {
      inputValue.trim() !== ""
        ? props.list.push([inputValue, false, ""])
        : props.list.push([`Note ${props.count + 1}`, false, ""]);
    }
    setTimeout(() => {
      props.setCount(props.count + 1);
      Toggle();
    }, 0);
  }

  function Toggle() {
    setInput("");
    setToggle(!isOpen);
  }

  function handleKey(event) {
    {
      if (event.key === "Enter") {
        if (event.target.value === inputValue) {
          AddNote();
        }
        if (event.target.value === "button") {
          Toggle();
        }
      }
    }
  }

  const popup = {
    display: isOpen ? "flex" : "none",
  };

  return (
    <div>
      <button
        ref={buttonref}
        value={"button"}
        onKeyDown={(e) => handleKey(e)}
        className={styles.addButton}
        onClick={Toggle}
      >
        +
      </button>
      <div className={styles.popup} style={popup}>
        <div className={styles.popupContent}>
          <h2>New note</h2>
          <input
            ref={inputref}
            value={inputValue}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => handleKey(e)}
            type="text"
            placeholder="Input your note..."
          />
          <div className={styles.buttons}>
            <button onClick={Toggle}>Cancel</button>
            <button onClick={AddNote}>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddFunction;
