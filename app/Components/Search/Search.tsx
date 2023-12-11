"use client";
import { useRef } from "react";
import styles from "./Search.module.css";
import { useRouter} from "next/navigation";
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
    const list = listValue ? JSON.parse(listValue) : [];

    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      const index = list.findIndex(
        (listitem: any) => listitem[0] === inputValue
      );
      if (index !== -1) {
        router.push(`/Notes/${encodeURIComponent(list[index][0])}?id=${index}`);
      } else {
        router.push(`/${inputValue}`);
      }
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
