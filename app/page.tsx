"use client";
import styles from "./page.module.css";
import ListNote from "./Components/ListNote/ListNode";
import AddFunction from "./Components/AddFunction/AddFunction";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  const [list, setList] = useState([]);

  const detective = {
    display: list.length === 0 ? "flex" : "none",
  };

  return (
    <main className={styles.main}>
      <div className={styles.detective} style={detective}>
        <p>Empty ...</p>
      </div>

      <ListNote
        list={list}
        setList={setList}
        count={count}
        setCount={setCount}
      />
      <AddFunction
        list={list}
        setList={setList}
        count={count}
        setCount={setCount}
      />
    </main>
  );
}
