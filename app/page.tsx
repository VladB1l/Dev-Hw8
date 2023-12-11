"use client";
import styles from "./page.module.css";
import ListNote from "./Components/ListNote/ListNode";
import AddFunction from "./Components/AddFunction/AddFunction";
import { useState, useEffect } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);

  const detective = {
    display: list.length === 0 ? "flex" : "none",
  };

  useEffect(() => {
    const countValue = localStorage.getItem("NoteCount");
    setCount(countValue ? JSON.parse(countValue) : 0);
  
    const listValue = localStorage.getItem("ListInfo");
    setList(listValue ? JSON.parse(listValue) : []);
  }, []); 
    

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
