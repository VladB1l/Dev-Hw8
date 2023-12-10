"use client";
import styles from "./page.module.css";
import ListNote from "./Components/ListNote/ListNode";
import AddFunction from "./Components/AddFunction/AddFunction";
import { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(() => {
    const countValue = localStorage.getItem("NoteCount");
    return countValue ? JSON.parse(countValue) : 1;
  });

  const [list, setList] = useState(() => {
    const listValue = localStorage.getItem("ListInfo");
    return listValue ? JSON.parse(listValue) : [];
  });

  const detective = {
    display: list.length === 0 ? "flex" : "none",
  };

  useEffect(() => {
    localStorage.setItem("NoteCount", JSON.stringify(count - 1));
    localStorage.setItem("ListInfo", JSON.stringify(list));
  }, [count, list]);

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
