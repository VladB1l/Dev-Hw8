"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./Search.module.css";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

export default function Page() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleKey(event: any) {
    if (event.key === "Enter") {
      CheckArr();
    }
  }

  function CheckArr() {
    const listValue = localStorage.getItem("ListInfo");
    const list = listValue ? JSON.parse(listValue) : []

    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      list.map((listitem: any, index: number) => {
        if (listitem[0] === inputValue) {
          router.push(`/Notes/${encodeURIComponent(listitem[0])}?id=${index}`);
        }
      });

      inputRef.current.value = "";
    }
  }

  function HandleClick() {
    CheckArr();
  }

  return (
    <div className={styles.search}>
      <input
        ref={inputRef}
        onKeyDown={(e) => handleKey(e)}
        type="text"
        placeholder="Search note..."
        spellCheck="false"
      />
      <Icon onClick={HandleClick} icon="material-symbols:search" />
    </div>
  );
}
