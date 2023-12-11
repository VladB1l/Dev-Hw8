"use client";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import { useEffect, useState, useRef } from "react";

function FuncResize(elem: any, list: any, setList: any, index: number) {
  const updatedList = [...list];
  updatedList[index][2] = elem.value;
  setList(updatedList);
}

export default function Page({ params }: { params: { slug: string } }) {
  if (typeof window !== "undefined") {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const index = parseInt(id ?? "0", 10);

    const decodedSlug = decodeURIComponent(params.slug);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [list, setList] = useState(() => {
      const listValue = localStorage.getItem("ListInfo");
      return listValue ? JSON.parse(listValue) : [];
    });

    useEffect(() => {
      localStorage.setItem("ListInfo", JSON.stringify(list));
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }, [list]);

    return (
      <div className={styles.main}>
        <h2>{decodedSlug} :</h2>
        <div className={styles.note_content}>
          <textarea
            ref={textareaRef}
            value={list[index][2]}
            onChange={(e) => FuncResize(e.target, list, setList, index)}
            placeholder="Type something ..."
            spellCheck="false"
          />
        </div>
      </div>
    );
  }
}
