"use client";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const index = parseInt(id ?? "0", 10);

  const decodedSlug = decodeURIComponent(params.slug);
  const [height, setHeight] = useState("auto");
  const [list, setList] = useState(() => {
    const listValue = localStorage.getItem("ListInfo");
    return listValue ? JSON.parse(listValue) : [];
  });
  const newList = [...list];

  useEffect(() => {
    localStorage.setItem("ListInfo", JSON.stringify(newList));
  }, [list]);

  const newHeight = {
    height: `${height}`,
  };

  function FuncResize(elem: any) {
    if (id) {
      setHeight(`${elem.scrollHeight}px`);
      newList[index][2] = elem.value;
      setList(newList);
    }
  }

  return (
    <div className={styles.main}>
      <h2>{decodedSlug}:</h2>
      <div className={styles.note_content}>
        <textarea
          value={list[index][2]}
          onChange={(e) => FuncResize(e.target)}
          style={newHeight}
          placeholder="Type something ..."
        />
      </div>
    </div>
  );
}
